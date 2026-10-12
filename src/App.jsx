import { useEffect, useRef, useState } from 'react';
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Container,
  GitFork,
  Menu,
  Terminal,
  X,
} from 'lucide-react';
import { copy, links, projects, skillGroups } from './data.js';
import ProjectArt from './components/ProjectArt.jsx';
import ProjectDialog from './components/ProjectDialog.jsx';

const sections = ['projects', 'about', 'skills'];
const skillIcons = {
  container: Container,
  diagram: GitFork,
  terminal: Terminal,
};

function savedLanguage() {
  try {
    return localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'fr';
  } catch {
    return 'fr';
  }
}

function projectFromHash() {
  const id = window.location.hash.match(/^#project\/([a-z]+)$/)?.[1];
  return projects.find((project) => project.id === id) || null;
}

function SectionLabel({ number, children, dark = false }) {
  return (
    <div className={`section-label${dark ? ' label-dark' : ''}`}>
      <span className="section-number">{number}</span>
      <span className="eyebrow">{children}</span>
    </div>
  );
}

function ProjectLink({ project, language, text, onOpen, featured }) {
  return (
    <a
      className={featured ? 'project-card' : 'project-row'}
      href={`#project/${project.id}`}
      aria-label={`${text.viewProject} : ${project.title[language]}`}
      onClick={(event) => {
        event.preventDefault();
        event.currentTarget.focus({ preventScroll: true });
        onOpen(project.id);
      }}
    >
      <ProjectArt project={project} text={text} compact={!featured} />
      <div className="project-info">
        <div className="project-meta">
          <span className="eyebrow">{project.type[language]}</span>
          <span className="project-index">{project.number}</span>
        </div>
        <div className="project-name">
          <h3>{project.title[language]}</h3>
          <span className="project-arrow">
            <ArrowUpRight size={23} />
          </span>
        </div>
        <p>{project.summary[language]}</p>
        <div className="tags">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function App() {
  const [language, setLanguage] = useState(savedLanguage);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [filter, setFilter] = useState('all');
  const [activeProject, setActiveProject] = useState(projectFromHash);
  const menuButtonRef = useRef(null);
  const text = copy[language];
  const selectedProjects = projects.filter(
    (project) => filter === 'all' || project.category === filter,
  );
  const featuredProjects = selectedProjects.filter((project) =>
    ['robosoccer', 'carbon'].includes(project.id),
  );
  const otherProjects = selectedProjects.filter(
    (project) => !['robosoccer', 'carbon'].includes(project.id),
  );

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = text.title;
    document.querySelector('meta[name="description"]').content =
      language === 'fr'
        ? 'Louis Copmartin, développeur logiciel. Projets en développement web, visualisation de données, intelligence artificielle et cryptographie.'
        : 'Louis Copmartin, software developer. Projects in web development, data visualization, artificial intelligence, and cryptography.';
    try {
      localStorage.setItem('portfolio-language', language);
    } catch {
      return;
    }
  }, [language, text.title]);

  useEffect(() => {
    const onLocationChange = () => setActiveProject(projectFromHash());
    window.addEventListener('hashchange', onLocationChange);
    window.addEventListener('popstate', onLocationChange);
    return () => {
      window.removeEventListener('hashchange', onLocationChange);
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length) setActiveSection(visible[0].target.id);
      },
      { rootMargin: '-15% 0px -55% 0px', threshold: [0, 0.1, 0.5] },
    );
    sections.forEach((id) => observer.observe(document.getElementById(id)));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const onClick = (event) => {
      const insideHeader = event
        .composedPath()
        .some(
          (element) =>
            element instanceof Element &&
            element.classList.contains('site-header'),
        );
      if (!insideHeader) setMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 760) setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('click', onClick);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('click', onClick);
      window.removeEventListener('resize', onResize);
    };
  }, [menuOpen]);

  function openProject(id) {
    history.pushState({ portfolioProject: true }, '', `#project/${id}`);
    setActiveProject(projects.find((project) => project.id === id));
  }

  function closeProject() {
    if (history.state?.portfolioProject) history.back();
    else {
      history.replaceState(null, '', '#projects');
      setActiveProject(null);
      document.getElementById('projects').scrollIntoView();
    }
  }

  function navigateProject(id) {
    history.replaceState(history.state, '', `#project/${id}`);
    setActiveProject(projects.find((project) => project.id === id));
  }

  return (
    <>
      <a className="skip-link" href="#main">
        {text.skip}
      </a>
      <header className="site-header">
        <div className="header-inner container">
          <a
            className="wordmark"
            href="#top"
            onClick={() => setMenuOpen(false)}
            aria-label="Louis Copmartin"
          >
            <span className="brand-symbol">
              lc<span>.</span>
            </span>
            <span className="brand-name">Louis Copmartin</span>
          </a>
          <nav
            id="main-navigation"
            className={`main-navigation${menuOpen ? ' nav-open' : ''}`}
            aria-label={
              language === 'fr' ? 'Navigation principale' : 'Main navigation'
            }
          >
            {sections.map((id, index) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={activeSection === id ? 'location' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {text.nav[index]}
                <span className="mobile-nav-number">0{index + 1}</span>
              </a>
            ))}
            <a
              className="nav-github"
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <ArrowUpRight size={15} />
            </a>
          </nav>
          <div className="header-actions">
            <button
              className="language-switch"
              type="button"
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              aria-label={text.language}
            >
              {language === 'fr' ? 'EN' : 'FR'}
            </button>
            <button
              ref={menuButtonRef}
              type="button"
              className="menu-toggle icon-button"
              aria-expanded={menuOpen}
              aria-controls="main-navigation"
              aria-label={menuOpen ? text.closeMenu : text.openMenu}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </header>

      <main id="main">
        <section
          className="hero container"
          id="top"
          aria-labelledby="hero-title"
        >
          <div className="hero-overline">
            <span className="eyebrow">
              <i className="status-dot" />
              {text.role}
            </span>
            <span className="eyebrow hero-portfolio">{text.portfolio}</span>
          </div>
          <div className="hero-body">
            <div className="hero-name">
              <h1 id="hero-title">
                Louis
                <br />
                <span>
                  Copmartin<span className="name-period">.</span>
                </span>
              </h1>
            </div>
            <div className="hero-description">
              <span className="hero-line" />
              <p>{text.hero}</p>
              <a className="text-link" href="#projects">
                {text.explore}
                <ArrowDown size={19} />
              </a>
            </div>
          </div>
          <div className="hero-bottom">
            <span className="eyebrow">{text.fields}</span>
            <a className="scroll-cue" href="#projects" aria-label={text.scroll}>
              <ArrowDown size={21} />
            </a>
          </div>
          <div className="hero-rules" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </section>

        <section
          id="projects"
          className="projects-section container"
          aria-labelledby="projects-title"
        >
          <SectionLabel number="01">{text.sectionProjects}</SectionLabel>
          <div className="section-heading">
            <h2 id="projects-title">{text.projectsTitle}</h2>
            <p>{text.projectsIntro}</p>
          </div>
          <div className="project-controls">
            <div
              className="project-filters"
              role="group"
              aria-label={text.filterLabel}
            >
              {Object.entries(text.filters).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  className={filter === value ? 'filter-active' : ''}
                  aria-pressed={filter === value}
                  onClick={() => setFilter(value)}
                >
                  {label}
                </button>
              ))}
            </div>
            <p className="project-count" aria-live="polite">
              {String(selectedProjects.length).padStart(2, '0')}{' '}
              <span>
                {selectedProjects.length === 1
                  ? text.projectCountSingle
                  : text.projectCount}
              </span>
            </p>
          </div>
          <div className="project-results" key={filter}>
            {featuredProjects.length > 0 && (
              <div
                className={`featured-grid${featuredProjects.length === 1 ? ' featured-single' : ''}`}
              >
                {featuredProjects.map((project) => (
                  <ProjectLink
                    key={project.id}
                    project={project}
                    language={language}
                    text={text}
                    onOpen={openProject}
                    featured
                  />
                ))}
              </div>
            )}
            {otherProjects.length > 0 && (
              <div className="project-list">
                {otherProjects.map((project) => (
                  <ProjectLink
                    key={project.id}
                    project={project}
                    language={language}
                    text={text}
                    onOpen={openProject}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        <section
          id="about"
          className="about-section"
          aria-labelledby="about-title"
        >
          <div className="container about-layout">
            <div className="about-heading">
              <SectionLabel number="02" dark>
                {text.aboutLabel}
              </SectionLabel>
              <h2 id="about-title">{text.aboutTitle}</h2>
              <div className="about-monogram" aria-hidden="true">
                LC<span>.</span>
                <div className="monogram-lines">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </div>
            <div className="about-copy">
              <p className="about-lead">{text.aboutLead}</p>
              <p className="about-body">{text.aboutBody}</p>
              <div className="approach-list">
                {text.approaches.map((approach, index) => (
                  <div className="approach" key={approach.title}>
                    <span className="eyebrow">0{index + 1}</span>
                    <div>
                      <h3>{approach.title}</h3>
                      <p>{approach.text}</p>
                    </div>
                    <ArrowUpRight size={20} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="skills-section container"
          aria-labelledby="skills-title"
        >
          <SectionLabel number="03">{text.skillsLabel}</SectionLabel>
          <div className="section-heading">
            <h2 id="skills-title">{text.skillsTitle}</h2>
            <p>{text.skillsIntro}</p>
          </div>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.number}>
                <div className="skill-heading">
                  <span className="eyebrow">{group.number}</span>
                  <h3>{group.name[language]}</h3>
                </div>
                <ul className="skill-list">
                  {group.items.map((item) => {
                    const Icon = skillIcons[item.icon];
                    return (
                      <li key={item.name}>
                        <span className="skill-icon">
                          {item.logo ? (
                            <img
                              src={item.logo}
                              alt=""
                              loading="lazy"
                              width="26"
                              height="26"
                            />
                          ) : (
                            <Icon size={25} strokeWidth={1.4} />
                          )}
                        </span>
                        <span>{item.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="contact-section container"
          aria-labelledby="contact-title"
        >
          <div>
            <div className="eyebrow">
              <i className="status-dot" />
              {text.contactLabel}
            </div>
            <h2 id="contact-title">
              {text.contactTitle.split('\n').map((line, i) => (
                <span key={line}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </h2>
          </div>
          <div className="contact-links">
            <p>{text.contactBody}</p>
            <a
              className="button button-dark"
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              {text.githubCta}
              <ArrowUpRight size={20} />
            </a>
            <a
              className="text-link"
              href={links.gitlab}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitLab
              <ArrowUpRight size={17} />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer container">
        <div className="footer-brand">
          <a href="#top" aria-label="Louis Copmartin">
            <span className="brand-symbol">
              lc<span>.</span>
            </span>
          </a>
          <span>
            Louis Copmartin<small>{text.footerRole}</small>
          </span>
        </div>
        <span className="footer-copyright">
          © {new Date().getFullYear()} Louis Copmartin
        </span>
        <a className="footer-top" href="#top">
          {text.backTop}
          <ArrowUp size={16} />
        </a>
      </footer>
      <ProjectDialog
        project={activeProject}
        projects={projects}
        language={language}
        text={text}
        onClose={closeProject}
        onNavigate={navigateProject}
      />
    </>
  );
}
