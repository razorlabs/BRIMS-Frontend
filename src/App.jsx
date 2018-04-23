import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Layout/Header';
import LandingPage from './Components/Layout/LandingPage';
import Specimen from './Components/Layout/Specimen';

class App extends React.Component {
  render() {
    return (
      <div>
        <LandingPage />
        {/*
         <Specimen />
        */}
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
