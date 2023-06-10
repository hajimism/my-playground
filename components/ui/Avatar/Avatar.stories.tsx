import { StoryObj, Meta } from "@storybook/react";

import RootLayout from "@/app/layout";

import { Avatar } from ".";

const meta: Meta<typeof Avatar> = {
  title: "components/Avatar",
  component: Avatar,
  decorators: [
    (Story) => (
      <RootLayout>
        <Story />
      </RootLayout>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {},
};
