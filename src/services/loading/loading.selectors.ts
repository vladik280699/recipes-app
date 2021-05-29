import { includes, isEmpty } from 'lodash'
import { RootState } from '../store/store'

export const createLoadingSelector = (actions: string[]) => (
  state: RootState
) =>
  includes(
    actions.map((action) => !isEmpty(state.loadingReducer[action])),
    true
  )
