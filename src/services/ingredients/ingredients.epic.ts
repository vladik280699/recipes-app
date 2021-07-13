import { isActionOf } from 'typesafe-actions'
import { filter, mergeMap, map, catchError, pluck } from 'rxjs/operators'
import { of } from 'rxjs'
import { combineEpics } from 'redux-observable'
import { ajax } from 'rxjs/ajax'

import * as api from '../api'
import { Ingredient } from '../store/types'
import * as actions from './ingredients.actions'

export const fetchIngredientsEpic = (action$) =>
  action$.pipe(
    filter(isActionOf(actions.getIngredientsRequest)),
    mergeMap(({ meta }) => {
      return ajax(api.fetchIngredients()).pipe(
        pluck('response'),
        map((categories: Ingredient[]) => {
          return actions.getIngredientsSuccess(categories, meta)
        }),
        catchError((error) => {
          console.error(error)
          return of(actions.getIngredientsFailure(undefined, meta))
        })
      )
    })
  )

export default combineEpics(fetchIngredientsEpic)
