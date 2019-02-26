import { Segment, Label, Container, Icon, Tab, Table, Button, List } from 'semantic-ui-react';
import React from 'react';
import Header from '../Header';
import SpecimenModal from './SpecimenModal';


export default class SpecimenLandingPage extends React.Component {
  // The Specimen view needs a locked-visual indicator with aliquot to denote the association
  // (tabs for this example)
  render() {
    return (
      <div>
        <Header />

      </div>
    );
  }
}
