import { StoryObj, Meta } from "@storybook/react";
import { Italic } from "lucide-react";

import RootLayout from "@/app/layout";

import { Toggle } from ".";

function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle italic">
      <Italic className="h-4 w-4" />
    </Toggle>
  );
}

const meta: Meta<typeof ToggleDemo> = {
  title: "components/Toggle",
  component: ToggleDemo,
  decorators: [
    (Story) => (
      <RootLayout>
        <Story />
      </RootLayout>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ToggleDemo>;

export const Default: Story = {
  args: {},
};
