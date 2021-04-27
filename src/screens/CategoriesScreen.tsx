import React, { useEffect } from 'react'
import { FlatList, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { Category } from '../services/store/types'
import { getCategories } from '../services/store/selectors'
import { setCategories } from '../services/store/actions'
import CategoryCard from '../components/CategoryCard/CategoryCard'
import { fetchCategories } from '../services/api'

const CategoriesScreen: React.FC = () => {
  const categories = useSelector(getCategories)
  const dispatch = useDispatch()

  useEffect(() => {
    fetchCategories().then((recipes: Category[]) => {
      dispatch(setCategories(recipes))
    })
  }, [fetchCategories])

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
