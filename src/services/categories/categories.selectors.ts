import { createSelector } from 'reselect'
import { RootState } from '../store/reducer'

export const root = (state: RootState) => state.categories
const categoriesById = (state: RootState) => root(state).byId
const categoriesIds = (state: RootState) => root(state).ids

export const getCategories = createSelector(
  categoriesById,
  categoriesIds,
  (byId, ids) => ids.map((id) => byId[id])
)
