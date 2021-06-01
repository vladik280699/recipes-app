import 'react-native'
import React from 'react'
// Note: test renderer must be required after react-native.
// eslint-disable-next-line
import renderer from 'react-test-renderer'

import App from '../App.tsx'

jest.useFakeTimers()

it('renders correctly', () => {
  renderer.create(<App />)
})
