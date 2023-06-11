import { StoryObj, Meta } from "@storybook/react";

import RootLayout from "@/app/layout";

import { Header } from ".";

const meta: Meta<typeof Header> = {
  title: "components/Header",
  component: Header,
  decorators: [
    (Story) => (
      <RootLayout>
        <Story />
      </RootLayout>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  args: {},
};
