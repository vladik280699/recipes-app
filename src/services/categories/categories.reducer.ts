import { createReducer } from 'typesafe-actions'

import { Category } from '../store/types'
import { groupById } from '../../utils/collections'
import * as actions from './categories.actions'

export interface ReducerState {
  byId: Record<string, Category>
  ids: string[]
}

const initialState: ReducerState = {
  byId: {},
  ids: [],
}

const categoriesReducer = createReducer(initialState).handleAction(
  actions.getCategoriesSuccess,
  (state, { payload }) => {
    const { byId, ids } = groupById(payload)
    return {
      ...state,
      byId,
      ids,
    }
  }
)

export default categoriesReducer
