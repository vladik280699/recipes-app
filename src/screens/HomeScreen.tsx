import React, { useEffect } from 'react'
import { FlatList, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { getRecipes } from '../services/store/selectors'
import { getRecipesRequest } from '../services/store/actions'
import RecipeCard from '../components/RecipeCard/RecipeCard'

const HomeScreen: React.FC = () => {
  const recipes = useSelector(getRecipes)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRecipesRequest())
  }, [getRecipesRequest])

  return (
    <View>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={recipes}
        renderItem={RecipeCard}
        keyExtractor={(item) => `${item.recipeId}`}
      />
    </View>
  )
}

export default HomeScreen
