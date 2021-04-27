import styled from 'styled-components/native'
import { Text, View, Image } from 'react-native'

export const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 10px;
  height: 215px;
  border-color: #cccccc;
  border-width: 0.5px;
  border-radius: 20px;
`

export const Photo = styled(Image)`
  width: 100%;
  height: 155px;
  border-radius: 20px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
`

export const Name = styled(Text)`
  flex: 1;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #333333;
  margin-top: 8px;
`

export const Info = styled(Text)`
  margin-top: 3px;
  margin-bottom: 5px;
`
