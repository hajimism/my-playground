import { StoryObj, Meta } from '@storybook/react'

import RootLayout from "@/app/layout";

import { Textarea } from '.'

const meta: Meta<typeof Textarea> = {
  title: 'components/Textarea',
  component: Textarea,
  decorators: [
    (Story) => (
      <RootLayout>
        <Story />
      </RootLayout>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Textarea>

export const Primary: Story = {
  args:{}
}
