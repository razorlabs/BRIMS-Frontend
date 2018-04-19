import React from 'react';
import ReactDOM from 'react-dom';
import { Menu, Container, Card, Icon } from 'semantic-ui-react';
import Header from './Components/Layout/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home',
    };
  }

  handleItemClick() {
    // TODO

    this.setState();
  }


  render() {
    const { activeItem } = this.state;
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


ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
