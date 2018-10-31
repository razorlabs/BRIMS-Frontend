import { Segment, Label, Container, Tab, Table, Loader, Dimmer } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import React from 'react';
import SpecimenTableHeader from './SpecimenTableHeader';
import SpecimenInfoRow from './SpecimenInfoRow';
import AliquotInfoPaneWithData from '../../Route/AliquotInfoPaneWithData';


/* A helper function to build the semantic-ui Tab panes
   see https://react.semantic-ui.com/modules/tab#types-basic

   In the future there will need to be an adjustment to display
   panes differently when the number of specimen exceeds a certain
   amount making the display lengthy and cumbersome to navigate
*/

function BuildPanes(type, id, specimen) {
  const item = type.concat(' ID:', id);
  const pane = {
    menuItem: item,
    render: () => (
      <Tab.Pane>
        <Segment>
          <Table celled>
            <SpecimenTableHeader />
            <SpecimenInfoRow specimen={specimen} key={specimen.id} />
          </Table>
        </Segment>
        <Segment>
          <AliquotInfoPaneWithData specimenid={specimen.id} />
        </Segment>
      </Tab.Pane>
    ),
  };
  return pane;
}

class SpecimenInfoPane extends React.Component {
  render() {
    if (this.props.data.loading) {
      return <Dimmer active> <Loader /> </Dimmer>;
    }
    if (this.props.data.error) {
      return <p> Error! </p>;
    }
    const buildpanes = this.props.data.allSpecimen.map((specimen) => {
      return BuildPanes(specimen.type, specimen.id, specimen);
    });
    const panes = [];
    for (let i = 0; i < buildpanes.length; i += 1) {
      panes.push(buildpanes[i]);
    }
    return (
      <Container>
        <Segment.Group>
          <Segment padded>
            <Label size="large" attached="top left">Specimen</Label>
            <Table celled>
              <Tab panes={panes} />
            </Table>
          </Segment>
        </Segment.Group>
      </Container>
    );
  }
}

SpecimenInfoPane.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.object,
  }).isRequired,
};

export default SpecimenInfoPane;
