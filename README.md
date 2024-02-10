# 🎨Chogma

🎨Figma를 직접 구현해서 활용해보자! [Chogma로 디자인하기](https://chogma.vercel.app/)

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

`사용자 말풍선` 구현

![image](https://github.com/kwb020312/Chogma/assets/46777310/1efaa357-3a2b-4f6c-855b-33169fa39ef3)

`감정표현` 구현

![image](https://github.com/kwb020312/Chogma/assets/46777310/9f405304-989c-4ac6-8f81-09a39be17484)

`실시간 접속자` 구현
![image](https://github.com/kwb020312/Chogma/assets/46777310/a2c67f71-2b0f-48c1-94dd-61ee6ff145ff)

`댓글` 구현
![image](https://github.com/kwb020312/Chogma/assets/46777310/4d65be04-0fe0-4a23-a36b-4338a78aef17)

---

## 😀도형

![image](https://github.com/kwb020312/Chogma/assets/46777310/bf041a33-17c1-4243-9df5-2b840ee5f33a)

기본 `생성` 및 `이동`, `리사이징`, `각도 변경` 구현

---

## 😁편집

![image](https://github.com/kwb020312/Chogma/assets/46777310/e4d5cdce-ac94-42a4-b065-7420dc574e7e)

생성된 레이어를 편집 및 배포 할 수 있도록 개발

---
