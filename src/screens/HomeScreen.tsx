import React from 'react'
import { FlatList, View } from 'react-native'
import { useSelector } from 'react-redux'

import { Recipe } from '../services/store/types'
import { getRecipes } from '../services/store/selectors'
import RecipeCard from '../components/RecipeCard/RecipeCard'

const HomeScreen: React.FC = () => {
  const recipes = useSelector(getRecipes)

  const renderRecipes = ({ item }: { item: Recipe }) => (
    <RecipeCard item={item} />
  )

  return (
    <View>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={recipes}
        renderItem={renderRecipes}
        keyExtractor={(item) => `${item.recipeId}`}
      />
    </View>
  )
}

export default HomeScreen
