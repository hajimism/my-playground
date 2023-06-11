import { StoryObj, Meta } from "@storybook/react";

import { Checkbox } from "@/components/ui/checkbox";

import RootLayout from "@/app/layout";

import { Label } from ".";

const LabelDemo = () => {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  );
};

const meta: Meta<typeof LabelDemo> = {
  title: "components/Label",
  component: LabelDemo,
  decorators: [
    (Story) => (
      <RootLayout>
        <Story />
      </RootLayout>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof LabelDemo>;

export const Primary: Story = {
  args: {},
};
