# Seatbelt
Open Source Laboratory Information Management System

##### Getting Started:
1) Run "yarn"
2) Run "yarn start"
3) Open browser to localhost:port-of-choice/lims

## Developers Guide:

### SEATBELT Tech Stack

Seatbelt operates on the follow tech stack:

Backend: Django-Rest --> GraphQL
GraphQL-Client: Apollo
Frontend: React


##### Front End:

All React Components can be found in /src/Components

##### Data

The Data directory contains the gql tag queries available for export

##### Layout

The Layout directory contains all of the react visual components

##### Parent

The Route directory contains all of the combined data-layout components that are served up to react-router

The components here are served up in App.js in the <Switch> route path with route name matching the route component.

##### Front end development How-To

Assuming you are familiar with React and GraphQL:
1) Create an initial Layout Component
2) Create a base Route-View Component in /Components/Route that serves up the Layout Component (without prop/data integration)
3) Add the react-route to src/App.js serving the Route-View Components
4) Get the Layout Component with hard-coded props to a satifactory state
5) In /src/api/db.js create a graphql query that mocks inhereted data props in the Layout Component
6) In /src/Components/Data create the gql query string to import the mock-graphql data
7) Adjust the Route-view Component in /Components/Route to integrate the graphql query


