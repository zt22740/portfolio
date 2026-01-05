import React from "react";
import "../styles/rolling.css"; 

interface RollingLinkProps {
  href: string;
  children: React.ReactNode;
  download?: string;
  target?: string;
  className?: string; // To handle width differences (square vs rectangle)
}

const RollingLink: React.FC<RollingLinkProps> = ({ 
  href, 
  children, 
  download, 
  target,
  className = "" 
}) => {
  return (
    <a 
      href={href} 
      className={`rolling-box ${className}`} 
      download={download} 
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      <div className="cube">
        {/* Face 1: Front */}
        <div className="face front">
          {children}
        </div>
        
        {/* Face 2: Bottom (Trapdoor) */}
        <div className="face bottom">
          {children}
        </div>
      </div>
    </a>
  );
};

export default RollingLink;