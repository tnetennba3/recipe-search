import React from 'react'
import PropTypes from 'prop-types'
import {
  RecipeList,
  RecipeCard,
  RecipeImage,
  RecipeName,
  RecipeInfo,
} from './style'

const RecipeResults = ({ recipes }) => (
  <RecipeList>
    {recipes.map(
      ({ recipeUrl, id, imageUrl, name, ingredients, timeInMin }) => (
        <a target="_blank" rel="noreferrer noopener" href={recipeUrl} key={id}>
          <RecipeCard>
            <RecipeImage src={imageUrl} alt="" />
            <RecipeName>{name}</RecipeName>
            <RecipeInfo>Ingredients: {ingredients}</RecipeInfo>
            <RecipeInfo>
              Time: {timeInMin ? timeInMin + ' min' : 'N/A'}
            </RecipeInfo>
          </RecipeCard>
        </a>
      )
    )}
  </RecipeList>
)

RecipeResults.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      recipeUrl: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      timeInMin: PropTypes.number,
    })
  ).isRequired,
}

export default RecipeResults
