import { graphql } from 'react-apollo';
import { ADD_PATIENT } from '../Data/SpecimenDataMutations';
import SpecimenEntry from '../Layout/Specimen/SpecimenEntry';

const SpecimenAdd = graphql(ADD_PATIENT)(SpecimenEntry);

export default SpecimenAdd;
