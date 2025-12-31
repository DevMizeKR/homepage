import "./ProfileData.css";

export function Skills({ icon, name }) {
    return (
        <div className="skill-icon">
            <img src={icon} alt={name} />
            <span className="skill-tooltip">{name}</span>
        </div>
    );
}

export function Projects({ icon, name, url }) {
    return (
        <a
            href={url}
            className="project-icon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
        >
            <img src={icon} alt={name} />
            <span className="project-tooltip">{name}</span>
        </a>
    );
}