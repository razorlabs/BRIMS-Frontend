import React from 'react';
import ReactDOM from 'react-dom';
import { Menu, Container, Card, Icon } from 'semantic-ui-react';

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
        <Menu size="large" color="blue" inverted >
          <Menu.Item name="LIMS" active={activeItem === 'LIMS'} onClick={this.handleItemClick} />
          <Menu.Menu position="right">
            <Menu.Item name="cog" active={activeItem === 'cog'} onClick={this.handleItemClick}>
              <Icon name="cogs" />
            </Menu.Item>
            <Menu.Item name="name" active={activeItem === 'name'} onClick={this.handleItemClick} />
            <Menu.Item name="logout" active={activeItem === 'logout'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>

        <Container>
          <Card.Group raised centered itemsPerRow={3} items={items} />
        </Container>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
