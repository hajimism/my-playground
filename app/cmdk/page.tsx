import { CommandMenu } from "./component";

export default function Page() {
  return (
    <div className="min-h-screen flex w-full mt-60 justify-center">
      <p className="text-sm text-muted-foreground">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </p>
      <CommandMenu />
    </div>
  );
}
