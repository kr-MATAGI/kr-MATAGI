"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  DatabaseZap,
  FileText,
  Github,
  Layers3,
  ShieldCheck,
  Workflow
} from "lucide-react";
import { useMemo, useState } from "react";
import { experiences, focusAreas, metrics, projects, publications, repos } from "./data";

const filters = [
  { id: "all", label: "All" },
  { id: "agent", label: "Agent" },
  { id: "pipeline", label: "Pipeline" },
  { id: "automation", label: "Automation" },
  { id: "report", label: "Report" },
  { id: "analytics", label: "Analytics" }
];

const stackGroups = [
  ["AI / Agent", ["LangGraph", "LangChain", "OpenAI API", "Gemini", "Pydantic"]],
  ["Backend", ["Python", "FastAPI", "Next.js", "TypeScript", "SSE"]],
  ["Data", ["Airflow", "Databricks", "S3", "PostgreSQL", "MySQL", "ClickHouse"]],
  ["Automation", ["Playwright", "Selenium", "n8n", "GSC API", "Slack API"]]
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
        <a className="brand" href="#top" aria-label="최재훈 프로필 홈">
          <span className="brandMark">M</span>
          <span>Matagi</span>
        </a>
        <nav className="nav" aria-label="Primary navigation">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#repositories">Repositories</a>
          <a href="#research">Research</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="heroCopy">
            <p className="eyebrow">AI/Data Engineer · Agent Workflow Builder</p>
            <h1>
              <span>대규모 데이터를</span>{" "}
              <span>서비스로 연결하는</span>{" "}
              <span>AI Agent 시스템을</span>{" "}
              <span>설계합니다.</span>
            </h1>
            <p className="lead">
              <span>현재 Cafe24에서 </span>
              <span>Databricks, Airflow, LangGraph, </span>
              <span>FastAPI, Next.js를 연결해 </span>
              <span>데이터 수집부터 분석, 리포팅, </span>
              <span>서비스 백엔드까지 이어지는 자동화 시스템을 구축합니다.</span>
              <span>통신, 제조, 플랫폼, </span>
              <span>엔터프라이즈 IT처럼 </span>
              <span>운영 복잡도가 큰 환경에도 </span>
              <span>확장 가능한 구조를 지향합니다.</span>
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
            <div className="tagGrid">
              <span>LLM Agent</span>
              <span>Databricks</span>
              <span>Airflow</span>
              <span>FastAPI</span>
              <span>Next.js</span>
              <span>ADsP</span>
            </div>
          </aside>
        </section>

        <section className="section focusSection" aria-labelledby="focus-title">
          <div className="sectionHead">
            <p className="eyebrow">Focus</p>
            <h2 id="focus-title">현재 강점으로 밀고 갈 영역</h2>
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
            <h2 id="stack-title">실제로 연결해 쓰는 기술</h2>
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
            <h2 id="projects-title">프로젝트를 기능과 구조로 보기</h2>
          </div>

          <div className="filterBar" role="tablist" aria-label="프로젝트 필터">
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className={filter.id === activeFilter ? "active" : ""}
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
              <dl>
                <div>
                  <dt>Function</dt>
                  <dd>{activeProject.function}</dd>
                </div>
                <div>
                  <dt>Structure</dt>
                  <dd>{activeProject.structure}</dd>
                </div>
                <div>
                  <dt>Use Case</dt>
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
            <h2 id="research-title">연구와 자격</h2>
          </div>
          <div className="researchPanel">
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
            <div className="publicationList">
              {publications.map(([title, meta, href]) => (
                <a key={title} href={href}>
                  <FileText size={18} />
                  <span>
                    <strong>{title}</strong>
                    <small>{meta}</small>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>최재훈 · AI/Data Engineer · Seoul</p>
        <a href="#top">Back to top</a>
      </footer>
    </>
  );
}
