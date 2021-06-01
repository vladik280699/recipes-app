import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { rootReducer } from './reducer'

import epic from './epic'

const epicMiddleware = createEpicMiddleware()

const store = createStore(rootReducer, applyMiddleware(epicMiddleware))

epic && epicMiddleware.run(epic)

export default store
