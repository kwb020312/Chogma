"use client";

import { useOthers } from "@/liveblocks.config";

const CollaborativeApp = () => {
  const others = useOthers();
  const userCount = others.length;
  return <div>현재 {userCount}명의 사용자가 접속 중 입니다.</div>;
};

export default CollaborativeApp;
