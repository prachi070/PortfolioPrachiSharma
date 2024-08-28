import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Hero.css";
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import photo from "./photo.jpeg";


const Hero = () => {
  const navigate = useNavigate();
  const resume_button = () => {
      // Navigate to the desired path
      window.open(`${process.env.PUBLIC_URL}/PrachiSharma_cv.pdf`, '_blank');
  };
  const mywork_button=()=>{
    navigate('/projects'); 
  }

  useEffect(() => {
    AOS.init({
      duration: 1200,  once: true,
    });
  }, []);
 
 
  return (<>
      {/* hero section */}
      <section id="home" className="hero-section" >
        <div className='image-conatiner'>

        <img className="img-photo" src={photo} alt="avatar" data-aos="fade-up"/>
        </div>
        <p data-aos="fade-up"> I'm Prachi Sharma<span class="waving-hand">👋</span></p>
        <h1 data-aos="fade-up">Frontend Developer</h1>
        <div className="button-container" >
          <span><button className="btn1" data-aos="fade-right" onClick={resume_button}>My Resume</button></span>
          <span><button className="btn2" data-aos="fade-left" onClick={mywork_button}>My Work</button></span>
        </div>
      </section>
    </>
  );
};

export default Hero;
