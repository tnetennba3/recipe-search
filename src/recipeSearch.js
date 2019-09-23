import React from 'react'
import PropTypes from 'prop-types'
import { SearchInput, SearchButton } from './style'

const RecipeSearch = ({ query, handleSubmit, handleNewQuery }) => (
  <form onSubmit={handleSubmit}>
    <SearchInput
      value={query}
      placeholder="Search by recipe or ingredient"
      onChange={handleNewQuery}
    />
    <SearchButton type="submit" />
  </form>
)

RecipeSearch.propTypes = {
  query: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleNewQuery: PropTypes.func.isRequired,
}

export default RecipeSearch
