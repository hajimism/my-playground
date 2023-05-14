import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { RichTextPlugin as RichTextPluginPrimitive } from "@lexical/react/LexicalRichTextPlugin";

export const RichTextPlugin = () => (
  <RichTextPluginPrimitive
    contentEditable={
      <ContentEditable className="p-6 mt-4 min-h-[36rem] focus:ring-0 focus:outline-none" />
    }
    placeholder={
      <div className="absolute pt-[2px] pl-1 top-10 left-7 text-sage-9 pointer-events-none select-none">
        Enter some text...
      </div>
    }
    ErrorBoundary={LexicalErrorBoundary}
  />
);
