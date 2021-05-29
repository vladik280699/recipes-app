import { useSelector } from 'react-redux'

import { createLoadingSelector } from '../services/loading/loading.selectors'

const useLoading = (actions: string[]) => {
  const isLoading = createLoadingSelector(actions)
  return useSelector(isLoading)
}

export default useLoading
