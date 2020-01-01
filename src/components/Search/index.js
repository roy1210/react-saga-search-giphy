import React from 'react'
import { connect } from 'react-redux'
import { getSearchResults } from './action'
import { SearchWrapper, InputStyle } from './styled'

const Search = (props) => {
  return (
    <SearchWrapper>
      <InputStyle onChange={e => onInputChange(e, props)} placeholder="Search GIF" />
    </SearchWrapper>
  )
}

const onInputChange = (e, props) => {
  if (e.target.value !== '') {
    props.getSearchResults(e.target.value)
  }
}

const mapDispatchToProps = {
  getSearchResults
}

export default connect(null, mapDispatchToProps)(Search);

