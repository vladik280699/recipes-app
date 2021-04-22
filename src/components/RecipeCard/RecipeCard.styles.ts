import styled from 'styled-components/native'
import { Text, View, Image, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height

const recipeNumColums = 2
// item size
const RECIPE_ITEM_HEIGHT = 150
const RECIPE_ITEM_MARGIN = 20

export const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  margin-top: 20px;
  width: ${(SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) /
  recipeNumColums}px;
  height: ${RECIPE_ITEM_HEIGHT + 75}px;
  border-color: #cccccc;
  border-width: 0.5px;
  border-radius: 15px;
`

export const Photo = styled(Image)`
  width: ${(SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) /
  recipeNumColums}px;
  height: ${RECIPE_ITEM_HEIGHT}px;
  border-radius: 15px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
`

export const Title = styled(Text)`
  flex: 1;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  color: #444444;
  margin-top: 3px;
  margin-right: 5px;
  margin-left: 5px;
`

export const Category = styled(Text)`
  margin-top: 5px;
  margin-bottom: 5px;
`
