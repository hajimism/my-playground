import { StoryObj, Meta } from "@storybook/react";

import RootLayout from "@/app/layout";

import { Skeleton } from ".";

export function SkeletonDemo() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

const meta: Meta<typeof SkeletonDemo> = {
  title: "components/Skeleton",
  component: SkeletonDemo,
  decorators: [
    (Story) => (
      <RootLayout>
        <Story />
      </RootLayout>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SkeletonDemo>;

export const Primary: Story = {
  args: {},
};
