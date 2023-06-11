import { StoryObj, Meta } from "@storybook/react";

import RootLayout from "@/app/layout";

import { Checkbox } from ".";

const meta: Meta<typeof Checkbox> = {
  title: "components/Checkbox",
  component: Checkbox,
  decorators: [
    (Story) => (
      <RootLayout>
        <Story />
      </RootLayout>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
  args: {},
};
