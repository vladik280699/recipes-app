import React, { ReactNode } from 'react'
import { View, ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'

const CenteredContainer = styled(View)`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

interface Props {
  isLoading: boolean
  children: ReactNode
}

const LoadingWrapper: React.FC<Props> = ({ isLoading, children }) => {
  return isLoading ? (
    <CenteredContainer>
      <ActivityIndicator size="large" color="#94939b" />
    </CenteredContainer>
  ) : (
    <>{children}</>
  )
}

export default LoadingWrapper
