import { createReducer } from 'typesafe-actions'

import { Recipe, Category } from './types'
import * as actions from './actions'

export interface ReducerState {
  recipes: Recipe[]
  categories: Category[]
}

const initialState: ReducerState = {
  recipes: [],
  categories: [],
}

const reducer = createReducer(initialState)
  .handleAction(actions.setRecipes, (state, { payload }) => ({
    ...state,
    recipes: payload,
  }))
  .handleAction(actions.setCategories, (state, { payload }) => ({
    ...state,
    categories: payload,
  }))

export default reducer
