import { combineReducers } from 'redux'
import { StateType } from 'typesafe-actions'

import recipes from '../recipes/recipes.reducer'
import categories from '../categories/categories.reducer'
import loading from '../loading/loading.reducer'
import ingredients from '../ingredients/ingredients.reducer'

export const rootReducer = combineReducers({
  recipes,
  categories,
  loading,
  ingredients,
})

export type RootState = StateType<typeof rootReducer>
