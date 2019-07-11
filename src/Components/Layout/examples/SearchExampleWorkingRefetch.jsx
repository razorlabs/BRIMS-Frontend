import { Table, Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'react-apollo';
import { SEARCH_SPECIMEN } from '../Data/SpecimenQueryData';

/*
	helpful reference: https://medium.com/open-graphql/implementing-search-in-graphql-11d5f71f179
    also : https://github.com/apollographql/react-apollo/issues/1564
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
      patient: '33',
    };
  }

  onChange = (e) => {
    const value = e.target.value;
    this.handleFilter(value);
  }

  handleFilter = debounce((val) => {
    this.props.onSearch(val);
    console.log(this.props);
  }, 250)

  render() {
    if (this.props.loading) {
      return <p>Loading</p>;
    }
    if (this.props.error) {
      return <p> Error </p>;
    }
    console.log(this.props.pids);
    return (
      <div>
        <Input
          placeholder="Search.."
          value={this.patient}
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
      patient: toString(props.patient),
    },
  }),
  props: props => ({
    onSearch: patient => {
      props.data.fetchMore({
        variables: {
          patient,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => ({
          ...previousResult,
          pids: {
            ...previousResult.searchSpecimen,
            pids: fetchMoreResult.searchSpecimen,
          },
        }),
      });
    },
    error: props.data.error,
    loading: props.data.loading,
    pids: props.data.searchSpecimen,
  }),
})(SearchDisplay);

export default Search;
