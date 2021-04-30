import React, { useEffect } from 'react'
import { FlatList, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { getCategories } from '../services/store/selectors'
import { getCategoriesRequest } from '../services/store/actions'
import CategoryCard from '../components/CategoryCard/CategoryCard'

const CategoriesScreen: React.FC = () => {
  const categories = useSelector(getCategories)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategoriesRequest())
  }, [getCategoriesRequest])

  return (
    <View>
      <FlatList
        data={categories}
        renderItem={CategoryCard}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  )
}

export default CategoriesScreen
