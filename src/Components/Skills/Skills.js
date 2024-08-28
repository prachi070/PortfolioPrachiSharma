import React, { useEffect } from 'react';
import CircularSkillBar from './CircularSkillBar';
import './ProgressLine.css';
import { FaReact, FaJsSquare, FaCss3Alt, FaHtml5, FaNodeJs, FaPython, FaJava,  } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
    });
  }, []);
  const skills = [
    { percentage: 60, label: 'React', color: '#3b5998', Icon: FaReact },
    { percentage: 75, label: 'JavaScript', color: '#3b5998', Icon: FaJsSquare },
    { percentage: 80, label: 'CSS', color: '#3b5998', Icon: FaCss3Alt },
    { percentage: 90, label: 'HTML', color: '#3b5998', Icon: FaHtml5 },
    { percentage: 40, label: 'Node.js', color: '#3b5998', Icon: FaNodeJs },
    { percentage: 65, label: 'Python', color: '#3b5998', Icon: FaPython },
    { percentage: 60, label: 'MySQL', color: '#3b5998', Icon: GrMysql },
    { percentage: 70, label: 'C++', color: '#3b5998', Icon: SiCplusplus  }
  ];

  return (
    <div id='skills' className="myworkskill">
      <h2 className="headingskill" data-aos="fade-up">SKILLS</h2>
      <div className="gridContainer" data-aos="fade-up">
        {skills.map((skill, index) => (
          <CircularSkillBar
            key={index}
            percentage={skill.percentage}
            label={skill.label}
            color={skill.color}
            Icon={skill.Icon}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

