import React, { Component } from 'react';
import LandingPage from './Components/Layout/LandingPage';
import Specimen from './Components/Layout/Specimen';
import Shipping from './Components/Layout/Shipping';
import PatientScheduling from './Components/Layout/PatientScheduling';
import Query from './Components/Layout/Query';
import StorageSetup from './Components/Layout/StorageSetup';
import ActionItems from './Components/Layout/ActionItems';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            {/* Switch will cause only the first matching route to be displayed
               Note, making the following an exact path will break any backend
               javascript runners that attempt to host via */}

            <Switch>
              <Route path={`${process.env.PUBLIC_URL}/lims/specimen`} component={Specimen} />
              <Route path={`${process.env.PUBLIC_URL}/lims/shipping`} component={Shipping} />
              <Route path={`${process.env.PUBLIC_URL}/lims/schedule`} component={PatientScheduling} />
              <Route path={`${process.env.PUBLIC_URL}/lims/query`} component={Query} />
              <Route path={`${process.env.PUBLIC_URL}/lims/storage`} component={StorageSetup} />
              <Route path={`${process.env.PUBLIC_URL}/lims/action`} component={ActionItems} />
              <Route exact path={`${process.env.PUBLIC_URL}/lims`} component={LandingPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
