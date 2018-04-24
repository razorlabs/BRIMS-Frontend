import { Container, Card, Icon } from 'semantic-ui-react';
import React from 'react';
import Header from './Header';

export default class LandingPage extends React.Component {
  render() {
    const items = [
      {
        header: 'Specimen',
        description: 'Specimen and Aliquot Management',
        color: 'red',
      },
      {
        header: 'Shipping',
        description: 'Shipping and Recieving',
        color: 'blue',
      },
      {
        header: 'Query',
        description: 'Search Tool',
        color: 'green',
      },
      {
        header: 'Storage Setup',
        description: 'Set up Storage',
        color: 'orange',
      },
      {
        header: 'Action Items',
        description: 'Items pending action',
        color: 'teal',
      },
      {
        header: 'Patient Scheduling',
        description: 'Schedule Patients',
        color: 'violet',
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

