# 🎨Chogma

## 👓사용자 커서 공유

[라이브 블록](https://liveblocks.io/docs/get-started) 사용하여 `Room`내에 위치한 사용자 커서를 공유하였음

```tsx
const handlePointerMove = useCallback((event: React.PointerEvent) => {
  event.preventDefault();
  const targetRect = event.currentTarget?.getBoundingClientRect();
  // 페이지 스크롤 시에도 정확한 좌표를 구하려면 아래와 같이 구현해야함
  const x = event.clientX - targetRect.x;
  const y = event.clientY - targetRect.y;

  updateMyPresence({ cursor: { x, y } });
}, []);
```
