import { createAction } from 'typesafe-actions'
import { Recipe, Category } from './types'

export const setRecipes = createAction(
  'SET_RECIPES',
  (recipes: Recipe[]) => recipes
)()

export const setCategories = createAction(
  'SET_CATEGORIES',
  (categories: Category[]) => categories
)()
