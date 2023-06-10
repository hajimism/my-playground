import { StoryObj, Meta } from "@storybook/react";

import RootLayout from "@/app/layout";

import { Input } from ".";

const meta: Meta<typeof Input> = {
  title: "components/Input",
  component: Input,
  decorators: [
    (Story) => (
      <RootLayout>
        <Story />
      </RootLayout>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {},
};
