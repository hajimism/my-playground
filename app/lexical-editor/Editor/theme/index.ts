import { EditorThemeClasses } from "lexical";

import styles from "./code-highlight.module.css";

export const theme: EditorThemeClasses = {
  heading: {
    h1: "scroll-m-20 mt-12 mb-6 text-4xl font-extrabold tracking-tight lg:text-5xl [&:nth-child(1)]:mt-0",
    h2: "scroll-m-20 mt-8 mb-2 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
    h3: "scroll-m-20 my-4 text-2xl font-semibold tracking-tight",
    h4: "scroll-m-20 my-3 text-xl font-semibold tracking-tight",
  },
  paragraph: "leading-7 [&:not(:first-child)]:mt-2",
  quote: "mt-2 border-l-2 pl-6",
  list: {
    ul: "my-2 ml-6 list-disc [&>li]:mt-2 [&:first-child]:mt-0",
    ol: "my-2 ml-6 list-decimal [&>li]:mt-2 [&:first-child]:mt-0",
    listitem: "[&:first-child]:mt-0 [&:has(:is(ol,ul))]:list-none",
  },
  text: {
    strikethrough: "line-through",
    code: "relative rounded bg-sage-3 text-green-9 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold;",
  },
  link: "text-blue-8",
  code: styles["code"] ?? "",
  codeHighlight: {
    atrule: styles["tokenAttr"] ?? "",
    attr: styles["tokenAttr"] ?? "",
    boolean: styles["tokenProperty"] ?? "",
    builtin: styles["tokenSelector"] ?? "",
    cdata: styles["tokenComment"] ?? "",
    char: styles["tokenSelector"] ?? "",
    class: styles["tokenFunction"] ?? "",
    "class-name": styles["tokenFunction"] ?? "",
    comment: styles["tokenComment"] ?? "",
    constant: styles["tokenProperty"] ?? "",
    deleted: styles["tokenProperty"] ?? "",
    doctype: styles["tokenComment"] ?? "",
    entity: styles["tokenOperator"] ?? "",
    function: styles["tokenFunction"] ?? "",
    important: styles["tokenVariable"] ?? "",
    inserted: styles["tokenSelector"] ?? "",
    keyword: styles["tokenAttr"] ?? "",
    namespace: styles["tokenVariable"] ?? "",
    number: styles["tokenProperty"] ?? "",
    operator: styles["tokenOperator"] ?? "",
    prolog: styles["tokenComment"] ?? "",
    property: styles["tokenProperty"] ?? "",
    punctuation: styles["tokenPunctuation"] ?? "",
    regex: styles["tokenVariable"] ?? "",
    selector: styles["tokenSelector"] ?? "",
    string: styles["tokenSelector"] ?? "",
    symbol: styles["tokenProperty"] ?? "",
    tag: styles["tokenProperty"] ?? "",
    url: styles["tokenOperator"] ?? "",
    variable: styles["tokenVariable"] ?? "",
  },
};
