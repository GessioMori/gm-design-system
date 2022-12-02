import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@gm-ds/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Testing box</Text>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
