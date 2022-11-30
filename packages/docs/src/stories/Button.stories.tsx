import type { StoryObj, Meta } from '@storybook/react'
import type { ButtonProps } from '@gm-ds/react'
import { Button } from '@gm-ds/react'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Send',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj = {}
export const Large: StoryObj = {
  args: {
    size: 'large',
  },
}
