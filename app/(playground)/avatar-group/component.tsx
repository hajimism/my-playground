import { FC } from "react";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import { getInitial } from "./lib";

type Props = {
  avatarDataList: {
    image: string;
    name: string;
  }[];
  max?: number | undefined;
};

export const AvatarGroup: FC<Props> = ({ avatarDataList, max }) => {
  const avatarDataListWithinMax =
    max !== undefined ? avatarDataList.slice(0, max) : avatarDataList;
  const excess = max !== undefined ? avatarDataList.length - max : 0;

  // 子要素がrelativeのとき、flex-row-reverseでレイアウトすることで
  // z-indexを使わずに「先頭から順に下に重なっていく」を実現できるので
  // データ配列そのものも裏返すことで順序を元通りにする。
  const reversetDataList = [...avatarDataListWithinMax].reverse();

  return (
    <div className="flex flex-row-reverse justify-end -space-x-2 space-x-reverse">
      {excess > 0 && (
        <Avatar>
          <AvatarFallback> {`+${excess}`}</AvatarFallback>
        </Avatar>
      )}
      {reversetDataList.map((user, i) => (
        <Avatar key={i}>
          <AvatarImage
            src={user.image}
            alt={user.name}
            className="object-contain"
          />
          <AvatarFallback>{getInitial(user.name)}</AvatarFallback>
        </Avatar>
      ))}
    </div>
  );
};
