# UserBoard

Vanilla JS로 간단한 SPA (Single Page Application) 작성 실습  
게시판 서비스를 운용 중이라 가정하고 유저 등록 기능 구현

## 프로젝트 구조

```
📦spa-userboard
┣ 📂pages // 화면별 컴포넌트 정의
┃ ┣ 📜Home.js // 메인화면
┃ ┣ 📜NotFound.js // 404 에러 대응
┃ ┣ 📜UserNew.js // 유저 추가 화면
┃ ┗ 📜Users.js // 유저 목록 화면
┣ 📜app.js // 렌더 함수
┣ 📜index.html // html 진입점
┣ 📜readme.md // 이 파일
┣ 📜router.js // 해시 기반 라우터
┗ 📜state.js // 유저 목록 상태 관리
```

## 프로젝트 목적

- SPA 동작 이해
- 리액트 학습 전 필요성 이해

## 기능

- 해시 기반 라우팅
- 유저 목록 렌더링
- 유저 추가 기능
- 상태 변경 시 화면 자동 갱신

## 업데이트 이력

### v1 (2025-06-03)

- 초기 버전 공개

## TODO

- [ ] 상태 기반 렌더링 구조 개선
  - 상태가 바뀌면 자동으로 `render()`가 트리거되도록 구조 개선
  - `location.hash` 등 수동 라우팅에 의존하지 않는 구조
  - React의 `useState → setState → 자동 리렌더링`을 재현
