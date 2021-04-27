import React from 'react'
import { Provider } from 'react-redux'

import store from './src/services/store/store'
import HomeScreen from './src/screens/HomeScreen'
import CategoriesScreen from './src/screens/CategoriesScreen'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <CategoriesScreen />
    </Provider>
  )
}

export default App
