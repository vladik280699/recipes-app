import { createAction } from 'typesafe-actions'
import uuid from 'react-native-uuid'
import { Category, BaseMeta } from '../store/types'

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
