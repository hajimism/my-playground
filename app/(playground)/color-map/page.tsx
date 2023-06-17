export default function Page() {
  return (
    <ul className="bg-yellow-8">
      <li className="text-background">--background</li>
      <li className="text-foreground">--foreground</li>

      <li className="text-muted">--muted</li>
      <li className="text-muted-foreground">--muted-foreground</li>

      <li className="text-popover">--popover</li>
      <li className="text-popover-foreground">--popover-foreground</li>

      <li className="text-card">--card</li>
      <li className="text-card-foreground">--card-foreground</li>

      <li className="text-border">--border</li>
      <li className="text-input">--input</li>

      <li className="text-primary">--primary</li>
      <li className="text-primary-foreground">--primary-foreground</li>

      <li className="text-secondary">--secondary</li>
      <li className="text-secondary-foreground">--secondary-foreground</li>

      <li className="text-accent">--accent</li>
      <li className="text-accent-foreground">--accent-foreground</li>

      <li className="text-destructive">--destructive</li>
      <li className="text-destructive-foreground">--destructive-foreground</li>

      <li className="text-ring">--ring</li>
    </ul>
  );
}
