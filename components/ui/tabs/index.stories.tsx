import { StoryObj, Meta } from "@storybook/react";

import RootLayout from "@/app/layout";

import { Tabs } from ".";

const meta: Meta<typeof Tabs> = {
  title: "components/Tabs",
  component: Tabs,
  decorators: [
    (Story) => (
      <RootLayout>
        <Story />
      </RootLayout>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Primary: Story = {
  args: {},
};
