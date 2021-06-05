import React from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import store from './src/services/store/store'
import HomeScreen from './src/screens/HomeScreen/HomeScreen'
import CategoriesScreen from './src/screens/CategoriesScreen/CategoriesScreen'
import RecipeScreen from './src/screens/RecipeScreen/RecipeScreen'

const Stack = createStackNavigator()

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Recipes">
          <Stack.Screen name="Recipes" component={HomeScreen} />
          <Stack.Screen
            name="Recipe"
            component={RecipeScreen}
            options={{ headerTransparent: true }}
          />
          <Stack.Screen name="Categories" component={CategoriesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
