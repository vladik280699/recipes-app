import React, {useEffect} from 'react'
import { FlatList, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { Recipe } from '../services/store/types'
import { getRecipes } from '../services/store/selectors'
import { setRecipes } from '../services/store/actions'
import RecipeCard from '../components/RecipeCard/RecipeCard'
import {fetchRecipes} from '../services/api'

const HomeScreen: React.FC = () => {
  const recipes = useSelector(getRecipes)
  const dispatch = useDispatch()

  const renderRecipes = ({ item }: { item: Recipe }) => (
    <RecipeCard item={item} />
  )

  useEffect(()=>{
    fetchRecipes().then((recipes: Recipe[]) => {
      dispatch(setRecipes(recipes))
    })
  },[fetchRecipes])

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
