import React, { PureComponent } from 'react';
import moment from 'moment';
import './Clock.less';

class Clock extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      time: {},
      back_color: '',
    };
  }
  componentDidMount() {
    this.timmer = setInterval(() => {
      const temp = moment().format('HH:mm:ss').split(':');
      const now = {
        hours: temp[0],
        minutes: temp[1],
        seconds: temp[2],
      }
      const back_color = `#${now.hours}${now.minutes}${now.seconds}`;
      const color = this.oppositeColor(back_color);
      this.refs.clock.style['background-color'] = back_color;
      this.refs.timmer.style['color'] = color;
      this.setState({ time: now, back_color });
    }, 1000);
  }

  oppositeColor(a) {
    a = a.replace('#','');
    const
      max16 = 15,
      b = [];
    for (let i = 0; i<a.length; i++) {
      const c16 = parseInt(a.charAt(i),16); //  to 16进制
      const c10 = parseInt(max16 - c16,10);   // 10进制计算
      b.push(c10.toString(16));     // to 16进制
    }
    return `#${b.join('')}`;
  }

  componentUnMount() {
    window.clearInterval(this.timmer);
  }
  render() {
    const { back_color } = this.state;

    const render_time = back_color.split('').map(e => <span>{e}</span>)

    return (
      <div className='clock' ref='clock'>
        <div className='timmer' ref='timmer'>
          {render_time}
        </div>
      </div>
    );
  }
}

export default Clock;
