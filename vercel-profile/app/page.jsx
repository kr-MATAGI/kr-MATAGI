"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  DatabaseZap,
  Github,
  Layers3,
  ShieldCheck,
  Workflow
} from "lucide-react";
import { useMemo, useState } from "react";
import { experiences, focusAreas, metrics, projects, repos, researchProjects } from "./data";

const filters = [
  { id: "all", label: "All" },
  { id: "agent", label: "Agent" },
  { id: "pipeline", label: "Pipeline" },
  { id: "automation", label: "Automation" },
  { id: "backend", label: "Backend" },
  { id: "automotive", label: "Automotive" }
];

const stackGroups = [
  ["AI / NLP", ["LangGraph", "Gemini", "BGE-M3", "ELECTRA", "SpanNER"]],
  ["Data / Automation", ["Airflow", "Databricks", "S3", "Playwright", "GSC API"]],
  ["Backend", ["Python", "FastAPI", "RabbitMQ", "Redis", "PostgreSQL"]],
  ["Systems", ["C++", "WebSocket", "cURL", "JNI/NDK", "SHA-256"]]
];

export default function ProfilePage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const activeProject =
    projects.find((project) => project.id === activeProjectId) ?? filteredProjects[0] ?? projects[0];

  function handleFilter(filterId) {
    setActiveFilter(filterId);
    const nextProject =
      filterId === "all" ? projects[0] : projects.find((project) => project.category === filterId);
    if (nextProject) setActiveProjectId(nextProject.id);
  }

  return (
    <>
      <header className="siteHeader">
        <nav className="nav" aria-label="Primary navigation">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#research">Research</a>
          <a href="#repositories">Repositories</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="heroCopy">
            <p className="eyebrow">Choi Jaehoon · AI/Data Engineer</p>
            <h1>데이터에서 서비스까지.</h1>
            <p className="lead">
              Python 백엔드와 데이터 운영을 기반으로 Cafe24에서는 자사몰 진단, GSC 수집,
              멀티에이전트 분석을 만들고 있습니다. 이전에는 HotSeller의 대량 작업 처리 구조와
              NAVIS-AMS의 Mercedes-Benz Live Map·Online Routing을 개발했습니다.
            </p>
            <div className="heroActions">
              <a className="button primary" href="#projects">
                <Layers3 size={18} />
                프로젝트 보기
              </a>
              <a className="button secondary" href="https://github.com/kr-MATAGI">
                <Github size={18} />
                GitHub
              </a>
            </div>
            <div className="metricGrid" aria-label="핵심 성과">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <b>{metric.value}</b>
                  <span>{metric.label}</span>
                  <small>{metric.caption}</small>
                </div>
              ))}
            </div>
          </div>

          <aside className="identityPanel" aria-label="프로필 요약">
            <div className="portraitWrap">
              <Image
                src="/profile.jpg"
                alt="최재훈 증명사진"
                width={900}
                height={1200}
                priority
                className="portrait"
              />
            </div>
            <div className="identityText">
              <p className="name">최재훈</p>
              <p className="role">AI/Data Engineer</p>
            </div>
            <div className="identityFacts">
              <div>
                <span>Experience</span>
                <strong>Cafe24 · HotSeller · NAVIS-AMS</strong>
              </div>
              <div>
                <span>Research</span>
                <strong>부산대학교 AI 석사 · NER / G2P</strong>
              </div>
              <div>
                <span>Award</span>
                <strong>KCC 2023 언어공학 우수논문상</strong>
              </div>
            </div>
            <div className="tagGrid">
              <span>Python</span>
              <span>FastAPI</span>
              <span>Databricks</span>
              <span>LangGraph</span>
              <span>PostgreSQL</span>
            </div>
          </aside>
        </section>

        <section className="section focusSection" aria-labelledby="focus-title">
          <div className="sectionHead">
            <p className="eyebrow">Focus</p>
            <h2 id="focus-title">수집·분석·서비스화를 한 흐름으로</h2>
          </div>
          <div className="focusGrid">
            {focusAreas.map((focus, index) => (
              <article key={focus.title}>
                <span className="index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{focus.title}</h3>
                <p>{focus.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" aria-labelledby="stack-title">
          <div className="sectionHead">
            <p className="eyebrow">Stack</p>
            <h2 id="stack-title">프로젝트에서 사용한 기술</h2>
          </div>
          <div className="stackGrid">
            {stackGroups.map(([group, items]) => (
              <article key={group}>
                <h3>{group}</h3>
                <div>
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section projectsSection" id="projects" aria-labelledby="projects-title">
          <div className="sectionHead">
            <p className="eyebrow">Selected Work</p>
            <h2 id="projects-title">대표 작업</h2>
          </div>

          <div className="filterBar" role="tablist" aria-label="프로젝트 필터">
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className={filter.id === activeFilter ? "active" : ""}
                role="tab"
                aria-selected={filter.id === activeFilter}
                onClick={() => handleFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="projectExplorer">
            <div className="projectList" aria-label="프로젝트 목록">
              {filteredProjects.map((project) => (
                <button
                  type="button"
                  key={project.id}
                  className={project.id === activeProject.id ? "selected projectButton" : "projectButton"}
                  onClick={() => setActiveProjectId(project.id)}
                >
                  <span>{project.category}</span>
                  <strong>{project.title}</strong>
                  <small>{project.short}</small>
                </button>
              ))}
            </div>

            <article className="projectDetail" aria-live="polite">
              <div className="detailTop">
                <p className="eyebrow">{activeProject.category}</p>
                <h3>{activeProject.title}</h3>
              </div>
              {activeProject.image ? (
                <figure className="projectVisual">
                  <Image
                    src={activeProject.image}
                    alt={activeProject.imageAlt}
                    width={1280}
                    height={900}
                    className="projectImage"
                  />
                  <figcaption>{activeProject.imageCaption}</figcaption>
                </figure>
              ) : null}
              <dl>
                <div>
                  <dt>역할</dt>
                  <dd>{activeProject.function}</dd>
                </div>
                <div>
                  <dt>구현</dt>
                  <dd>{activeProject.structure}</dd>
                </div>
                <div>
                  <dt>결과</dt>
                  <dd>{activeProject.usage}</dd>
                </div>
              </dl>
              <div className="chipLine">
                {activeProject.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="section split" id="experience" aria-labelledby="experience-title">
          <div className="sectionHead stickyHead">
            <p className="eyebrow">Experience</p>
            <h2 id="experience-title">경력</h2>
          </div>
          <div className="timeline">
            {experiences.map((experience) => (
              <article key={experience.company}>
                <p className="period">{experience.period}</p>
                <h3>{experience.company}</h3>
                <p className="roleLine">{experience.role}</p>
                <ul>
                  {experience.lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section split" id="repositories" aria-labelledby="repos-title">
          <div className="sectionHead stickyHead">
            <p className="eyebrow">Repositories</p>
            <h2 id="repos-title">대표 공개 저장소</h2>
          </div>
          <div className="repoGrid">
            {repos.map(([name, description, href]) => (
              <a key={name} href={href}>
                <strong>{name}</strong>
                <span>{description}</span>
                <ArrowUpRight size={18} />
              </a>
            ))}
          </div>
        </section>

        <section className="section split" id="research" aria-labelledby="research-title">
          <div className="sectionHead stickyHead">
            <p className="eyebrow">Research</p>
            <h2 id="research-title">대표 연구</h2>
            <p className="sectionIntro">
              한국어 NLP 연구를 통해 텍스트 데이터 구축, 모델 평가, 오류 분석과 도메인 규칙 결합을 다뤘습니다.
            </p>
          </div>
          <div className="researchPanel">
            <div className="researchGrid">
              {researchProjects.map((research) => (
                <article className="researchCard" key={research.id}>
                  <header>
                    <p className="eyebrow">{research.label}</p>
                    <h3>{research.title}</h3>
                    <p className="paperTitle">{research.paper}</p>
                  </header>
                  <p className="researchSummary">{research.summary}</p>
                  <div className="researchStats">
                    {research.stats.map(([value, label]) => (
                      <div key={`${research.id}-${label}`}>
                        <strong>{value}</strong>
                        <span>{label}</span>
                      </div>
                    ))}
                  </div>
                  <ul>
                    {research.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  {research.note ? <p className="researchNote">{research.note}</p> : null}
                  <a href={research.href}>
                    논문 보기
                    <ArrowUpRight size={17} />
                  </a>
                </article>
              ))}
            </div>
            <div className="credentialGrid">
              <article>
                <ShieldCheck size={22} />
                <strong>ADsP</strong>
                <span>데이터분석준전문가</span>
              </article>
              <article>
                <DatabaseZap size={22} />
                <strong>정보처리기사</strong>
                <span>소프트웨어 개발 기본 역량</span>
              </article>
              <article>
                <Workflow size={22} />
                <strong>리눅스마스터 2급</strong>
                <span>운영 환경 이해</span>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>최재훈 · AI/Data Engineer · Data Pipeline · Agent · Backend</p>
        <a href="#top">Back to top</a>
      </footer>
    </>
  );
}
