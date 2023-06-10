import { StoryObj, Meta } from "@storybook/react";

import RootLayout from "@/app/layout";

import { Command } from ".";

const meta: Meta<typeof Command> = {
  title: "components/Command",
  component: Command,
  decorators: [
    (Story) => (
      <RootLayout>
        <Story />
      </RootLayout>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Command>;

export const Primary: Story = {
  args: {},
};
