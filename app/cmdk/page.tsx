export default function Page() {
  return (
    <div className="mt-60 flex min-h-screen w-full justify-center">
      <p className="text-sm">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border px-1.5 text-[10px] font-medium opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </p>
    </div>
  );
}
