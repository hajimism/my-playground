import { StoryObj, Meta } from "@storybook/react";
import { Plus } from "lucide-react";

import RootLayout from "@/app/layout";

import { Button } from "../Button";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from ".";

type Side = "left" | "top" | "right" | "bottom" | undefined;

function TooltipDemo(props: { side: Side }) {
  return (
    <div className="flex justify-center h-screen items-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" className="w-10 rounded-full p-0">
              <Plus className="h-4 w-4" />
              <span className="sr-only">Add</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side={props.side}>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

const meta: Meta<typeof TooltipDemo> = {
  title: "components/Tooltip",
  component: TooltipDemo,
  decorators: [
    (Story) => (
      <RootLayout>
        <Story />
      </RootLayout>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof TooltipDemo>;

export const Top: Story = {
  args: {},
};

export const Bottom: Story = {
  args: {
    side: "bottom",
  },
};

export const Left: Story = {
  args: {
    side: "left",
  },
};

export const Right: Story = {
  args: {
    side: "right",
  },
};
