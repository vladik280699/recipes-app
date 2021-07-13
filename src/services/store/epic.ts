import { combineEpics } from 'redux-observable'
import categoriesEpic from '../categories/categories.epic'
import recipesEpic from '../recipes/recipes.epic'
import ingredientsEpic from '../ingredients/ingredients.epic'

export default combineEpics(categoriesEpic, recipesEpic, ingredientsEpic)
