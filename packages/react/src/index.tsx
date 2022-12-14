import type { ComponentProps } from 'react'
import { styled } from './styles'

export * from './components/Box'
export * from './components/Text'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$green700',
  borderRadius: '$sm',
  height: '$10',
  border: 0,
  fontWeight: 'bold',
  color: '$white',

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
      large: {
        fontSize: 16,
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
