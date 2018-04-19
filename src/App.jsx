import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Layout/Header';
import LandingPage from './Components/Layout/LandingPage';

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <LandingPage />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
