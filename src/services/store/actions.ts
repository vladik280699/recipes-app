import { createAction } from 'typesafe-actions'
import { Recipe } from './types'

export const setRecipes = createAction('SET_RECIPES',
  (recipes: Recipe[]) => recipes,
  () => ({
    operationUuid: 1,
  }))()