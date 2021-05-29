import { isActionOf } from 'typesafe-actions'
import { filter, mergeMap, map, catchError, pluck } from 'rxjs/operators'
import { of } from 'rxjs'
import { combineEpics } from 'redux-observable'
import { ajax } from 'rxjs/ajax'

import * as api from '../api'
import * as actions from './actions'
import { Category, Recipe } from './types'

export const fetchRecipesEpic = (action$) =>
  action$.pipe(
    filter(isActionOf(actions.getRecipesRequest)),
    mergeMap(({ meta }) => {
      return ajax(api.fetchRecipes()).pipe(
        pluck('response'),
        map((recipes: Recipe[]) => {
          return actions.getRecipesSuccess(recipes, meta)
        }),
        catchError((error) => {
          console.error(error)
          return of(actions.getRecipesFailure(undefined, meta))
        })
      )
    })
  )

export const fetchCategoriesEpic = (action$) =>
  action$.pipe(
    filter(isActionOf(actions.getCategoriesRequest)),
    mergeMap(({ meta }) => {
      return ajax(api.fetchCategories()).pipe(
        pluck('response'),
        map((categories: Category[]) => {
          return actions.getCategoriesSuccess(categories, meta)
        }),
        catchError((error) => {
          console.error(error)
          return of(actions.getCategoriesFailure(undefined, meta))
        })
      )
    })
  )

export default combineEpics(fetchRecipesEpic, fetchCategoriesEpic)
