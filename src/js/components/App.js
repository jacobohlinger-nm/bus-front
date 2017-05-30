import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import '../../css/App.css';
import SetupWizard from './setup/SetupWizard';

class App extends Component {
  render() {
    return (
        <Route path="/setup" component={SetupWizard}/>
    );
  }
}

export default App;
