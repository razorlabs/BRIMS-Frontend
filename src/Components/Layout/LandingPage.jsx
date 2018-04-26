import { Container, Card, Icon } from 'semantic-ui-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import Header from './Header';

export default class LandingPage extends React.Component {
  render() {
    const items = [
      {
        header: 'Specimen',
        description: 'Specimen and Aliquot Management',
        color: 'red',
        href: '/specimen',
      },
      {
        header: 'Shipping',
        description: 'Shipping and Recieving',
        color: 'blue',
        href: '/shipping',
      },
      {
        header: 'Query',
        description: 'Search Tool',
        color: 'green',
        href: '/query',
      },
      {
        header: 'Storage Setup',
        description: 'Set up Storage',
        color: 'orange',
        href: '/storage',
      },
      {
        header: 'Action Items',
        description: 'Items pending action',
        color: 'teal',
        href: '/action',
      },
      {
        header: 'Patient Scheduling',
        description: 'Schedule Patients',
        color: 'violet',
        href: '/schedule',
      },
    ];

    return (
      <div>
        <Header />
        <Container>
          <Card.Group centered itemsPerRow={3} items={items} />
        </Container>
      </div>
    );
  }
}

