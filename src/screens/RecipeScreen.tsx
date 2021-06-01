import React, { useEffect } from 'react'
import { ScrollView, Text, View, Image, TouchableHighlight } from 'react-native'
import styled from 'styled-components/native'
import { useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

import { getRecipeById } from '../services/recipes/recipes.selectors'
import {
  GET_RECIPE_BY_ID,
  getRecipeByIdRequest,
} from '../services/recipes/recipes.actions'
import { RootState } from '../services/store/reducer'
import LoadingWrapper from '../components/LoadingWrapper/LoadingWrapper'
import useLoading from '../hooks/useLoading'

const Container = styled(ScrollView)`
  background-color: white;
  flex: 1;
`
const InfoRecipeContainer = styled(View)`
  flex: 1;
  margin: 25px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`

const InfoContainer = styled(View)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

const InfoRecipeName = styled(Text)`
  font-size: 28px;
  margin: 10px;
  font-weight: bold;
  color: black;
  text-align: center;
`
const InfoPhoto = styled(Image)`
  height: 20px;
  width: 20px;
  margin-right: 0;
`
const InfoRecipe = styled(Text)`
  font-size: 14px;
  font-weight: bold;
  margin-left: 5px;
`
const InfoDescriptionRecipe = styled(Text)`
  text-align: left;
  font-size: 16px;
  margin-top: 30px;
  margin: 15px;
`
const Category = styled(Text)`
  font-size: 14px;
  font-weight: bold;
  margin: 10px;
  color: #2cd18a;
`

const ViewIngredientsButton = styled(View)`
  flex: 1;
  height: 50px;
  width: 270px;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 100px;
  border-color: #2cd18a;
  border-width: 1px;
  justify-content: center;
  align-items: center;
`
const ViewIngredientsButtonText = styled(Text)`
  font-size: 14px;
  color: #2cd18a;
`

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
        <InfoRecipeContainer>
          <InfoRecipeName>{item.title}</InfoRecipeName>
          <InfoContainer>
            <TouchableHighlight>
              <Category>{item.categoryId}</Category>
            </TouchableHighlight>
          </InfoContainer>

          <InfoContainer>
            <InfoPhoto source={require('../../assets/icons/time.png')} />
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
