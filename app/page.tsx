import { Github } from "lucide-react";

import { ThemeSwitcher } from "@/components/functional/ThemeSwitcher";
import { Button } from "@/components/ui/Button";
import { H1, H2, H3, List, P } from "@/components/ui/Typography";

export default function Home() {
  return (
    <div className="py-20 px-6 max-w-2xl mx-auto">
      <H1>Windy Radix Template</H1>
      <H2>What&apos;s this?</H2>
      <P>Fusion of these cool projects😘</P>
      <List>
        <li>
          <a
            href="https://ui.shadcn.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-green-11 transition-colors"
          >
            shadcn/ui
          </a>
        </li>
        <li>
          <a
            href="https://windy-radix-palette.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-green-11 transition-colors"
          >
            windy-radix-palette
          </a>
        </li>
      </List>
      <H2>In addition</H2>
      <P>These are already prepared🤩</P>
      <List>
        <li>Storybook</li>
        <li>ESLint import rules</li>
        <li>scaffdog template</li>
        <li>Theme switcher</li>
      </List>
      <div className="flex items-center gap-4">
        <Button>
          <Github className="mr-2 h-4 w-4" />
          <a
            href="https://github.com/hajimism/windy-radix-template"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            View Source
          </a>
        </Button>
        <ThemeSwitcher />
      </div>
      <H2>Tips</H2>
      <H3>Change color</H3>
      <P>
        This template is now Green/Sage based. You can choose the combination
        freely, such as Violet/Mauve based or Blue/Slate based.
      </P>
      <P>
        Check the{" "}
        <a
          href="https://www.radix-ui.com/docs/colors/palette-composition/composing-a-palette"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-green-11 transition-colors"
        >
          palette
        </a>{" "}
        to customize effectively.
      </P>
      <H3>Use scaffdog</H3>
      <P>
        When adding a new ui component,{" "}
        <code className="relative rounded bg-sage-3 py-[0.2rem] px-[0.3rem] font-mono text-sm font-semibold text-green-11">
          npx scaffdog generate ui
        </code>{" "}
        will speed up your first steps.
      </P>
      <P>Feel free to edit the templates or add new ones of your own.</P>
    </div>
  );
}
