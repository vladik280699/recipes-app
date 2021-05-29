export interface Action<Payload = unknown, Meta = unknown> {
  type: string
  payload: Payload
  meta?: Meta
}

enum ReduxMethodNameSuffixes {
  IN_PROGRESS = 'REQUESTED',
  SUCCEEDED = 'SUCCEEDED',
  FAILED = 'FAILED',
}
interface LoadingState {
  [key: string]: string[]
}

const { IN_PROGRESS, SUCCEEDED, FAILED } = ReduxMethodNameSuffixes

const getActionMatches = (type: string) => {
  return new RegExp(`(.*)_(${IN_PROGRESS}|${SUCCEEDED}|${FAILED})`).exec(type)
}

const loading = (state: LoadingState = {}, action: Action<any, any>) => {
  const { type, meta } = action

  const matches = getActionMatches(type)

  if (!matches || !meta) {
    return state
  }

  const { operationUuid } = meta
  const [, requestName, requestState] = matches
  const previous = state[requestName] || []

  if (requestState === IN_PROGRESS) {
    return {
      ...state,
      [requestName]: [...previous, operationUuid],
    }
  }

  return {
    ...state,
    [requestName]: previous.filter((id) => id !== operationUuid),
  }
}

export default loading
