export const metrics = [
  { label: "GSC Automation", value: "3만+", caption: "소유권 검증·사이트맵·일일 수집 자동화" },
  { label: "Mall QA Coverage", value: "3만+", caption: "품질·성능·구매 퍼널 자동 진단" },
  { label: "VoC Insight Pipeline", value: "5.5만", caption: "LLM 추출·클러스터링·FAQ/코칭 Agent 연계" },
  { label: "Job Throughput", value: "3억+", caption: "SNS 마케팅 작업 처리량 확장" }
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
    title: "Data Service",
    body: "FastAPI 기반 API로 분석 결과, Agent workflow, 인증, 캐시, 운영 대시보드를 서비스화합니다."
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
    title: "자사몰 진단 자동화 시스템",
    short: "약 3만 개 이상 Cafe24 PRO 몰의 네트워크, 느린 콘텐츠, 오탈자, 리소스 실패, 구매 퍼널 장애를 자동 점검.",
    function: "대규모 사이트의 UI 품질, 성능 신호, 구매 흐름 이상을 주기적으로 탐지하는 진단 플랫폼",
    structure: "Playwright 단일 goto()에서 네트워크 타이밍, 리소스 실패, JS 오류, 깨진 이미지/링크, 화이트스크린 검사를 통합 수집",
    usage: "표준 onclick 휴리스틱으로 구매 흐름을 재현하고 pass/partial/fail/auth_required 등 단계별 판정으로 조치 우선순위를 제공",
    stack: ["Python", "Playwright", "FastAPI", "MySQL", "LLM"]
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
    structure: "FastAPI backend, Lakebase to PostgreSQL sync, cache-first serving",
    usage: "계정별 접근 제어와 cache-first serving으로 멀티테넌트 분석 경험 제공",
    stack: ["FastAPI", "PostgreSQL", "RLS", "SHAP", "Sales Shapley"]
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
  },
  {
    id: "hotseller-job-pipeline",
    category: "backend",
    title: "HotSeller SNS Marketing Job Processing Pipeline",
    short: "Scheduler, RabbitMQ, Redis, Consumer worker로 대량 SNS 마케팅 작업을 분산 처리.",
    function: "서비스/마켓별 계정 작업을 안정적으로 분배하고 고처리량 운영을 지원하는 백엔드 파이프라인",
    structure: "Scheduler -> RabbitMQ -> Redis Dispatcher -> Consumer workers -> PostgreSQL",
    usage: "월 5천만 건 수준의 작업 처리량을 3억 건 이상 처리 가능한 구조로 확장",
    stack: ["Python", "RabbitMQ", "Redis", "PostgreSQL", "AWS EC2"]
  },
  {
    id: "hotseller-ops-optimization",
    category: "backend",
    title: "HotSeller PostgreSQL Operations Optimization",
    short: "작업 로그와 운영 대시보드 쿼리를 최적화해 저장 용량과 장애 대응 흐름을 개선.",
    function: "작업 이력, 계정 상태, 서비스 이슈를 운영자가 빠르게 파악할 수 있는 데이터 운영 기반",
    structure: "Partitioning, indexing, column split, JSONB storage tuning, Slack alert queries",
    usage: "작업 로그 저장 구조를 개선해 저장 용량을 약 3배 절감하고 운영 분석 쿼리를 정리",
    stack: ["PostgreSQL", "SQL", "JSONB", "Slack API", "Python"]
  },
  {
    id: "navis-live-map",
    category: "automotive",
    title: "Mercedes-Benz Navigation Live Map",
    short: "목적지 경로에 필요한 지도 타일을 실시간 다운로드하고 검증하는 내비게이션 온라인 기능.",
    function: "벤츠 내비게이션에서 온라인 지도 데이터를 안전하게 갱신하고 오류 타일을 재시도하는 기능",
    structure: "cURL download -> multithreaded processing -> SHA-256 validation -> tile replacement",
    usage: "오프라인 지도와 온라인 타일 갱신을 결합해 자동차 HMI 환경의 지도 최신성을 보강",
    stack: ["C++", "cURL", "Multithreading", "SHA-256", "Automotive HMI"]
  },
  {
    id: "navis-online-routing",
    category: "automotive",
    title: "Mercedes-Benz Online Routing Integration",
    short: "WebSocket 기반 온라인 경로 탐색과 온보드/온라인 경로 전환을 개선.",
    function: "온라인 경로 업데이트, 대체 경로 ETA, UI-내비게이션 모듈 인터페이스를 연결하는 기능",
    structure: "WebSocket route updates, RESTful API integration, SQLite, shared memory interfaces",
    usage: "자동차 HMI에서 온라인 서비스와 내비게이션 코어가 안정적으로 연동되도록 개선",
    stack: ["C++", "WebSocket", "RESTful API", "SQLite", "Shared Memory"]
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
      "FastAPI 기반 데이터 서비스 API와 보안/운영 구조 설계"
    ]
  },
  {
    company: "HotSeller",
    period: "2023.07 - 2024.10",
    role: "Core Backend Developer",
    lines: [
      "Python 기반 SNS 마케팅 솔루션 개발 및 운영",
      "PostgreSQL 파티셔닝, 인덱싱, 작업 로그 구조 개선",
      "RabbitMQ, Redis, Scheduler, Consumer 기반 작업 처리량 확장",
      "Slack 알림과 운영 분석 쿼리로 서비스 이슈 탐지 및 대응 흐름 개선"
    ]
  },
  {
    company: "NAVIS-AMS",
    period: "2019.01 - 2020.06",
    role: "HMI Software Developer",
    lines: [
      "C++ 기반 벤츠 내비게이션 온라인 기능 개발",
      "Live Map, Online Routing, Android prototype porting",
      "cURL, WebSocket, JNI/NDK, SHA-256 기반 데이터 검증",
      "UI와 내비게이션 모듈 간 인터페이스 릴리즈 및 온라인 서비스 연동"
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
