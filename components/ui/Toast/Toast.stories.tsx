import { StoryObj, Meta } from "@storybook/react";

import { useToast, type Toast as ToastProps } from "@/hooks/ui/useToast";

import { Button } from "@/components/ui/Button";

import { ToastAction } from ".";

const ToastDemo = (props: ToastProps) => {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          ...props,
        });
      }}
    >
      Show Toast
    </Button>
  );
};

const meta: Meta<typeof ToastDemo> = {
  title: "components/Toast",
  component: ToastDemo,
};

export default meta;

type Story = StoryObj<typeof ToastDemo>;

export const Simple: Story = {
  args: {
    description: "Your message has been sent.",
  },
};

export const WithTitle: Story = {
  args: {
    title: "Uh oh! Something went wrong.",
    description: "There was a problem with your request.",
  },
};

export const WithAction: Story = {
  args: {
    title: "Uh oh! Something went wrong.",
    description: "There was a problem with your request.",
    action: <ToastAction altText="Try again">Try again</ToastAction>,
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    title: "Uh oh! Something went wrong.",
    description: "There was a problem with your request.",
    action: <ToastAction altText="Try again">Try again</ToastAction>,
  },
};
