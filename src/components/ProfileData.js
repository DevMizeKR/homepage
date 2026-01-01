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

export function Experiences({ name, subtitle, dateStart, dateEnd, description, url, isEnd }) {
    return (
        <div className="experience-row">
            <div className="experience-date">
                {formatDateText(dateStart, dateEnd, isEnd)}
            </div>
            <div className="experience-divider" />
            <div className="experience-content">
                <div className="experience-name">{name}</div>
                <div className="experience-subtitle">{subtitle}</div>
            </div>
        </div>
    );
}

function formatDateText(dateStart, dateEnd, isEnd) {
    if (dateEnd) {
        return (
            <>
                {dateStart} ~<br />
                {dateEnd}
            </>
        );
    }
    else if (!dateEnd && !isEnd) {
        return `${dateStart} ~`;
    }
    else {
        return dateStart;
    }
}