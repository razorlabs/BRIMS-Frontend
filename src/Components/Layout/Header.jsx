import React from 'react';
import { Menu, Container, Card, Icon } from 'semantic-ui-react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'LIMS',
    };
  }

  // Needs fixing
  handleActive(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    return (
      <Menu size="large" color="blue" inverted >
        <Menu.Item
          name="LIMS"
          active={this.state.activeItem === 'LIMS'}
          onClick={this.handleActive}
        />
        <Menu.Menu position="right">
          <Menu.Item /* The setup icon */
            name="cog"
            active={this.state.activeItem === 'cog'}
            onClick={this.handleActive}
          >
            <Icon name="cogs" />
          </Menu.Item>
          <Menu.Item
            name="name"
            active={this.state.activeItem === 'name'}
            onClick={this.handleActive}
          />
          <Menu.Item
            name="logout"
            active={this.state.activeItem === 'logout'}
            onClick={this.handleActive}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}

