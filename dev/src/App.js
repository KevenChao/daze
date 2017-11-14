import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Clock from './routes/Clock';
import './App.less';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Clock}/>
          <Route path='/clock' component={Clock}/>
          <Route path='/schedule' component={Clock}/>
        </Switch>
      </div>
    );
  }
}

export default App;
