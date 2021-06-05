import React, { useEffect } from 'react'
import { FlatList, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import useLoading from '../../hooks/useLoading'
import { getRecipes } from '../../services/recipes/recipes.selectors'
import {
  getRecipesRequest,
  GET_RECIPES,
} from '../../services/recipes/recipes.actions'
import RecipeCard from '../../components/RecipeCard/RecipeCard'
import LoadingWrapper from '../../components/LoadingWrapper/LoadingWrapper'

const HomeScreen: React.FC = () => {
  const recipes = useSelector(getRecipes)
  const dispatch = useDispatch()
  const isLoading = useLoading([GET_RECIPES])
  const navigation = useNavigation()

  useEffect(() => {
    dispatch(getRecipesRequest())
  }, [getRecipesRequest])

  const handleNavigateToRecipe = (id: string) =>
    navigation.navigate('Recipe', { id })

  return (
    <View>
      <LoadingWrapper isLoading={isLoading}>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={recipes}
          renderItem={(props) => (
            <RecipeCard {...props} onNavigate={handleNavigateToRecipe} />
          )}
          keyExtractor={(item) => `${item.id}`}
        />
      </LoadingWrapper>
    </View>
  )
}

export default HomeScreen
