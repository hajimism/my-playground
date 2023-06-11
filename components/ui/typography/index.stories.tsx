import { StoryObj, Meta } from "@storybook/react";

import RootLayout from "@/app/layout";

import { H1, H2, P, List, H3 } from ".";

const Typography = () => {
  return (
    <>
      <H1>The Joke Tax Chronicles</H1>
      <P>
        Once upon a time, in a far-off land, there was a very lazy king who
        spent all day lounging on his throne. One day, his advisors came to him
        with a problem: the kingdom was running out of money.
      </P>
      <H2>The King&apos;s Plan</H2>
      <P>
        The king thought long and hard, and finally came up with a brilliant
        plan: he would tax the jokes in the kingdom.
      </P>
      <H3>The Joke Tax</H3>
      <P>
        The king&apos;s subjects were not amused. They grumbled and complained,
        but the king was firm:
      </P>
      <List>
        <li>1st level of puns: 5 gold coins</li>
        <li>2nd level of jokes: 10 gold coins</li>
        <li>3rd level of one-liners : 20 gold coins</li>
      </List>
    </>
  );
};

const meta: Meta<typeof Typography> = {
  title: "components/Typography",
  component: Typography,
  decorators: [
    (Story) => (
      <RootLayout>
        <Story />
      </RootLayout>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Primary: Story = {
  args: {},
};
