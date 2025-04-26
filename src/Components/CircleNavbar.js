import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './CircleNavbar.css';

const icons = ['🏡', '🧠', '🛠️', '📬']
;

const CircleNavbar = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="circle-navbar">
      <div
        className="semi-circle-wrapper"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="outer-arc"></div>
        <div className="middle-arc"></div>
        <div className="inner-arc"></div>

        {icons.map((icon, index) => {
          const angle = (Math.PI / (icons.length - 1)) * index; // Distribute over semi-circle
          const radius = 80; // Distance from center
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle) + 30;

          return (
            <Link
              key={index}
              to={index === 0 ? '/' : index === 1 ? '/skills' : index === 2 ? '/projects' : '/contact'}
              className={`circle-icon ${hovered ? 'show' : ''}`}
              style={{
                left: `calc(50% + ${x}px)`,
                top: `${y}px`,
              }}
            >
              <span className="icon">{icon}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CircleNavbar;
