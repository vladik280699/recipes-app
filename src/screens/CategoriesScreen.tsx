import React, { useEffect } from 'react'
import { FlatList, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import useLoading from '../hooks/useLoading'
import { getCategories } from '../services/store/selectors'
import { getCategoriesRequest, GET_CATEGORIES } from '../services/store/actions'
import CategoryCard from '../components/CategoryCard/CategoryCard'
import LoadingWrapper from '../components/LoadingWrapper/LoadingWrapper'

const CategoriesScreen: React.FC = () => {
  const categories = useSelector(getCategories)
  const dispatch = useDispatch()
  const isLoading = useLoading([GET_CATEGORIES])

  useEffect(() => {
    dispatch(getCategoriesRequest())
  }, [getCategoriesRequest])

  return (
    <View>
      <LoadingWrapper isLoading={isLoading}>
        <FlatList
          data={categories}
          renderItem={CategoryCard}
          keyExtractor={(item) => `${item.id}`}
        />
      </LoadingWrapper>
    </View>
  )
}

export default CategoriesScreen