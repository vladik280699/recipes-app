import React from 'react'
import { TouchableHighlight } from 'react-native'

import { Recipe } from '../../services/store/types'
import { Container, Photo, Title, Category } from './RecipeCard.styles'

interface Props {
  item: Recipe
  onNavigate: (id: string) => void
}

const RecipeCard: React.FC<Props> = ({ item, onNavigate }) => {
  const { id, photo_url, title, categoryId } = item
  return (
    <TouchableHighlight
      underlayColor="transparent"
      onPress={() => onNavigate(id)}
    >
      <Container>
        <Photo source={{ uri: photo_url }} />
        <Title>{title}</Title>
        <Category>{categoryId}</Category>
      </Container>
    </TouchableHighlight>
  )
}

export default RecipeCard
