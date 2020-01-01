import React from 'react'
import { connect } from 'react-redux'
import Result from './Result';

const Results = (props) => {

  if (props.searchResult) {
    return (
      <>
        <div styled={{ marginTop: '20px' }}>{renderSearchResults(props.searchResult)}</div>
      </>
    )
  } else {
    return null;
  }
}

const renderSearchResults = (searchResults) => {
  return searchResults.map((result, i) => {
    return (
      <Result result={result} i={i} key={i} />
    )
  })
}

const mapStateToProps = state => {
  return {
    searchResult: state.search.get('searchResult')
  }
}

export default connect(mapStateToProps)(Results)
