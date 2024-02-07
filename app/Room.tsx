"use client";

import Loader from "@/components/Loader";
import { RoomProvider } from "@/liveblocks.config";
import { LiveMap } from "@liveblocks/client";
import { ClientSideSuspense } from "@liveblocks/react";
import { PropsWithChildren } from "react";

const Room = ({ children }: PropsWithChildren) => {
  return (
    <RoomProvider
      id="my-room"
      initialPresence={{
        cursor: null,
        cursorColor: null,
        editingText: null,
      }}
      initialStorage={{
        canvasObjects: new LiveMap(),
      }}
    >
      <ClientSideSuspense fallback={<Loader />}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
};

export default Room;
