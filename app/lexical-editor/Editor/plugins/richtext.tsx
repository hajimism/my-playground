import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { RichTextPlugin as RichTextPluginPrimitive } from "@lexical/react/LexicalRichTextPlugin";

export const RichTextPlugin = () => (
  <RichTextPluginPrimitive
    contentEditable={
      <ContentEditable className="mt-4 min-h-[36rem] p-6 focus:outline-none focus:ring-0" />
    }
    placeholder={
      <div className="pointer-events-none absolute left-7 top-10 select-none pl-1 pt-[2px] text-sage-9">
        Enter some text...
      </div>
    }
    ErrorBoundary={LexicalErrorBoundary}
  />
);
