import { createSelector } from 'reselect'

import { Ingredient } from '../store/types'
import { RootState } from '../store/reducer'
import { getRecipeById } from '../recipes/recipes.selectors'

export const root = (state: RootState) => state.ingredients
const ingredientsById = (state: RootState) => root(state).byId
const ingredientsIds = (state: RootState) => root(state).ids

export const getIngredients = createSelector(
  ingredientsById,
  ingredientsIds,
  (byId, ids) => ids.map((id) => byId[id])
)

export const getIngredientsByRecipeId = createSelector(
  getIngredients,
  getRecipeById,
  (ingredients, recipe) => {
    const ingredientsArray: Ingredient[] = []
    recipe.ingredients.forEach((index) => {
      ingredients.map((data) => {
        if (data.ingredientId === index[0]) {
          ingredientsArray.push({ ...data, dose: index[1] })
        }
      })
    })
    return ingredientsArray
  }
)
