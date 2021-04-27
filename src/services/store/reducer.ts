import { createReducer } from 'typesafe-actions'

import { Recipe } from './types'
import * as actions from './actions'

export interface ReducerState {
  recipes: Recipe[]
}

const initialState: ReducerState = {
  recipes: [],
}

const reducer = createReducer(initialState)
  .handleAction(actions.setRecipes, (state, { payload }) => ({
    ...state,
    recipes: payload,
  }))

export default reducer
