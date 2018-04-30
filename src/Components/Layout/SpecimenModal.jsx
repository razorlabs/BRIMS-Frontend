import { Segment, Dropdown, Modal, Button } from 'semantic-ui-react';
import React from 'react';

const specimenTypes = [
  { key: 'ACD', text: 'ACD', value: 'ACD' },
  { key: 'CVF', text: 'Aspirator for CVF', value: 'CVF' },
  { key: 'Blood for Plasma', text: 'Blood for Plasma', value: 'BLDPSM' },
  { key: 'DBS', text: 'Dried Blood Spot', value: 'DBS' },
];

const SpecimenModal = () => (
  <Modal trigger={<Button attached floated="right" color="blue">Add Specimen</Button>}>
    <Modal.Header>Add Specimen</Modal.Header>
    <Modal.Content>
      <Dropdown placeholder="Specimen" multiple selection options={specimenTypes} />
    </Modal.Content>
  </Modal>
);

export default SpecimenModal;
