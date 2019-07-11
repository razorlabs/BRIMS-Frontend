import { Search, Label } from 'semantic-ui-react';
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

const resultRenderer = ({ pid }) => <Label basic content={pid} />

class SearchDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patient: '',
      results: [],
    };
  }

  onChange = (event) => {
    // const value = event.target.value;
    this.setState({ patient: event.target.value });
    this.handleFilter(event.target.value);
    this.setState({ results: this.props.pids });
  }

  handleFilter = debounce((val) => {
    this.props.onSearch(val);
  }, 250)

  handleResultSelect = (event, { result }) => this.setState({ patient: result.pid })

  render() {
    if (this.props.loading) {
      return <p>Loading</p>;
    }
    if (this.props.error) {
      return <p> Error </p>;
    }
    return (
      <div>
        <Search
          placeholder="Search.."
          onResultSelect={this.handleResultSelect}
          value={this.state.patient}
          onSearchChange={this.onChange.bind(this)}
          results={this.props.pids}
          resultRenderer={resultRenderer}
          {...this.props}
        />
        { this.state.patient }
      </div>
    );
  }
}

const ExampleSearch = graphql(SEARCH_SPECIMEN, {
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
    pids: props.data.searchSpecimen,
  }),
})(SearchDisplay);

export default ExampleSearch;
