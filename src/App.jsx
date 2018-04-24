import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Layout/Header';
import LandingPage from './Components/Layout/LandingPage';
import Specimen from './Components/Layout/Specimen';
import Shipping from './Components/Layout/Shipping';
import PatientScheduling from './Components/Layout/PatientScheduling';
import Query from './Components/Layout/Query';
import StorageSetup from './Components/Layout/StorageSetup';

class App extends React.Component {
  render() {
    return (
      <div>
        {/*
         <LandingPage />
        */}
        {/*
         <Specimen />
        */}
        {/*
        <Shipping />
        */}
        {/*
        <PatientScheduling />
        */}
        {/*
        <Query />
        */}
        <StorageSetup />

      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
