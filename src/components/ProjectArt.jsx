import { ArrowUpRight, LockKeyhole } from 'lucide-react';

export default function ProjectArt({ project, text, compact = false }) {
  return (
    <div
      className={`project-art art-${project.id}${compact ? ' art-compact' : ''}`}
      aria-hidden="true"
    >
      {project.id === 'robosoccer' && (
        <>
          <div className="art-topline">
            <span>R / S</span>
            <span>TOURNAMENT MANAGER</span>
          </div>
          <div className="tournament-graphic">
            <div className="bracket bracket-left">
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="pitch">
              <span className="pitch-line" />
              <span className="pitch-circle" />
              <span className="pitch-dot" />
            </div>
            <div className="bracket bracket-right">
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="art-bottomline">
            {text.illustrationLabels.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
        </>
      )}
      {project.id === 'carbon' && (
        <>
          <div className="art-topline">
            <span className="carbon-wordmark">
              <img src={project.logo} alt="" />
              Carbon
            </span>
            <ArrowUpRight size={18} />
          </div>
          <div className="chart-graphic">
            <svg viewBox="0 0 500 190" preserveAspectRatio="none">
              <path
                className="chart-grid"
                d="M0 35H500M0 80H500M0 125H500M0 170H500M80 0V190M180 0V190M280 0V190M380 0V190M480 0V190"
              />
              <path
                className="chart-area"
                d="M0 164C35 164 35 129 72 134S130 156 162 116S225 133 262 82S315 101 351 58S406 87 440 41S476 55 500 16V190H0Z"
              />
              <path
                className="chart-line"
                d="M0 164C35 164 35 129 72 134S130 156 162 116S225 133 262 82S315 101 351 58S406 87 440 41S476 55 500 16"
              />
              <path className="chart-regression" d="M0 166L500 34" />
            </svg>
          </div>
          <div className="art-bottomline">
            <span>{text.visualization}</span>
            <span>C# / SQL</span>
          </div>
        </>
      )}
      {project.id === 'towa' && (
        <div className="towa-board">
          {Array.from({ length: 16 }, (_, i) => (
            <span key={i}>
              {[2, 5, 8, 10, 14].includes(i) && (
                <i className={i % 2 === 0 ? 'piece-dark' : 'piece-light'} />
              )}
            </span>
          ))}
        </div>
      )}
      {project.id === 'rsa' && (
        <div className="rsa-graphic">
          <span className="rsa-orbit orbit-one" />
          <span className="rsa-orbit orbit-two" />
          <LockKeyhole strokeWidth={1.25} />
          <span className="rsa-letter letter-one">p</span>
          <span className="rsa-letter letter-two">q</span>
        </div>
      )}
      {project.id === 'bananaw' && (
        <img className="banana-art" src={project.logo} alt="" loading="lazy" />
      )}
    </div>
  );
}
