import { createReducer } from 'typesafe-actions'

import { Ingredient } from '../store/types'
import { groupById } from '../../utils/collections'
import * as actions from './ingredients.actions'

export interface ReducerState {
  byId: Record<string, Ingredient>
  ids: string[]
}

const initialState: ReducerState = {
  byId: {},
  ids: [],
}

const ingredientsReducer = createReducer(initialState).handleAction(
  actions.getIngredientsSuccess,
  (state, { payload }) => {
    const { byId, ids } = groupById(payload, 'ingredientId')
    return {
      ...state,
      byId,
      ids,
    }
  }
)

export default ingredientsReducer
