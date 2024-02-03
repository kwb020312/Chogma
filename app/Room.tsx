"use client";

import { RoomProvider } from "@/liveblocks.config";
import { ClientSideSuspense } from "@liveblocks/react";
import { PropsWithChildren } from "react";

const Room = ({ children }: PropsWithChildren) => {
  return (
    <RoomProvider id="my-room" initialPresence={{}}>
      <ClientSideSuspense fallback={<div>로딩중...</div>}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
};

export default Room;
