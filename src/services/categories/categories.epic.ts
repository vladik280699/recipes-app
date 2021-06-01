import { isActionOf } from 'typesafe-actions'
import { filter, mergeMap, map, catchError, pluck } from 'rxjs/operators'
import { of } from 'rxjs'
import { combineEpics } from 'redux-observable'
import { ajax } from 'rxjs/ajax'

import * as api from '../api'
import { Category } from '../store/types'
import * as actions from './categories.actions'

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

export default combineEpics(fetchCategoriesEpic)
