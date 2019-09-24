import React from 'react'
import PropTypes from 'prop-types'
import githubLogoBlack from './img/github_logo_black.png'
import githubOctocat from './img/github_octocat.png'
import { SearchInput, SearchButton, Image, FlexWrapper } from './style'

const RecipeSearch = ({ query, handleSubmit, handleNewQuery }) => (
  <div>
    <FlexWrapper>
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://github.com/tnetennba3/recipe-search"
      >
        <Image src={githubLogoBlack} width="75px" />
        <Image src={githubOctocat} width="30px" />
      </a>
    </FlexWrapper>
    <form onSubmit={handleSubmit}>
      <SearchInput
        value={query}
        placeholder="Search by recipe or ingredient"
        onChange={handleNewQuery}
      />
      <SearchButton type="submit" />
    </form>
  </div>
)

RecipeSearch.propTypes = {
  query: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleNewQuery: PropTypes.func.isRequired,
}

export default RecipeSearch
