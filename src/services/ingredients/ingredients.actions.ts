import { createAction } from 'typesafe-actions'
import uuid from 'react-native-uuid'
import { Ingredient, BaseMeta } from '../store/types'

export const GET_INGREDIENTS = 'GET_INGREDIENTS'
export const getIngredientsRequest = createAction(
  'GET_INGREDIENTS_REQUESTED',
  undefined,
  () => ({ operationUuid: uuid.v4() })
)()
export const getIngredientsSuccess = createAction('GET_INGREDIENTS_SUCCEEDED')<
  Ingredient[],
  BaseMeta
>()
export const getIngredientsFailure = createAction('GET_INGREDIENTS_FAILED')<
  undefined,
  BaseMeta
>()
