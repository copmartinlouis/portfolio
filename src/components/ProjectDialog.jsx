import { useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from 'lucide-react';
import ProjectArt from './ProjectArt.jsx';

export default function ProjectDialog({
  project,
  projects,
  language,
  text,
  onClose,
  onNavigate,
}) {
  const dialogRef = useRef(null);
  const contentRef = useRef(null);
  const isOpen = Boolean(project);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    if (!dialog.open) dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      requestAnimationFrame(() => {
        if (previousFocus?.isConnected)
          previousFocus.focus({ preventScroll: true });
      });
    };
  }, [isOpen]);

  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0, behavior: 'instant' });
  }, [project?.id]);

  const index = projects.findIndex((item) => item.id === project?.id);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <dialog
      ref={dialogRef}
      className="project-dialog"
      aria-labelledby="dialog-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target !== dialogRef.current) return;
        const rect = dialogRef.current.getBoundingClientRect();
        if (
          event.clientX < rect.left ||
          event.clientX > rect.right ||
          event.clientY < rect.top ||
          event.clientY > rect.bottom
        )
          onClose();
      }}
    >
      {project && (
        <>
          <div className="dialog-toolbar">
            <span className="eyebrow">
              {project.number} / {project.type[language]}
            </span>
            <button
              type="button"
              className="icon-button"
              aria-label={text.closeProject}
              onClick={onClose}
            >
              <X size={21} />
            </button>
          </div>
          <div ref={contentRef} className="dialog-content">
            <div className="dialog-title">
              <h2 id="dialog-title">{project.title[language]}</h2>
              <p>{project.subtitle[language]}</p>
            </div>
            <ProjectArt project={project} text={text} />
            <div className="dialog-copy">
              <section>
                <h3>{text.projectOverview}</h3>
                <p>{project.description[language]}</p>
              </section>
              <section>
                <h3>{text.projectFeatures}</h3>
                <ul className="feature-list">
                  {project.features[language].map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h3>{text.projectLearning}</h3>
                <p>{project.learning[language]}</p>
              </section>
              <section>
                <h3>{text.technologies}</h3>
                <div className="tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </section>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-dark"
              >
                {text.sourceCode}
                <ArrowUpRight size={18} />
              </a>
            </div>
            <nav
              className="dialog-navigation"
              aria-label={text.sectionProjects}
            >
              <button type="button" onClick={() => onNavigate(previous.id)}>
                <ArrowLeft size={18} />
                <span>
                  <small>{text.previousProject}</small>
                  {previous.title[language]}
                </span>
              </button>
              <button type="button" onClick={() => onNavigate(next.id)}>
                <span>
                  <small>{text.nextProject}</small>
                  {next.title[language]}
                </span>
                <ArrowRight size={18} />
              </button>
            </nav>
          </div>
        </>
      )}
    </dialog>
  );
}
