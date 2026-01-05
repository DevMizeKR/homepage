import { FiExternalLink } from "react-icons/fi";
import { useEffect, useState } from "react";
import "./ProfileData.css";

export function Skills({ icon, iconDark, name }) {
    const isDark = usePrefersDarkMode();

    return (
        <div className="skill-icon">
            <img src={isDark && iconDark ? iconDark : icon} alt={name} />
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
            <div className={`experience-date ${!isEnd ? "text-active" : ""}`}>
                {formatDateText(dateStart, dateEnd, isEnd)}
            </div>
            <div className="experience-divider" />
            <div className="experience-content">
                <div className="experience-name">{name}</div>
                <div className={`experience-subtitle ${setSubtitleColorClass(subtitle)}`}>{subtitle}</div>
            </div>
            {url && (
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="experience-url"
                    aria-label="External Link"
                >
                    <FiExternalLink />
                </a>
            )}
            <div className="experience-description">{description}</div>
            <div className="experience-divider-bottom" />
        </div>
    );
}

// Set Format of Date Text
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

const SUBTITLE_KEYWORD_STYLE = [
    {keyword: "#1", className: "experience-1st-award"},
    {keyword: "#2", className: "experience-2nd-award"},
    {keyword: "#3", className: "experience-3rd-award"}
];

// Set Color of Experience Subtitle
function setSubtitleColorClass(subtitle) {
    if (!subtitle) return "";

    const colorClass = SUBTITLE_KEYWORD_STYLE.find(({ keyword }) =>
        subtitle.includes(keyword)
    );

    return colorClass ? colorClass.className : "";
}

// Detect Dark Mode
function usePrefersDarkMode() {
    const [isDark, setIsDark] = useState (
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );

    useEffect(() => {
        const media = window.matchMedia("(prefers-color-scheme: dark)");
        const handler = (e) => setIsDark(e.matches);

        media.addEventListener("change", handler);
        return () => media.removeEventListener("change", handler);
    }, []);

    return isDark;
}