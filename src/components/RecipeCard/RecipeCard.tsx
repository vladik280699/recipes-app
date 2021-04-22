import React from 'react'
import { TouchableHighlight } from 'react-native'

import { Recipe } from '../../../data/recipes'
import { Container, Photo, Title, Category } from './RecipeCard.styles'

interface Props {
  item: Recipe
}

const RecipeCard: React.FC<Props> = ({ item }) => {
  return (
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)">
      <Container>
        <Photo source={{ uri: item.photo_url }} />
        <Title>{item.title}</Title>
        <Category>{item.categoryId}</Category>
      </Container>
    </TouchableHighlight>
  )
}

export default RecipeCard
