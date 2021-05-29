import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { StateType } from 'typesafe-actions'

import loadingReducer from '../loading/loading.reducer'
import rootReducer from './reducer'
import epic from './epic'

const epicMiddleware = createEpicMiddleware()

const reducer = combineReducers({
  rootReducer,
  loadingReducer,
})

export type RootState = StateType<typeof rootReducer>

const store = createStore(reducer, applyMiddleware(epicMiddleware))

epic && epicMiddleware.run(epic)

export default store
