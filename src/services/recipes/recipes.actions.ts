import { createAction } from 'typesafe-actions'
import uuid from 'react-native-uuid'
import { Recipe, BaseMeta } from '../store/types'

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

export const GET_RECIPE_BY_ID = 'GET_RECIPE_BY_ID'
export const getRecipeByIdRequest = createAction(
  'GET_RECIPE_BY_ID_REQUESTED',
  (payload: string) => payload,
  () => ({ operationUuid: uuid.v4() })
)()
export const getRecipeByIdSuccess = createAction('GET_RECIPE_BY_ID_SUCCEEDED')<
  Recipe,
  BaseMeta
>()
export const getRecipeByIdFailure = createAction('GET_RECIPE_BY_ID_FAILED')<
  undefined,
  BaseMeta
>()
