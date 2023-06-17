import { TabWithRouter } from "./component";
import { TAB_ITEMS } from "./data";

export default function Page() {
  return <TabWithRouter tabItems={TAB_ITEMS} />;
}
