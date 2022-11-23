import { colors } from '@gm-ds/tokens'
import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$green700',
  borderRadius: '$md',
  height: '$10',
})

export function App() {
  return <h1 style={{ color: colors.gray800 }}>Hello World</h1>
}
