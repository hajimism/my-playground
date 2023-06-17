import { ToSource } from "./to-source";

export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <div className="fixed bottom-8 right-8">
        <ToSource />
      </div>
    </>
  );
}
