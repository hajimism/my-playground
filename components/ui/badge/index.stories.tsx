import { StoryObj, Meta } from "@storybook/react";

import RootLayout from "@/app/layout";

import { Badge } from ".";

const meta: Meta<typeof Badge> = {
  title: "components/Badge",
  component: Badge,
  decorators: [
    (Story) => (
      <RootLayout>
        <Story />
      </RootLayout>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {},
};
