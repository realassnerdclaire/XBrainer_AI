
import React from 'react';
import type { MousePosition } from '../../types';

interface MouseFollowerProps {
  mousePosition: MousePosition;
}

const MouseFollower: React.FC<MouseFollowerProps> = ({ mousePosition }) => {
  return (
    <div className="absolute pointer-events-none z-10">
      <div
        className="absolute transition-all duration-500 ease-out opacity-20"
        style={{
          left: mousePosition.x - 250,
          top: mousePosition.y - 250,
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(255, 0, 128, 0.6) 0%, rgba(0, 255, 255, 0.4) 20%, rgba(255, 255, 0, 0.3) 40%, rgba(128, 0, 255, 0.2) 60%, transparent 80%)',
          borderRadius: '50%'
        }}
      />
      <div
        className="absolute transition-all duration-300 ease-out opacity-30"
        style={{
          left: mousePosition.x - 120,
          top: mousePosition.y - 120,
          width: 240,
          height: 240,
          background: 'radial-gradient(circle, rgba(255, 128, 0, 0.7) 0%, rgba(128, 255, 0, 0.4) 30%, transparent 60%)',
          borderRadius: '50%'
        }}
      />
    </div>
  );
};

export default MouseFollower;
