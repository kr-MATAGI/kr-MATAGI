<div align="center">
  <h1>Matagi | AI & Data Engineer</h1>
  <strong>AI/Data Engineer · Backend Engineer · Agent Workflow Builder</strong>
  <br />
  LLM Agent, Databricks, Data Pipeline, E-commerce Automation
</div>

<br />

## About

**Role**  
AI/Data Engineer

**Domain**  
E-commerce automation, data pipeline, AI agent workflow

**Main Work**  
Databricks 기반 데이터 파이프라인과 LangGraph 멀티에이전트 LLM 시스템 구축

**Current Scope**  
데이터 수집 → 분석 → 리포팅 → 서비스 백엔드까지 연결하는 자동화 시스템 설계

**Recent Impact**  
약 1.3만 자사몰 UI 품질 진단  
현재까지 약 3만 개 Cafe24 PRO 몰 전체 GSC 등록 자동화  
5.5만 행 VoC 분석 및 개인화 FAQ/코칭 Agent 구조 설계  
GEO 측정 및 SEO 데이터 정합성 개선

**Core Stack**  
Python, FastAPI, Next.js, Airflow, Databricks, PostgreSQL, MySQL, ClickHouse, Playwright, LangGraph, Gemini/OpenAI API

**Engineering Focus**  
OAuth/JWT, PostgreSQL RLS, HMAC, prompt-injection defense, cache-first serving, structured output validation

**Background**  
Python backend, C++ navigation software, Korean NLP/NER/G2P research

## Current Focus

- LLM Agent를 활용한 이커머스 운영 자동화 및 분석 워크플로우
- Databricks, Airflow, Delta Lake 기반 데이터 파이프라인
- FastAPI/Next.js 기반 멀티테넌트 서비스 백엔드
- SEO/GEO, VoC, storefront quality diagnostics, report automation
- Structured output, self-correction, tool routing, prompt-injection defense
- SHAP/Causal SHAP, Sales Shapley, text data quality, model evaluation

## Tech Stack

### AI / Agent

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white)
![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=flat-square&logo=tensorflow&logoColor=white)
![Hugging Face](https://img.shields.io/badge/Hugging%20Face-FFD21E?style=flat-square&logo=huggingface&logoColor=black)
![LangChain](https://img.shields.io/badge/LangChain-1C3C3C?style=flat-square&logo=langchain&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=flat-square&logo=openai&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Gemini-8E75B2?style=flat-square&logo=googlegemini&logoColor=white)
![Ollama](https://img.shields.io/badge/Ollama-000000?style=flat-square&logo=ollama&logoColor=white)

### Backend / Data

![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white)
![RabbitMQ](https://img.shields.io/badge/RabbitMQ-FF6600?style=flat-square&logo=rabbitmq&logoColor=white)
![Kafka](https://img.shields.io/badge/Kafka-231F20?style=flat-square&logo=apachekafka&logoColor=white)
![ClickHouse](https://img.shields.io/badge/ClickHouse-FFCC01?style=flat-square&logo=clickhouse&logoColor=black)
![Airflow](https://img.shields.io/badge/Airflow-017CEE?style=flat-square&logo=apacheairflow&logoColor=white)
![Databricks](https://img.shields.io/badge/Databricks-FF3621?style=flat-square&logo=databricks&logoColor=white)
![Apache Spark](https://img.shields.io/badge/Spark-FDEE21?style=flat-square&logo=apachespark&logoColor=black)
![n8n](https://img.shields.io/badge/n8n-EA4B71?style=flat-square&logo=n8n&logoColor=white)

### Engineering

![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazonaws&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black)
![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=flat-square&logo=playwright&logoColor=white)
![C++](https://img.shields.io/badge/C%2B%2B-00599C?style=flat-square&logo=cplusplus&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)

## Certifications

- ADsP (Advanced Data Analytics Semi-Professional) · 2026.03
- Engineer Information Processing
- Linux Master Level 2

## Selected Projects

### Professional Work Highlights

**Databricks LangGraph Multi-Agent Analytics System**

- **Function**: 자연어 질의를 데이터 분석 요청으로 변환
- **Routing**: Databricks Genie, Vector Search, Dynamic SQL Worker로 질의 유형별 라우팅
- **Structure**: Supervisor / Router / Worker / Sub-Supervisor 4-layer LangGraph
- **Reliability**: structured output, route-loop 방지, self-correction 루프
- **Use Case**: 비개발자가 자연어로 쇼핑몰 지표, 퍼널, SEO 데이터를 질의하고 분석 결과를 받을 수 있는 구조

**E-commerce Weekly Report Automation**

- **Function**: 쇼핑몰 주간 성과 리포트 자동 생성
- **Data**: 방문자, 매출, 퍼널, SEO, 상품, 검색 지표
- **Structure**: Databricks SQL → LLM reasoning → Plotly chart → HTML/PDF report
- **Analysis**: 문제-원인-데이터-액션 구조, Sales Shapley 기반 매출 기여도 분석
- **Use Case**: 운영자가 매출 변화 원인과 다음 액션을 빠르게 파악할 수 있는 보고서 자동화

**Large-scale Storefront UI Diagnostics**

- **Function**: 약 1.3만 개 활성 자사몰 UI 품질 자동 진단
- **Checks**: SSL, 오탈자, 깨진 이미지/링크, JavaScript 오류, 화이트스크린, 구매 퍼널 장애
- **Structure**: Playwright 단일 로드에서 여러 검사를 통합 실행
- **Automation**: 사이트별 셀렉터 사전 없이 Cafe24 표준 패턴으로 구매 흐름 재현
- **Use Case**: 운영자가 대규모 쇼핑몰 품질 이슈를 주기적으로 탐지하고 조치할 수 있는 진단 플랫폼

**GSC/SEO Automation, Daily Collection, and Reporting Pipeline**

- **Registration**: Cafe24 PRO 몰 Google Search Console 등록 자동화
- **Scope**: 현재까지 약 3만 개 Cafe24 PRO 몰 전체 등록 처리
- **Automation**: 소유권 검증, 사이트맵 제출, 색인 요청 자동화
- **Daily Collection**: Airflow DAG로 GSC API에서 약 3만 개 몰의 검색 성과 데이터를 매일 수집
- **Data Pipeline**: GSC API → Airflow → S3 → Databricks 적재 및 정합성 검증
- **Reporting**: 클릭, 노출, 검색어, 페이지, 디바이스 지표를 활용한 SEO 리포트 제작
- **Quality**: 중복 적재 제거, 클릭/노출 집계 오차를 +50%대에서 한 자릿수 수준으로 안정화

**VoC Analysis and Personalized FAQ/Coaching Agent**

- **Function**: 고객 상담 데이터 기반 VoC 분석 및 개인화 FAQ/코칭 Agent 설계
- **Data**: 약 5.5만 행 규모의 고객 상담/문의 데이터
- **Analysis**: LLM extraction, embedding, UMAP, clustering
- **Service**: FastAPI/SSE 기반 실시간 응답 구조
- **Security**: PostgreSQL/Redis, RLS/HMAC 기반 멀티테넌트 보안
- **Use Case**: 셀러가 상담 이슈와 비즈니스 지표를 바탕으로 맞춤형 코칭을 받을 수 있는 구조

**AI Commerce Analytics Cockpit**

- **Function**: 쇼핑몰 성과 요인을 해석하는 AI 커머스 분석 대시보드
- **Backend**: FastAPI 기반 API와 Lakebase → PostgreSQL 동기화
- **Frontend**: Next.js BFF 기반 데이터 조회 및 시각화
- **Analysis**: SHAP/Causal SHAP, clustering, Sales Shapley
- **Security**: OAuth/JWT/RLS 접근 제어
- **Operations**: cache-first serving, SonarQube 기반 정적분석 개선

**GEO Measurement Pipeline**

- **Function**: 생성형 AI 검색 환경에서 브랜드 노출도 측정
- **Metric**: ChatGPT/Gemini 답변 내 추천·인용률을 Hit Score로 평가
- **Pipeline**: 브랜드 선정 → 질의 생성 → AI 응답 수집 → 노출 평가
- **Optimization**: 층화 샘플링과 캐싱으로 API 비용 약 70% 절감 전략 수립
- **Use Case**: 기존 SEO로 측정하기 어려운 AI 검색 노출도를 정량화

### Research / Data Repositories

**[KT G2P Prototype](https://github.com/kr-MATAGI/KT-G2P-Prototype)**

- **Purpose**: 한국어 TTS 전처리를 위한 G2P 시스템
- **Model**: KoCharELECTRA 기반 Encoder-Decoder
- **Methods**: autoregressive/non-autoregressive decoding, 자소 제한 후처리
- **Evaluation**: WER/PER 기반 발음열 변환 평가

**[NER Model](https://github.com/kr-MATAGI/NER-Model)**

- **Purpose**: 국립국어원 개체명 분석 말뭉치 기반 한국어 NER
- **Model**: BERT/ELECTRA + LSTM/CRF
- **Feature**: 형태소 분석 자질 결합
- **Evaluation**: Entity F1 중심 성능 비교

**[NER Research Projects](https://github.com/kr-MATAGI/NER-kr)**

- **Purpose**: 한국어 SpanNER 기반 개체명 인식
- **Data**: KLUE, 국립국어원 말뭉치
- **Processing**: 데이터 전처리, 형태소 분석 자질 구성
- **Evaluation**: Entity F1, Character F1

**[De-identification NER Datasets](https://github.com/kr-MATAGI/De-identification-NER-Datasets)**

- **Purpose**: 개인정보 비식별화를 위한 한국어 NER 데이터셋 생성
- **Data Source**: 위키 문서 기반 문장 추출
- **Processing**: 개체명 태그 재정의, 규칙 기반 후처리
- **Model Input**: ELECTRA-CRF 학습 입력 생성

**[KorLex API](https://github.com/kr-MATAGI/KorLex-API)**

- **Purpose**: 한국어 어휘의미망 KorLex 1.5 API화
- **Data**: 신셋, 어휘 관계, 품사별 의미 정보
- **Use Case**: 한국어 단어 의미와 관계 정보를 프로그램에서 조회

**[Table Parser](https://github.com/kr-MATAGI/Table-Parser)**

- **Purpose**: 나무위키 테이블과 정보상자 데이터 파싱
- **Processing**: 표 구조 추출, 정보상자 파싱, 데이터 전처리
- **Use Case**: 한국어 테이블 언어모델 및 TAPAS 데이터셋 구성

### Learning / Experiments

**[PySpark Practice](https://github.com/kr-MATAGI/PySpark-Pratice)**

- **Focus**: Spark 아키텍처와 분산 데이터 처리 원리
- **Topics**: DataFrame/SQL, Catalyst Optimizer, Shuffle, Broadcast Join, Spark UI
- **Goal**: Databricks/PySpark 기반 데이터 엔지니어링 이해 확장

**[Chzzk AI Agent](https://github.com/kr-MATAGI/chzzk-ai-manager)**

- **Type**: Toy project
- **Focus**: LangGraph 기반 스트리밍 채팅 분석 Agent
- **Features**: PostgreSQL 적재, 최근 채팅 요약, 유저 성향 분석, 외부 컨텍스트 검색

**[Kafka - n8n - ClickHouse Automation](https://github.com/kr-MATAGI/clickhouse-kafka-test)**

- **Type**: Automation experiment
- **Focus**: Kafka, n8n, ClickHouse 연결
- **Features**: Gmail 수집, ChatGPT 요약, Slack/DB/API 액션 연결

**[MCP Practice](https://github.com/kr-MATAGI/MCP-Practice)**

- **Type**: Protocol study
- **Focus**: Model Context Protocol
- **Topics**: client-server 구조, tools/resources/prompts, transport layer

## Work Experience

**Cafe24** · FGS Team  
2025.08 ~ Present

- **Role**: AI/Data Engineer
- **Build**: Databricks 데이터 파이프라인, LangGraph AI Agent, FastAPI/Next.js 서비스 백엔드
- **Automation**: 리포트 자동화, UI 품질 진단, GSC/SEO 자동화, VoC 분석, GEO 측정
- **Security**: OAuth/JWT, PostgreSQL RLS, HMAC, prompt-injection defense
- **Ops**: Playwright, Selenium, n8n, Airflow 기반 자동화와 데이터 정합성 검증

**HotSeller** · Core Backend Developer  
2023.07 ~ 2024.10

- **Role**: Python backend developer
- **Build**: SNS 마케팅 솔루션 개발 및 운영
- **Data**: PostgreSQL 파티셔닝, 인덱싱, 컬럼 분할, 작업 로그 구조 개선
- **Queue**: RabbitMQ, Redis, Scheduler, Consumer 기반 작업 처리 구조 개선
- **Scale**: 월 5천만 건 수준의 작업 처리량을 3억 건 이상까지 확장

**NAVIS-AMS** · HMI Software Developer  
2019.01 ~ 2020.06

- **Role**: C++ navigation software developer
- **Build**: 벤츠 내비게이션 온라인 기능 개발
- **Features**: Live Map, Online Routing, Android prototype porting
- **Engineering**: cURL, WebSocket, JNI/NDK, SHA-256 기반 데이터 검증

## Publications

- [지식 베이스를 활용한 심층학습 기반의 한국어 발음 변환](https://www.dbpia.co.kr/journal/detail?nodeId=T16857208) · Master's Thesis, 2023
- [음운 지식베이스를 활용한 딥러닝 기반 한국어 발음열 변환](https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11488011) · KCC 2023, Best Paper Award
- [심층 학습 분류 문제로 접근한 문맥 기반 한국어 숫자 발음열 변환](https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11488045) · KCC 2023
- [개체명 인식에서 품사 표현의 방법과 입력 위치의 영향 분석](https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11498488) · KIICE 2023
- [개인정보 비식별화를 위한 개체명 유형 재정의와 학습데이터 생성 방법](https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11077874) · KIICE 2022

## Education

- **Pusan National University** · M.S. in Information Convergence Engineering, AI Major (2021.09 ~ 2023.08)
- **Dong-A University** · B.S. in Computer Engineering (2013.03 ~ 2019.02)

## GitHub Highlights

<div align="center">
  <a href="https://github.com/kr-MATAGI">
    <img src="https://img.shields.io/github/followers/kr-MATAGI?style=flat-square&logo=github" />
  </a>
  <a href="https://github.com/kr-MATAGI?tab=repositories">
    <img src="https://img.shields.io/badge/Public%20Repos-33-181717?style=flat-square&logo=github" />
  </a>
  <a href="https://github.com/kr-MATAGI/NER-Model">
    <img src="https://img.shields.io/github/stars/kr-MATAGI/NER-Model?style=flat-square&logo=github&label=NER--Model" />
  </a>
</div>

<br />

- Main profile: [github.com/kr-MATAGI](https://github.com/kr-MATAGI)
- Research repositories: [KT-G2P-Prototype](https://github.com/kr-MATAGI/KT-G2P-Prototype), [NER-Model](https://github.com/kr-MATAGI/NER-Model), [NER-kr](https://github.com/kr-MATAGI/NER-kr)
- Data/NLP utilities: [De-identification-NER-Datasets](https://github.com/kr-MATAGI/De-identification-NER-Datasets), [KorLex-API](https://github.com/kr-MATAGI/KorLex-API), [Table-Parser](https://github.com/kr-MATAGI/Table-Parser)

<div align="center">
  <br />
  <strong>Building practical AI workflows from data pipelines to production services.</strong>
</div>
