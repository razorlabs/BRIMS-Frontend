import { Container, Card } from 'semantic-ui-react';
import React from 'react';
import PageMenu from './PageMenu';

export default class LandingPage extends React.Component {
  render() {
    const items = [
      {
        header: 'Specimen',
        description: 'Specimen and Aliquot Management',
        color: 'red',
        href: '/lims/specimen',
      },
      {
        header: 'Shipping',
        description: 'Shipping and Recieving',
        color: 'blue',
        href: '/lims/shipping',
      },
      {
        header: 'Query',
        description: 'Search Tool',
        color: 'green',
        href: '/lims/query',
      },
      {
        header: 'Storage Setup',
        description: 'Set up Storage',
        color: 'orange',
        href: '/lims/storage',
      },
      {
        header: 'Action Items',
        description: 'Items pending action',
        color: 'teal',
        href: '/lims/action',
      },
      {
        header: 'Patient Scheduling',
        description: 'Schedule Patients',
        color: 'violet',
        href: '/lims/schedule',
      },
    ];

    return (
      <div>
        <PageMenu />
        <Container>
          <Card.Group centered itemsPerRow={3} items={items} />
        </Container>
      </div>
    );
  }
}

