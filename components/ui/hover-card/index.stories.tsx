import { StoryObj, Meta } from "@storybook/react";

import RootLayout from "@/app/layout";

import { HoverCard } from ".";

const meta: Meta<typeof HoverCard> = {
  title: "components/HoverCard",
  component: HoverCard,
  decorators: [
    (Story) => (
      <RootLayout>
        <Story />
      </RootLayout>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof HoverCard>;

export const Primary: Story = {
  args: {},
};
