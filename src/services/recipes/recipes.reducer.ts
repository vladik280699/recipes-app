import { createReducer } from 'typesafe-actions'
import union from 'lodash/fp/union'

import { Recipe } from '../store/types'
import { groupById } from '../../utils/collections'
import * as actions from './recipes.actions'

export interface ReducerState {
  byId: Record<string, Recipe>
  ids: string[]
}

const initialState: ReducerState = {
  byId: {},
  ids: [],
}

const recipesReducer = createReducer(initialState)
  .handleAction(actions.getRecipesSuccess, (state, { payload }) => {
    const { byId, ids } = groupById(payload)
    return {
      ...state,
      byId,
      ids,
    }
  })
  .handleAction(actions.getRecipeByIdSuccess, (state, { payload }) => ({
    ...state,
    byId: {
      ...state.byId,
      [payload.id]: payload,
    },
    ids: union([payload.id], state.ids),
  }))

export default recipesReducer
