import { StoryObj, Meta } from "@storybook/react";

import RootLayout from "@/app/layout";

import { Popover } from ".";

const meta: Meta<typeof Popover> = {
  title: "components/Popover",
  component: Popover,
  decorators: [
    (Story) => (
      <RootLayout>
        <Story />
      </RootLayout>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Primary: Story = {
  args: {},
};
