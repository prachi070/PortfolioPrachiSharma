import React, { useEffect, useState, useRef } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './ProgressLine.css';
import 'intersection-observer';

const CircularSkillBar = ({ percentage, label, color, Icon }) => {
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setProgress(percentage), 500);
        }
      },
      { threshold: 0.5 } // Adjust as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [percentage]);

  return (
    <div className="wrapper" ref={ref}>
      <div className="circularProgressContainer">
        <CircularProgressbar
          value={progress}
          text={`${progress}%`}
          styles={buildStyles({
            pathColor: color,
            textColor: 'black',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
            pathTransitionDuration: 3, // Slow down the animation duration to 3 seconds
          })}
        />
      </div>
      <div className="label">
        {Icon && <Icon size={24} />}
        {label}
      </div>
    </div>
  );
};

export default CircularSkillBar;
