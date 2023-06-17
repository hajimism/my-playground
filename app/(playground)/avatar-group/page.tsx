import { AvatarGroup } from "./component";

const USERS = [
  { name: "Hajime Nakagawa", image: "/avatar-group/hajimism.png" },
  { name: "Lady A", image: "/avatar-group/lady_a.png" },
  { name: "Lady B", image: "/avatar-group/lady_b.png" },
  { name: "Lady C", image: "/avatar-group/lady_c.png" },
  { name: "Lady D", image: "/avatar-group/lady_d.png" },
  { name: "Lady E", image: "/avatar-group/lady_e.png" },
];

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <AvatarGroup avatarDataList={USERS} />
      <AvatarGroup avatarDataList={USERS} max={3} />
    </div>
  );
}
