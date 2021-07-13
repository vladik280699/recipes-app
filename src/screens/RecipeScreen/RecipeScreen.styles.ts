import { ScrollView, Text, View, Image } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(ScrollView)`
  background-color: white;
  display: flex;
`
export const InfoRecipeContainer = styled(View)`
  display: flex;
  margin: 25px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`

export const InfoContainer = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

export const InfoRecipeName = styled(Text)`
  font-size: 28px;
  margin: 10px;
  font-weight: bold;
  color: black;
  text-align: center;
`
export const InfoPhoto = styled(Image)`
  height: 20px;
  width: 20px;
  margin-right: 0;
`
export const InfoRecipe = styled(Text)`
  font-size: 14px;
  font-weight: bold;
  margin-left: 5px;
`
export const InfoDescriptionRecipe = styled(Text)`
  text-align: left;
  font-size: 16px;
  margin-top: 30px;
  margin: 15px;
`
export const Category = styled(Text)`
  font-size: 14px;
  font-weight: bold;
  margin: 10px;
  color: #2cd18a;
`

export const ViewIngredientsButton = styled(View)`
  display: flex;
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
export const ViewIngredientsButtonText = styled(Text)`
  font-size: 14px;
  color: #2cd18a;
`
