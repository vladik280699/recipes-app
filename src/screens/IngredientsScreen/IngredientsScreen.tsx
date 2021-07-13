import React, { useEffect } from 'react'
import { FlatList, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useRoute } from '@react-navigation/native'

import useLoading from '../../hooks/useLoading'
import {
  GET_INGREDIENTS,
  getIngredientsRequest,
} from '../../services/ingredients/ingredients.actions'
import { getIngredientsByRecipeId } from '../../services/ingredients/ingredients.selectors'
import {
  GET_RECIPE_BY_ID,
  getRecipeByIdRequest,
} from '../../services/recipes/recipes.actions'
import { RootState } from '../../services/store/reducer'
import LoadingWrapper from '../../components/LoadingWrapper/LoadingWrapper'
import { Ingredient } from '../../services/store/types'
import { Container, Title, Photo } from './IngredientsScreen.styles'

const IngredientsScreen: React.FC = () => {
  const {
    params: { recipeId },
  } = useRoute()
  const dispatch = useDispatch()
  const ingredients = useSelector((state: RootState) =>
    getIngredientsByRecipeId(state, recipeId)
  )
  const isLoading = useLoading([GET_INGREDIENTS, GET_RECIPE_BY_ID])

  useEffect(() => {
    dispatch(getIngredientsRequest())
    dispatch(getRecipeByIdRequest(recipeId))
  }, [dispatch, recipeId])

  const renderIngredient = ({ item }: { item: Ingredient }) => (
    <Container>
      <Photo source={{ uri: item.photo_url }} />
      <Title>{item.name}</Title>
      {item?.dose ? <Text style={{ color: 'grey' }}>{item.dose}</Text> : null}
    </Container>
  )

  return (
    <LoadingWrapper isLoading={isLoading}>
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={3}
          data={ingredients}
          renderItem={renderIngredient}
          keyExtractor={(item) => `${item.ingredientId}`}
        />
      </View>
    </LoadingWrapper>
  )
}

export default IngredientsScreen
