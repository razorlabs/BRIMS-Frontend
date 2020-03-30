import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class PageMenu extends React.Component {
  constructor(props) {
    /* Place holder */
    super(props);
    this.state = {
      activeItem: 'LIMS',
    };
  }

  // Place holder
  handleActive(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    return (
      <Menu size="large" color="blue" inverted >
        <Menu.Item
          name="LIMS"
          as={Link}
          to="/lims"
        />
        <Menu.Menu position="right">
          <Menu.Item /* The setup icon */
            name="cog"
            active={this.state.activeItem === 'cog'}
            onClick={this.handleActive}
          >
            <Icon name="cogs" />
          </Menu.Item>
          <Menu.Item /* Place holder for active user name */
            name="name"
            active={this.state.activeItem === 'name'}
            onClick={this.handleActive}
          />
          <Menu.Item
            name="logout"
            as={Link}
            to="/lims/logout"
          />
        </Menu.Menu>
      </Menu>
    );
  }
}

export default PageMenu;
