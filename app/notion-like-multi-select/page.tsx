import { MultiSelect } from "./component";
import { FRAMEWORKS } from "./data";

export default function Page() {
  return (
    <div>
      <MultiSelect items={FRAMEWORKS} />
    </div>
  );
}
