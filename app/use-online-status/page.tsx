import { AvatarWithOnlineStatus } from "./component";

const USER = { name: "Hajime Nakagawa", image: "/avatar-group/hajimism.png" };

export default function Page() {
  return <AvatarWithOnlineStatus user={USER} />;
}
