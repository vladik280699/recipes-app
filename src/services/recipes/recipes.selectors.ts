import { createSelector } from 'reselect'
import { RootState } from '../store/reducer'

export const root = (state: RootState) => state.recipes
const recipesById = (state: RootState) => root(state).byId
const recipesIds = (state: RootState) => root(state).ids

export const getRecipes = createSelector(recipesById, recipesIds, (byId, ids) =>
  ids.map((id) => byId[id])
)

export const getRecipeById = createSelector(
  recipesById,
  (_: RootState, id: string) => id,
  (byId, id) => byId[id]
)
