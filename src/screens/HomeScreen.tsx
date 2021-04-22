import React from 'react'
import { FlatList, View } from 'react-native'

import { recipes, Recipe } from '../../data/recipes'
import RecipeCard from '../components/RecipeCard/RecipeCard'

const a = 1

const HomeScreen: React.FC = () => {
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
