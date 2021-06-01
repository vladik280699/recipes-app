import { combineEpics } from 'redux-observable'
import categoriesEpic from '../categories/categories.epic'
import recipesEpic from '../recipes/recipes.epic'

export default combineEpics(categoriesEpic, recipesEpic)
