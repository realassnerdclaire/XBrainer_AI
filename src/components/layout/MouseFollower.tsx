
import React, { memo } from 'react';
import type { MousePosition } from '../../types';

interface MouseFollowerProps {
  mousePosition: MousePosition;
}

const MouseFollower: React.FC<MouseFollowerProps> = memo(({ mousePosition }) => {
  return (
    <div className="fixed pointer-events-none z-10 opacity-20">
      <div
        className="absolute transition-all duration-700 ease-out"
        style={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          width: 300,
          height: 300,
          background: 'radial-gradient(circle, rgba(255, 0, 128, 0.3) 0%, rgba(0, 255, 255, 0.2) 40%, transparent 70%)',
          borderRadius: '50%'
        }}
      />
    </div>
  );
});

MouseFollower.displayName = 'MouseFollower';

export default MouseFollower;
