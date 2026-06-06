export const metrics = [
  { label: "Cafe24 PRO GSC", value: "3만+", caption: "전체 등록 및 일일 수집" },
  { label: "Storefront UI", value: "1.3만", caption: "활성 자사몰 품질 진단" },
  { label: "VoC Corpus", value: "5.5만", caption: "상담 데이터 분석" },
  { label: "Network Cost", value: "83%", caption: "UI 진단 통합 로드 절감" }
];

export const focusAreas = [
  {
    title: "LLM Agent",
    body: "LangGraph 기반 Supervisor/Router/Worker 구조로 자연어 질의를 데이터 분석과 운영 자동화 작업으로 라우팅합니다."
  },
  {
    title: "Data Pipeline",
    body: "Airflow, S3, Databricks, PostgreSQL을 연결해 대규모 수집, 적재, 검증, 리포팅 흐름을 만듭니다."
  },
  {
    title: "Service Backend",
    body: "FastAPI와 Next.js BFF로 멀티테넌트 서비스, 인증, 캐시, 엔터프라이즈 운영 대시보드를 구축합니다."
  }
];

export const projects = [
  {
    id: "agent-bricks",
    category: "agent",
    title: "Databricks LangGraph Multi-Agent Analytics",
    short: "자연어 질의를 Databricks Genie, Vector Search, Dynamic SQL Worker로 라우팅하는 분석 Agent.",
    function: "비개발자가 자연어로 운영 지표와 퍼널, SEO 데이터를 질의할 수 있는 분석 인터페이스",
    structure: "Supervisor / Router / Worker / Sub-Supervisor 4-layer LangGraph",
    usage: "복합 질의를 데이터 소스별로 분해하고 structured output, route-loop 방지, self-correction으로 결과를 검증",
    stack: ["LangGraph", "Databricks", "Vector Search", "SQL Warehouse", "Pydantic"]
  },
  {
    id: "weekly-report",
    category: "report",
    title: "E-commerce Weekly Report Automation",
    short: "방문자, 매출, 퍼널, SEO 데이터를 분석해 HTML/PDF 주간 리포트를 자동 생성.",
    function: "쇼핑몰 주간 성과를 문제-원인-데이터-액션 구조로 설명하는 리포트 자동화",
    structure: "Databricks SQL -> LLM reasoning -> Plotly chart -> HTML/PDF report",
    usage: "운영자가 매출 변화 원인, 전환율, 객단가, 방문자 변화와 다음 액션을 빠르게 파악",
    stack: ["Databricks SQL", "Gemini", "Plotly", "Jinja2", "FastAPI"]
  },
  {
    id: "ui-tester",
    category: "automation",
    title: "Large-scale Storefront UI Diagnostics",
    short: "약 1.3만 활성 자사몰의 SSL, 오탈자, 깨진 리소스, JS 오류, 구매 퍼널 장애를 자동 점검.",
    function: "대규모 쇼핑몰 품질 이슈를 주기적으로 탐지하는 진단 플랫폼",
    structure: "Playwright 단일 로드에서 여러 검사를 통합 실행",
    usage: "사이트별 셀렉터 사전 없이 Cafe24 표준 패턴으로 구매 흐름을 재현하고 진단",
    stack: ["Python", "Playwright", "FastAPI", "Next.js", "MySQL"]
  },
  {
    id: "gsc-seo",
    category: "pipeline",
    title: "GSC/SEO Automation and Daily Reporting Pipeline",
    short: "약 3만 Cafe24 PRO 몰의 GSC 등록, 매일 수집, SEO 리포트를 자동화.",
    function: "Google Search Console 등록, 소유권 검증, 사이트맵 제출, 색인 요청 자동화",
    structure: "GSC API -> Airflow -> S3 -> Databricks -> SEO report",
    usage: "대량 계정/사이트 단위 API 데이터를 매일 수집해 SEO 리포트와 정합성 검증에 활용",
    stack: ["Airflow", "GSC API", "S3", "Databricks", "Selenium"]
  },
  {
    id: "voc-agent",
    category: "agent",
    title: "VoC Analysis and Personalized Coaching Agent",
    short: "5.5만 행 상담 데이터를 LLM/embedding/clustering으로 구조화하고 코칭 Agent로 연결.",
    function: "고객 상담 이슈와 비즈니스 지표를 기반으로 FAQ와 코칭 응답 생성",
    structure: "LLM extraction -> embedding -> UMAP/clustering -> FastAPI/SSE service",
    usage: "반복 문의와 불만 원인을 데이터 근거와 함께 확인하고 액션을 추천받는 구조",
    stack: ["FastAPI", "SSE", "BGE-M3", "UMAP", "PostgreSQL", "Redis"]
  },
  {
    id: "commerce-cockpit",
    category: "analytics",
    title: "AI Commerce Analytics Cockpit",
    short: "SHAP/Causal SHAP, clustering, Sales Shapley로 쇼핑몰 성과 요인을 해석하는 분석 Cockpit.",
    function: "매출, 트래픽, 상품, 검색, 외부 지표를 한 화면에서 해석하는 의사결정 대시보드",
    structure: "FastAPI backend, Next.js BFF, Lakebase to PostgreSQL sync",
    usage: "계정별 접근 제어와 cache-first serving으로 멀티테넌트 분석 경험 제공",
    stack: ["FastAPI", "Next.js", "PostgreSQL", "RLS", "SHAP", "Sales Shapley"]
  },
  {
    id: "geo",
    category: "analytics",
    title: "GEO Measurement Pipeline",
    short: "ChatGPT/Gemini 답변 내 자사몰 브랜드 추천·인용률을 Hit Score로 정량화.",
    function: "생성형 AI 검색 환경에서 브랜드 노출도를 측정",
    structure: "브랜드 선정 -> 질의 생성 -> AI 응답 수집 -> Hit Score 평가",
    usage: "기존 SEO로 측정하기 어려운 AI 검색 노출도를 수치화하고 개선점을 추적",
    stack: ["OpenAI API", "Gemini", "Databricks SQL", "Pydantic", "httpx"]
  }
];

export const experiences = [
  {
    company: "Cafe24",
    period: "2025.08 - Present",
    role: "AI/Data Engineer · FGS Team",
    lines: [
      "Databricks 데이터 파이프라인과 LangGraph AI Agent 분석 시스템 설계",
      "GSC/SEO 자동화, UI 품질 진단, VoC 분석, GEO 측정 워크플로우 구축",
      "FastAPI/Next.js 기반 멀티테넌트 서비스 백엔드와 보안/운영 구조 설계"
    ]
  },
  {
    company: "HotSeller",
    period: "2023.07 - 2024.10",
    role: "Core Backend Developer",
    lines: [
      "Python 기반 SNS 마케팅 솔루션 개발 및 운영",
      "PostgreSQL 파티셔닝, 인덱싱, 작업 로그 구조 개선",
      "RabbitMQ, Redis, Scheduler, Consumer 기반 작업 처리량 확장"
    ]
  },
  {
    company: "NAVIS-AMS",
    period: "2019.01 - 2020.06",
    role: "HMI Software Developer",
    lines: [
      "C++ 기반 벤츠 내비게이션 온라인 기능 개발",
      "Live Map, Online Routing, Android prototype porting",
      "cURL, WebSocket, JNI/NDK, SHA-256 기반 데이터 검증"
    ]
  }
];

export const repos = [
  ["KT-G2P-Prototype", "한국어 TTS 전처리를 위한 G2P 시스템", "https://github.com/kr-MATAGI/KT-G2P-Prototype"],
  ["NER-Model", "BERT/ELECTRA + LSTM/CRF 기반 한국어 NER 모델", "https://github.com/kr-MATAGI/NER-Model"],
  ["NER-kr", "SpanNER 기반 한국어 개체명 인식 연구", "https://github.com/kr-MATAGI/NER-kr"],
  [
    "De-identification-NER-Datasets",
    "개인정보 비식별화를 위한 한국어 NER 데이터셋 생성",
    "https://github.com/kr-MATAGI/De-identification-NER-Datasets"
  ],
  ["KorLex-API", "한국어 어휘의미망 KorLex API화", "https://github.com/kr-MATAGI/KorLex-API"],
  ["Table-Parser", "나무위키 테이블/정보상자 데이터 파싱", "https://github.com/kr-MATAGI/Table-Parser"]
];

export const publications = [
  ["지식 베이스를 활용한 심층학습 기반의 한국어 발음 변환", "Master's Thesis · 2023", "https://www.dbpia.co.kr/journal/detail?nodeId=T16857208"],
  ["음운 지식베이스를 활용한 딥러닝 기반 한국어 발음열 변환", "KCC Best Paper Award · 2023", "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11488011"],
  ["문맥 기반 한국어 숫자 발음열 변환", "KCC · 2023", "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11488045"],
  ["개체명 인식에서 품사 표현의 영향 분석", "KIICE · 2023", "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11498488"],
  ["개인정보 비식별화를 위한 NER 데이터 생성", "KIICE · 2022", "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11077874"]
];
