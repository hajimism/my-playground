import { Input } from "@/components/ui/input";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="a">
        {'<input type="text" inputMode="numeric" pattern="d*" />: '}
        <Input id="a" type="text" inputMode="numeric" pattern="\d*" />
      </label>
      <label htmlFor="b">
        {'<input id="b" type="number" className="[appearance:textfield]" />: '}
        <Input id="b" type="number" className="[appearance:textfield]" />
      </label>
    </div>
  );
}
