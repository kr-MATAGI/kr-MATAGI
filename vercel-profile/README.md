# Matagi Profile Page

Vercel에 배포하는 개발자 포트폴리오입니다.

Cafe24의 데이터 자동화와 AI Agent, HotSeller의 대량 작업 처리 백엔드, NAVIS-AMS의 Live Map·Online Routing, 부산대학교 대학원의 G2P·NER 연구를 함께 소개합니다.

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
- `app/data.js`: 성과 지표, 프로젝트, 경력, 저장소, 상세 연구 데이터
- `app/globals.css`: 반응형 스타일
- `app/layout.jsx`: 메타데이터
- `public/profile.jpg`: 프로필 사진
- `public/ui-diagnostics-dashboard.jpg`: 자사몰 UI 자동 진단 운영 화면
- `public/voc-clustering-dashboard.jpg`: VoC 클러스터링 분석 화면
- `vercel.json`: Vercel 배포 설정
