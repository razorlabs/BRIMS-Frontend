import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Components/Layout/Header';
import LandingPage from './Components/Layout/LandingPage';
import Specimen from './Components/Layout/Specimen';
import Shipping from './Components/Layout/Shipping';
import PatientScheduling from './Components/Layout/PatientScheduling';
import Query from './Components/Layout/Query';
import StorageSetup from './Components/Layout/StorageSetup';
import ActionItems from './Components/Layout/ActionItems';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={LandingPage} />
          <Route path="/specimen" component={Specimen} />
          <Route path="/shipping" component={Shipping} />
          <Route path="/schedule" component={PatientScheduling} />
          <Route path="/query" component={Query} />
          <Route path="/storage" component={StorageSetup} />
          <Route path="/action" component={ActionItems} />
        </div>
      </BrowserRouter>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
