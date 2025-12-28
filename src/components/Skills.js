import "./Skills.css";

function Skills({ icon, name }) {
    return (
        <div className="skill-icon">
            <img src={icon} alt={name} />
            <span className="skill-tooltip">{name}</span>
        </div>
    );
}

export default Skills;