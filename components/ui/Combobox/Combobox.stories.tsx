import { StoryObj, Meta } from "@storybook/react";

import RootLayout from "@/app/layout";

import { Combobox } from ".";

const meta: Meta<typeof Combobox> = {
  title: "components/Combobox",
  component: Combobox,
  decorators: [
    (Story) => (
      <RootLayout>
        <Story />
      </RootLayout>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Combobox>;

export const Primary: Story = {
  args: {},
};
