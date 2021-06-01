import React from 'react'
import { TouchableHighlight } from 'react-native'

import { Category } from '../../services/store/types'
import { Container, Photo, Name, Info } from './CategoryCard.styles'

interface Props {
  item: Category
}

const CategoryCard: React.FC<Props> = ({ item }) => {
  return (
    <TouchableHighlight underlayColor="transparent">
      <Container>
        <Photo source={{ uri: item.photo_url }} />
        <Name>{item.name}</Name>
        <Info>{item.id}</Info>
      </Container>
    </TouchableHighlight>
  )
}

export default CategoryCard
