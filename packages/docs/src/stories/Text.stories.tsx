import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@gm-ds/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Text example',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
