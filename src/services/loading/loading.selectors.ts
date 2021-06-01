import { includes, isEmpty } from 'lodash'
import { RootState } from '../store/reducer'

export const createLoadingSelector = (actions: string[]) => (
  state: RootState
) =>
  includes(
    actions.map((action) => !isEmpty(state.loading[action])),
    true
  )
