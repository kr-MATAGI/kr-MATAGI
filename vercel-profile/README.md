# Matagi Profile Page

Vercel에 배포할 수 있는 프로필/이력 소개 페이지입니다.

Cafe24 업무 경험을 중심으로 AI Agent, 데이터 파이프라인, SEO/GSC 자동화, 리포팅 자동화 경험을 동적으로 탐색할 수 있게 구성했습니다.

## 로컬 미리보기

```bash
cd vercel-profile
npm install
npm run dev -- -p 4173
```

브라우저에서 아래 주소를 엽니다.

```text
http://localhost:4173
```

## 빌드 확인

```bash
cd vercel-profile
npm run build
```

## Vercel 배포

Vercel에서 `kr-MATAGI/kr-MATAGI` 저장소를 연결한 뒤, 아래처럼 하위 폴더를 앱 루트로 지정합니다.

- Framework Preset: Vercel 자동 감지
- Root Directory: `vercel-profile`
- Build Command: `npm run build`
- Output Directory: Vercel 자동 감지
- Install Command: `npm install`

Vercel CLI를 쓴다면:

```bash
cd kr-MATAGI/vercel-profile
vercel
```

## 구성

- `app/page.jsx`: 인터랙티브 프로필 페이지
- `app/data.js`: 성과 지표, 프로젝트, 경력, 저장소, 논문 데이터
- `app/globals.css`: 반응형 스타일
- `app/layout.jsx`: 메타데이터
- `public/profile.jpg`: 프로필 사진
- `vercel.json`: Vercel 배포 설정
