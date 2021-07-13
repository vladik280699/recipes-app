import { Text, View, Image, Dimensions } from 'react-native'
import styled from 'styled-components/native'

const { width, height } = Dimensions.get('window')
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height

const numColumns = 3
// item size
const RECIPE_ITEM_OFFSET = 10
const RECIPE_ITEM_MARGIN = RECIPE_ITEM_OFFSET * 2

export const Container = styled(View)`
  display: flex;
  alignitems: center;
  margin: 10px;
  margin-top: 30px;
  width: ${(SCREEN_WIDTH - RECIPE_ITEM_MARGIN) / numColumns -
  RECIPE_ITEM_OFFSET}px;
  height: 160px;
`
export const Title = styled(Text)`
  margin: 10px;
  margin-bottom: 5px;
  color: black;
  font-size: 13px;
  text-align: center;
`
export const Photo = styled(Image)`
  width: ${(SCREEN_WIDTH - RECIPE_ITEM_MARGIN) / numColumns -
  RECIPE_ITEM_OFFSET}px;
  height: 100px;
  border-radius: 60px;
`
