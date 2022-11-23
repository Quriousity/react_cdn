# Clone 후 해야하는 것 들

## 1. Babel 빌드를 위한 npm 모듈 설치

```
npm install
```

## 2. HTML 파일에 DOM 컨테이너 만들기 (index.html)

```HTML
<div id="root">
```

## 3. src 경로 생성 후 index.js 작성하기

```
mkdir src
```

```
cd src
```

index.js 작성하기

```JavaScript
const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));
```

## 4. 작업 경로로 돌아와 babel 로 index.js 빌드하기

```Shell
npx babel --watch src --out-dir . --presets react-app/prod
```

## 5. index.html에 스크립트 태그 추가하기

- 개발용

```HTML
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

<script src="index.js"></script>
```

- 배포용

```HTML
<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>

<script src="index.js"></script>
```
