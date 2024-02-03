# 🎨Chogma

## 👓사용자 상호작용

![image](https://github.com/kwb020312/Chogma/assets/46777310/a9641c4c-c6c5-4750-923b-10dd0f9ba354)
라이브 블록을 사용하여 `Room`내에 위치한 `사용자 커서`를 공유하였음

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

![image](https://github.com/kwb020312/Chogma/assets/46777310/a2fcf816-65e3-4042-87d3-045322d966d6)

해당 라이브러리를 통해 `사용자 말풍선` 구현

![image](https://github.com/kwb020312/Chogma/assets/46777310/1efaa357-3a2b-4f6c-855b-33169fa39ef3)
