"use client";

import { FC } from "react";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import { cn } from "@/lib/utils";

import { useOnlineStatus } from "./hook";

type User = {
  image: string;
  name: string;
};

type Props = {
  user: User;
};

export const AvatarWithOnlineStatus: FC<Props> = ({ user }) => {
  const isOnline = useOnlineStatus();

  return (
    <div className="relative w-fit">
      <Avatar>
        <AvatarImage
          src={user.image}
          alt={user.name}
          className="object-contain"
        />
        <AvatarFallback>FB</AvatarFallback>
      </Avatar>
      <div
        className={cn(
          "absolute bottom-0.5 right-0.5 h-2.5 w-2.5 rounded-full border border-white transition-colors",
          isOnline ? "bg-green-500" : "bg-gray-500"
        )}
      />
    </div>
  );
};
