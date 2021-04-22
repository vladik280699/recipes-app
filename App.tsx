import React from 'react'
import { Provider } from 'react-redux'

import store from './src/services/store/store'
import HomeScreen from './src/screens/HomeScreen'

const App: React.FC = () => {
  return (
    <Provider store={store}>
          <HomeScreen/>
    </Provider>
  )
}

export default App
