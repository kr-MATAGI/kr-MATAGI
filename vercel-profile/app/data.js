export const metrics = [
  {
    label: "Cafe24 · Mall QA",
    value: "2.8만",
    caption: "활성 자사몰 UI 품질과 구매 흐름 자동 진단"
  },
  {
    label: "HotSeller · Backend",
    value: "3억+",
    caption: "월간 SNS 작업 처리 가능 규모로 확장"
  },
  {
    label: "NAVIS-AMS",
    value: "Live Map",
    caption: "Mercedes-Benz Online Routing · HMI 연동"
  },
  {
    label: "Korean NLP Research",
    value: "KCC 2023",
    caption: "언어공학 분야 우수논문상"
  }
];

export const focusAreas = [
  {
    title: "Collect",
    body: "Airflow, S3, Databricks로 운영 데이터를 수집하고 적재 단계에서 정합성을 확인합니다."
  },
  {
    title: "Analyze",
    body: "LangGraph가 질의를 분해하고 지표 분석, 문서 검색, SQL 실행을 전문 Agent로 연결합니다."
  },
  {
    title: "Deliver",
    body: "FastAPI와 SSE로 분석 결과를 API, 리포트, 대시보드와 실제 운영 흐름에 제공합니다."
  }
];

export const projects = [
  {
    id: "agent-bricks",
    category: "agent",
    title: "멀티에이전트 분석 시스템",
    short: "복합 질의를 지표 분석·문서 검색·SQL 실행으로 나누고 작업별 전문 Agent에 전달합니다.",
    function: "자연어로 운영 지표와 문서를 조회하고 필요한 SQL까지 실행하는 분석 인터페이스",
    structure: "Supervisor → Router → 지표·문서·SQL Agent → 결과 검증",
    usage: "각 Agent의 결과가 정해진 형식과 기준을 충족하는지 확인하고, 불완전하면 다시 실행합니다.",
    stack: ["LangGraph", "Databricks Genie", "Vector Search", "SQL Warehouse", "Pydantic"]
  },
  {
    id: "gsc-seo",
    category: "pipeline",
    title: "GSC 등록·수집 자동화",
    short: "약 3만 Cafe24 PRO 몰의 GSC 계정 연결, 소유권 확인, 사이트맵 제출과 일일 수집을 자동화합니다.",
    function: "자사몰과 GSC 계정을 연결하고 등록부터 SEO 데이터 수집까지 추적하는 운영 파이프라인",
    structure: "계정 연결 → 소유권 확인 → 사이트맵 제출 → 색인 상태 확인 → Airflow 일일 수집",
    usage: "date·query·page·device를 수집 기준으로 clicks·impressions·CTR·average position을 적재하고 오류를 재처리합니다.",
    stack: ["Airflow", "GSC API", "S3", "Databricks", "Selenium"]
  },
  {
    id: "ui-tester",
    category: "automation",
    title: "자사몰 UI 자동 진단",
    short: "약 2.8만 활성 자사몰의 네트워크, 리소스, JavaScript, 오탈자와 구매 퍼널을 자동 점검합니다.",
    function: "대규모 사이트의 UI 품질과 구매 흐름 이상을 정기적으로 탐지하는 진단 플랫폼",
    structure: "4종 Scheduler의 다수 Worker가 몰 단위 작업을 병렬 처리하고, 수집 결과를 UI 검사 6종에 공유",
    usage: "네트워크 비용 83%, 검사 소요 시간 60%를 절감하고 오류 유형과 진행 상태를 운영 대시보드로 제공합니다.",
    stack: ["Python", "Playwright", "FastAPI", "MySQL", "asyncio"],
    image: "/ui-diagnostics-dashboard.jpg",
    imageAlt: "자사몰 UI 자동 진단 운영 대시보드",
    imageCaption: "실제 UI Tester 운영 대시보드 일부"
  },
  {
    id: "voc-agent",
    category: "agent",
    title: "VoC 분석과 코칭 Agent",
    short: "5.5만 행 상담 데이터를 구조화하고 불만 원인과 반복 문의를 코칭 Agent로 연결합니다.",
    function: "고객 상담 이슈를 데이터 근거와 함께 분류하고 FAQ와 개인화 코칭 응답을 생성하는 서비스",
    structure: "LLM 추출 → BGE-M3 임베딩 → UMAP·HDBSCAN 클러스터링 → FastAPI·SSE 응답",
    usage: "클러스터별 주요 불만, 요청, 감정과 대표 문장을 검색하고 분석 결과를 API로 제공합니다.",
    stack: ["FastAPI", "SSE", "BGE-M3", "UMAP", "HDBSCAN", "PostgreSQL"],
    image: "/voc-clustering-dashboard.jpg",
    imageAlt: "VoC 클러스터링 분석 대시보드",
    imageCaption: "실제 VoC 클러스터링 분석 화면"
  },
  {
    id: "hotseller-job-pipeline",
    category: "backend",
    title: "HotSeller 작업 처리 구조 확장",
    short: "Scheduler, RabbitMQ, Redis와 Consumer로 SNS 마케팅 작업을 분산 처리했습니다.",
    function: "서비스와 마켓별 계정 작업을 안정적으로 분배하고 운영 상태를 추적하는 백엔드 파이프라인",
    structure: "Scheduler → RabbitMQ Queue → Redis Dispatcher → Consumer → PostgreSQL",
    usage: "월 5천만 건 수준에서 3억 건 이상 처리 가능한 구조로 확장하고 작업 로그 저장 용량을 약 3배 절감했습니다.",
    stack: ["Python", "RabbitMQ", "Redis", "PostgreSQL", "AWS EC2", "Slack"]
  },
  {
    id: "navis-navigation",
    category: "automotive",
    title: "Mercedes-Benz Live Map · Online Routing",
    short: "지도 타일 갱신과 온라인 경로 탐색을 내비게이션 코어와 HMI에 연결했습니다.",
    function: "차량 내비게이션에서 온라인 지도와 경로 정보를 안전하게 갱신하는 기능",
    structure: "cURL 병렬 다운로드 → SHA-256 무결성 검증 → 실패 타일 재시도 · WebSocket 경로 갱신",
    usage: "Live Map 데이터 신뢰성을 확보하고 Online Routing, UI 인터페이스, Android JNI/NDK 포팅을 구현했습니다.",
    stack: ["C++", "cURL", "WebSocket", "SQLite", "SHA-256", "JNI/NDK"]
  }
];

export const experiences = [
  {
    company: "Cafe24",
    period: "2025.08 - Present",
    role: "AI/Data Engineer",
    lines: [
      "Databricks 데이터 파이프라인과 LangGraph 멀티에이전트 분석 시스템 설계",
      "약 3만 Cafe24 PRO 몰의 GSC 등록·수집·SEO 리포팅 자동화",
      "약 2.8만 활성 자사몰 UI 품질 진단과 5.5만 행 VoC 분석 서비스 구축",
      "FastAPI 기반 분석 API, SSE 응답과 운영 대시보드 개발"
    ]
  },
  {
    company: "HotSeller",
    period: "2023.07 - 2024.10",
    role: "Core Backend Developer",
    lines: [
      "Python 기반 SNS 마케팅 솔루션 개발과 운영",
      "Scheduler·RabbitMQ·Redis·Consumer 작업 처리 구조 개선",
      "월 5천만 건 수준에서 3억 건 이상 처리 가능한 구조로 확장",
      "PostgreSQL 파티셔닝·인덱싱·로그 구조 개선과 운영 알림 정비"
    ]
  },
  {
    company: "NAVIS-AMS",
    period: "2019.01 - 2020.06",
    role: "HMI Software Developer",
    lines: [
      "C++ 기반 Mercedes-Benz 내비게이션 온라인 기능 개발",
      "Live Map 지도 타일 갱신, 무결성 검증과 실패 복구 구현",
      "WebSocket 기반 Online Routing과 UI–내비게이션 인터페이스 연동",
      "Android JNI/NDK 포팅과 HMI 위젯 개발"
    ]
  }
];

export const repos = [
  ["KT-G2P-Prototype", "한국어 TTS 전처리를 위한 G2P 시스템", "https://github.com/kr-MATAGI/KT-G2P-Prototype"],
  ["NER-Model", "ELECTRA·BiLSTM·CRF 기반 한국어 NER 실험", "https://github.com/kr-MATAGI/NER-Model"],
  ["NER-kr", "SpanNER와 품사 자질을 비교한 한국어 NER 연구", "https://github.com/kr-MATAGI/NER-kr"],
  [
    "De-identification-NER-Datasets",
    "개인정보 비식별화를 위한 한국어 NER 데이터 생성",
    "https://github.com/kr-MATAGI/De-identification-NER-Datasets"
  ]
];

export const researchProjects = [
  {
    id: "g2p-kcc",
    label: "G2P · KCC 2023",
    title: "음운 지식베이스 결합",
    paper: "음운 지식베이스를 활용한 딥러닝 기반 한국어 발음열 변환",
    summary: "음절 ELECTRA와 BiLSTM–LSTM 모델의 출력에 표준 발음 어휘와 발음열 변환 테이블을 결합했습니다.",
    stats: [
      ["90.02%", "최종 문장 정확도"],
      ["+3.53%p", "기준 모델 대비"]
    ],
    points: [
      "표준 발음 규칙으로 출력 어휘 3,198개 구성",
      "입력 음절에서 변환할 수 없는 발음 후보의 디코더 점수를 0으로 제한",
      "86.49% → 86.94% → 89.42% → 90.02%로 단계별 향상"
    ],
    note: "KCC 2023 언어공학 분야 우수논문상",
    href: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11488011"
  },
  {
    id: "g2p-thesis",
    label: "G2P · Master's Thesis",
    title: "정확도와 추론 속도 비교",
    paper: "지식 베이스를 활용한 심층학습 기반의 한국어 발음 변환",
    summary: "자기 회귀·비자기 회귀 디코더와 음절 제약·기분석 사전의 결합 효과를 비교했습니다.",
    stats: [
      ["95.16%", "AR 기준 모델"],
      ["85.72%", "NAR 기준 모델"],
      ["235,939", "사전 표제어–발음열 쌍"]
    ],
    points: [
      "음절 제약: AR 95.41% · NAR 86.93%, 정확도 상승과 함께 추론 시간 증가",
      "기분석 사전: AR 95.22% · NAR 86.03%, 기준 모델과 비슷한 속도 유지",
      "실시간 적용에는 기분석 사전 단독 결합이 더 적합"
    ],
    href: "https://www.dbpia.co.kr/journal/detail?nodeId=T16857208"
  },
  {
    id: "deidentification-ner",
    label: "NER · Dataset",
    title: "비식별화 NER 데이터 구축",
    paper: "개인정보 비식별화를 위한 개체명 유형 재정의와 학습데이터 생성 방법",
    summary: "개인정보 비식별화 대상 12개 유형을 정의하고 한국어 위키피디아에서 3,000문장을 반자동 생성했습니다.",
    stats: [
      ["12개", "개체명 유형"],
      ["3,000", "전체 문장"],
      ["0.88575", "RoBERTa 평균 F1"]
    ],
    points: [
      "훈련 2,140 · 검증 260 · 테스트 600문장으로 분리",
      "혈액형·병명·전공·학력·종교·가족 관계를 규칙으로 보완",
      "BERT 0.88414 · RoBERTa 0.88575 · KoELECTRA 0.87796"
    ],
    href: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11077874"
  },
  {
    id: "ner-pos-feature",
    label: "NER · POS Feature",
    title: "품사 자질 결합 위치 비교",
    paper: "개체명 인식에서 품사 표현의 방법과 입력 위치의 영향 분석",
    summary: "토큰화, 품사 표현 방법과 입력 위치를 바꾸며 ELECTRA–BiLSTM–CRF와 SpanNER를 비교했습니다.",
    stats: [
      ["150,082", "국립국어원 문어 문장"],
      ["3종", "토큰화 방식"],
      ["2개", "NER 구조"]
    ],
    points: [
      "WordPiece 토큰화가 가장 높은 성능",
      "ELECTRA–BiLSTM–CRF에서는 Bit Flag를 BiLSTM 계층에 입력한 구성이 가장 효과적",
      "SpanNER에서는 Bit Flag 적용 차이가 작음: 91.359 → 91.392"
    ],
    href: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11498488"
  }
];
