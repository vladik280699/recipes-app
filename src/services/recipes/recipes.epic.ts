import { isActionOf } from 'typesafe-actions'
import { filter, mergeMap, map, catchError, pluck } from 'rxjs/operators'
import { of } from 'rxjs'
import { combineEpics } from 'redux-observable'
import { ajax } from 'rxjs/ajax'

import * as api from '../api'
import { Recipe } from '../store/types'
import * as actions from './recipes.actions'

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

export const fetchRecipeEpic = (action$) =>
  action$.pipe(
    filter(isActionOf(actions.getRecipeByIdRequest)),
    mergeMap(({ payload, meta }) => {
      return ajax(api.fetchRecipeById(payload)).pipe(
        pluck('response'),
        map((recipe: Recipe) => {
          return actions.getRecipeByIdSuccess(recipe, meta)
        }),
        catchError((error) => {
          console.error(error)
          return of(actions.getRecipByIdeFailure(undefined, meta))
        })
      )
    })
  )

export default combineEpics(fetchRecipesEpic, fetchRecipeEpic)
