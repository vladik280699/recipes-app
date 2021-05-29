import React, { useEffect } from 'react'
import { FlatList, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import useLoading from '../hooks/useLoading'
import { getRecipes } from '../services/store/selectors'
import { getRecipesRequest, GET_RECIPES } from '../services/store/actions'
import RecipeCard from '../components/RecipeCard/RecipeCard'
import LoadingWrapper from '../components/LoadingWrapper/LoadingWrapper'

const HomeScreen: React.FC = () => {
  const recipes = useSelector(getRecipes)
  const dispatch = useDispatch()
  const isLoading = useLoading([GET_RECIPES])

  useEffect(() => {
    dispatch(getRecipesRequest())
  }, [getRecipesRequest])

  return (
    <View>
      <LoadingWrapper isLoading={isLoading}>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={recipes}
          renderItem={RecipeCard}
          keyExtractor={(item) => `${item.recipeId}`}
        />
      </LoadingWrapper>
    </View>
  )
}

export default HomeScreen
