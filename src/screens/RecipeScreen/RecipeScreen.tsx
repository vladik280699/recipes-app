import React, { useEffect } from 'react'
import { TouchableHighlight } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

import { getRecipeById } from '../../services/recipes/recipes.selectors'
import {
  GET_RECIPE_BY_ID,
  getRecipeByIdRequest,
} from '../../services/recipes/recipes.actions'
import { RootState } from '../../services/store/reducer'
import LoadingWrapper from '../../components/LoadingWrapper/LoadingWrapper'
import useLoading from '../../hooks/useLoading'
import PhotosCarousel from '../../components/PhotosCarousel/PhotosCarousel'
import {
  Container,
  InfoRecipeContainer,
  InfoContainer,
  InfoRecipeName,
  InfoPhoto,
  InfoRecipe,
  InfoDescriptionRecipe,
  Category,
  ViewIngredientsButton,
  ViewIngredientsButtonText,
} from './RecipeScreen.styles'

const RecipeScreen: React.FC = () => {
  const {
    params: { id },
  } = useRoute()
  const dispatch = useDispatch()
  const item = useSelector((state: RootState) => getRecipeById(state, id))
  const isLoading = useLoading([GET_RECIPE_BY_ID])

  useEffect(() => {
    dispatch(getRecipeByIdRequest(id))
  }, [getRecipeByIdRequest, id])

  return (
    <LoadingWrapper isLoading={isLoading}>
      <Container>
        <PhotosCarousel photosArray={item.photosArray} />
        <InfoRecipeContainer>
          <InfoRecipeName>{item.title}</InfoRecipeName>
          <InfoContainer>
            <TouchableHighlight>
              <Category>{item.categoryId}</Category>
            </TouchableHighlight>
          </InfoContainer>

          <InfoContainer>
            <InfoPhoto source={require('../../../assets/icons/time.png')} />
            <InfoRecipe>{item.time} minutes </InfoRecipe>
          </InfoContainer>

          <InfoContainer>
            <TouchableHighlight underlayColor="transparent">
              <ViewIngredientsButton>
                <ViewIngredientsButtonText>
                  View Ingredients
                </ViewIngredientsButtonText>
              </ViewIngredientsButton>
            </TouchableHighlight>
          </InfoContainer>
          <InfoContainer>
            <InfoDescriptionRecipe>{item.description}</InfoDescriptionRecipe>
          </InfoContainer>
        </InfoRecipeContainer>
      </Container>
    </LoadingWrapper>
  )
}

export default RecipeScreen
