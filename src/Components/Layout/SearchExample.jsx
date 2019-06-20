import { Table, Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'react-apollo';
import { SEARCH_SPECIMEN } from '../Data/SpecimenQueryData';

/*
  helpful resources: https://medium.com/open-graphql/implementing-search-in-graphql-11d5f71f179
*/

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

class SearchDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patient: '',
    };
  }

  onChange = (event) => {
    // const value = event.target.value;
    this.setState({ patient: event.target.value });
    this.handleFilter(event.target.value);
  }

  handleFilter = debounce((val) => {
    this.props.onSearch(val);
  }, 250)

  render() {
    if (this.props.loading) {
      return <p>Loading</p>;
    }
    if (this.props.error) {
      return <p> Error </p>;
    }
    return (
      <div>
        <Input
          placeholder="Search.."
          value={this.state.patient}
          onChange={this.onChange.bind(this)}
        />
        { this.state.patient }
        { this.props.pids.map(x => <div>{ x.pid }</div>) }
      </div>
    );
  }
}

const Search = graphql(SEARCH_SPECIMEN, {
  options: props => ({
    variables: {
      patient: '',
    },
  }),
  props: props => ({
    onSearch: patient => {
      props.data.fetchMore({
        variables: {
          patient,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => ({
          searchSpecimen: fetchMoreResult.searchSpecimen,
        }),
      });
    },
    error: props.data.error,
    loading: props.data.loading,
    pids: props.data.searchSpecimen
  }),
})(SearchDisplay);

export default Search;
