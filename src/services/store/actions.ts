import { createAction } from 'typesafe-actions'
import uuid from 'react-native-uuid'
import { Recipe, Category, BaseMeta } from './types'

export const GET_RECIPES = 'GET_RECIPES'
export const getRecipesRequest = createAction(
  'GET_RECIPES_REQUESTED',
  undefined,
  () => ({ operationUuid: uuid.v4() })
)()
export const getRecipesSuccess = createAction('GET_RECIPES_SUCCEEDED')<
  Recipe[],
  BaseMeta
>()
export const getRecipesFailure = createAction('GET_RECIPES_FAILED')<
  undefined,
  BaseMeta
>()

export const GET_CATEGORIES = 'GET_CATEGORIES'
export const getCategoriesRequest = createAction(
  'GET_CATEGORIES_REQUESTED',
  undefined,
  () => ({ operationUuid: uuid.v4() })
)()
export const getCategoriesSuccess = createAction('GET_CATEGORIES_SUCCEEDED')<
  Category[],
  BaseMeta
>()
export const getCategoriesFailure = createAction('GET_CATEGORIES_FAILED')<
  undefined,
  BaseMeta
>()
