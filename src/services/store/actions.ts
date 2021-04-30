import { createAction } from 'typesafe-actions'
import { Recipe, Category } from './types'

export const getRecipesRequest = createAction('GET_RECIPES_REQUEST')()
export const getRecipesSuccess = createAction('GET_RECIPES_SUCCEED')<Recipe[]>()
export const getRecipesFailure = createAction('GET_RECIPES_FAILED')<undefined>()

export const getCategoriesRequest = createAction('GET_CATEGORIES_REQUEST')()
export const getCategoriesSuccess = createAction('GET_CATEGORIES_SUCCEED')<
  Category[]
>()
export const getCategoriesFailure = createAction(
  'GET_CATEGORIES_FAILED'
)<undefined>()
