import { createReducer } from 'typesafe-actions'

import { recipes } from '../../../data/recipes'
import { Recipe } from './types'

export interface ReducerState {
  recipes: Recipe[]
}

const initialState: ReducerState = {
  recipes,
}

const reducer = createReducer(initialState)

export default reducer
