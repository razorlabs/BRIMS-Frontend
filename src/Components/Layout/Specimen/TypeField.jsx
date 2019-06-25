import React from 'react';
import { graphql } from 'react-apollo';
import { Form, Dropdown } from 'semantic-ui-react';
import { GET_SPECIMEN_TYPES } from '../../Data/SpecimenQueryData';

class SpecimenTypePickerUI extends React.Component {
  typetoKeyValue = (props) => {
    const returndict = props.types.map(x => ({ key: x.type, value: x.id, text: x.type }));
    return returndict;
  }
  render() {
    if (this.props.error) {
      return <p> Error! </p>;
    }

    let returnDropdown;

    if (this.props.loading) {
      returnDropdown = (
        <Dropdown
          placeholder="Loading..."
          selection
          search
          options=""
        />);
    } else {
      returnDropdown = (
        <Dropdown
          placeholder="Specimen Type"
          selection
          search
          options={this.typetoKeyValue(this.props)}
        />
      );
    }

    return (
      <Form.Field>
        <label>Specimen Type</label>
        {returnDropdown}
      </Form.Field>
    );
  }
}

const SpecimenTypePicker = graphql(GET_SPECIMEN_TYPES, {
  props: ({ data }) => ({
    error: data.error,
    loading: data.loading,
    types: data.allSpecimenTypes,
  }),
})(SpecimenTypePickerUI);

export default SpecimenTypePicker;
