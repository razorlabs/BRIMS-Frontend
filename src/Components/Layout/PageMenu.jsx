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
          <Menu.Item /* Place holder for active user name */
            name="name"
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
