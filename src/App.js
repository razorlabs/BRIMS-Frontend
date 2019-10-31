import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import LandingPage from './Components/Layout/LandingPage';
import SpecimenLandingPage from './Components/Layout/Specimen/SpecimenLandingPage';
import Shipping from './Components/Layout/Shipping/Shipping';
import Query from './Components/Layout/Query';
import ActionItems from './Components/Layout/ActionItems';
import Authenticate from './Components/Layout/login/Auth';
import SpecimenPageByID from './Components/Layout/Specimen/SpecimenPageByID';
import NewStorageSetup from './Components/Layout/Storage/StorageLandingPage';
import BoxSetup from './Components/Layout/Storage/BoxSetup';
import BoxViewWithData from './Components/Layout/Storage/BoxView';
import DrawSchedulingWithData from './Components/Layout/Schedule/DrawScheduleLandingPage';
import ExampleSearch from './Components/Layout/examples/SearchExample';
import Patient from './Components/Layout/Patient/PatientLandingPage';


let csrftoken;
async function getCsrfToken() {
  if (csrftoken) return csrftoken;
  csrftoken = await fetch('<csrf backend portal>')
    .then(response => response.json())
    .then(data => data.csrftoken);
  return await csrftoken;
}

// See https://github.com/graphql-python/graphene-django/issues/593
const client = new ApolloClient({
  uri: '<uri>',
  request: async (operation) => {
    const newcsrftoken = await getCsrfToken();
    // set the cookie 'csrftoken'
    Cookies.set('csrftoken', newcsrftoken);
    operation.setContext({
      // Set the X-CSRFToken to received csrftoken
      headers: {
        'X-CSRFToken': csrftoken,
      },
    });
  },
  credentials: 'include',
  cache: new InMemoryCache(),
});


class App extends Component {
  render() {
    return (
      // Hook to GraphQL/data backend through Apollo
      <ApolloProvider client={client}>
        <Router>
          <div className="App">
            <div>
              {/* Switch will cause only the first matching route to be displayed
                 Note, making the following an exact path will break any backend
                 javascript runners that attempt to host via root (/) */}

              <Switch>
                <Route path={`${process.env.PUBLIC_URL}/lims/specimen`} exact component={SpecimenLandingPage} />
                <Route path={`${process.env.PUBLIC_URL}/lims/specimen/:id`} component={SpecimenPageByID} />
                <Route path={`${process.env.PUBLIC_URL}/lims/shipping`} component={Shipping} />
                <Route path={`${process.env.PUBLIC_URL}/lims/schedule`} component={DrawSchedulingWithData} />
                <Route path={`${process.env.PUBLIC_URL}/lims/query`} component={Query} />
                <Route path={`${process.env.PUBLIC_URL}/lims/storage`} component={NewStorageSetup} />
                <Route path={`${process.env.PUBLIC_URL}/lims/boxsetup`} component={BoxSetup} />
                <Route path={`${process.env.PUBLIC_URL}/lims/boxview`} component={BoxViewWithData} />
                <Route path={`${process.env.PUBLIC_URL}/lims/action`} component={ActionItems} />
                <Route path={`${process.env.PUBLIC_URL}/lims/patient`} component={Patient} />
                <Route path={`${process.env.PUBLIC_URL}/lims/login`} component={Authenticate} />
                <Route path={`${process.env.PUBLIC_URL}/lims/search`} component={ExampleSearch} />
                <Route exact path={`${process.env.PUBLIC_URL}/lims`} component={LandingPage} />
              </Switch>
            </div>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
