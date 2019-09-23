import React, { Component } from 'react'
import axios from 'axios'
import { EDAMAM_URL, EDAMAM_ID, EDAMAM_KEY } from './settings.json'
import { Wrapper } from './style'
import RecipeSearch from './recipeSearch'
import RecipeResults from './recipeResults'

import './reset.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      recipes: [],
    }
  }

  handleNewQuery = e => {
    this.setState({ query: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { query } = this.state
    if (query) {
      return axios
        .get(`${EDAMAM_URL}${query}&app_id=${EDAMAM_ID}&app_key=${EDAMAM_KEY}`)
        .then(({ data }) => {
          const recipes = data.hits.map(({ recipe }) => ({
            id: recipe.uri,
            name: recipe.label,
            imageUrl: recipe.image,
            recipeUrl: recipe.url,
            ingredients: recipe.ingredientLines.length,
            timeInMin: recipe.totalTime,
          }))

          this.setState({ recipes })
        })
    }
  }

  render() {
    return (
      <Wrapper>
        <RecipeSearch
          query={this.state.query}
          handleSubmit={this.handleSubmit}
          handleNewQuery={this.handleNewQuery}
        />
        <RecipeResults recipes={this.state.recipes} />
      </Wrapper>
    )
  }
}

export default App
