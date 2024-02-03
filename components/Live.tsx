import { useMyPresence, useOthers } from "@/liveblocks.config";
import LiveCursors from "./cursor/LiveCursors";
import { useCallback } from "react";

const Live = () => {
  const others = useOthers();
  const [{ cursor }, updateMyPresence] = useMyPresence() as any;

  const handlePointerMove = useCallback((event: React.PointerEvent) => {
    event.preventDefault();
    const targetRect = event.currentTarget?.getBoundingClientRect();
    const x = event.clientX - targetRect.x;
    const y = event.clientY - targetRect.y;

    updateMyPresence({ cursor: { x, y } });
  }, []);
  const handlePointerLeave = useCallback((event: React.PointerEvent) => {
    event.preventDefault();
    updateMyPresence({ cursor: null, message: null });
  }, []);
  const handlePointerDown = useCallback((event: React.PointerEvent) => {
    const targetRect = event.currentTarget?.getBoundingClientRect();
    const x = event.clientX - targetRect.x;
    const y = event.clientY - targetRect.y;

    updateMyPresence({ cursor: { x, y } });
  }, []);

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      className="border-2 border-green-500 h-[100vh] w-full flex justify-center items-center text-center"
    >
      <h1 className="text-5xl text-white">LiveBlocks Chogma</h1>
      <LiveCursors others={others} />
    </div>
  );
};

export default Live;
