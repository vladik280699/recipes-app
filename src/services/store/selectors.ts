import { compose } from 'redux'
import { RootState } from './store'

export const root = (state: RootState) => state.rootReducer

export const getRecipes = compose(({ recipes }) => recipes, root)
export const getCategories = compose(({ categories }) => categories, root)
