import keyBy from 'lodash/fp/keyBy'
import keys from 'lodash/fp/keys'

export const groupById = <T extends any[]>(collection: T, iteratee = 'id') => {
  const byId = keyBy(iteratee, collection)
  const ids = keys(byId)

  return {
    byId,
    ids,
  }
}
