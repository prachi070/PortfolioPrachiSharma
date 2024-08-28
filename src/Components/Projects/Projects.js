import React, { useEffect, useState } from 'react';
import "./Projects.css";
import mywork_data from "./mywork_data";
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(2); // Initially show 2 projects

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const showmoreproject = () => {
    if (visibleProjects === 2) {
      setVisibleProjects(mywork_data.length); // Show all projects
    } else {
      alert("No other project is added");
    }
  }

  return (
    <div id="project" className="mywork">
      <div className="mywork-title" data-aos="fade-up">
        <h1> My Work</h1>
      </div>
      <div className="mywork-container">
        {mywork_data.slice(0, visibleProjects).map((work, index) => (
          <a key={index} href={work.w_link} target="_blank" rel="noopener noreferrer" className="mywork-item" data-aos="fade-up">
            <img src={work.w_img} alt={work.w_name} />
            <p className="descproject">{work.w_desc}<IoIosArrowRoundForward/></p>
          </a>
        ))}
      </div>
      {visibleProjects < mywork_data.length && (
        <div onClick={showmoreproject} className="mywork-showmore" data-aos="fade-up">
          <p>Show More</p>
          <FaArrowRight className="arrowicon" />
        </div>
      )}

      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
