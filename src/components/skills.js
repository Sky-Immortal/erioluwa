import { Component } from 'react';

class Skills extends Component {
  render() {
    const { skills } = this.props; // Destructure skills from props

    return (
      <div className="skills-container">
        {skills.map((skill, i) => (
          <div className="skill-item" key={i}>
            <img src={skill.image} alt={skill.name} className="skill-image" /> {/* Render the image */}
            <div className="skill-name">{skill.name}</div> {/* Display the skill name */}
            <div className="skill-description">{skill.description}</div> {/* Display the skill description */}
          </div>
        ))}
      </div>
    );
  }
}

export default Skills;