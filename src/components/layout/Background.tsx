
import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="absolute inset-0">
      {/* Deep space gradient - simplified */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/90 via-purple-950/70 via-blue-950/50 to-black"></div>
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/40 via-violet-800/30 to-transparent"></div>
      
      {/* Optimized Nebula Field - Reduced from 12+ to 3 nebulas */}
      <div className="absolute inset-0">
        {/* Main nebula */}
        <div className="absolute top-1/4 left-1/4 w-[1800px] h-[1200px] opacity-15">
          <div className="w-full h-full blur-3xl animate-pulse" 
               style={{ 
                 background: `
                   radial-gradient(ellipse 70% 55% at 25% 80%, rgba(255, 0, 128, 0.3) 0%, transparent 40%),
                   radial-gradient(ellipse 85% 45% at 85% 30%, rgba(255, 128, 0, 0.25) 0%, transparent 35%),
                   radial-gradient(ellipse 60% 75% at 15% 15%, rgba(255, 255, 0, 0.2) 0%, transparent 45%)
                 `,
                 clipPath: 'polygon(15% 3%, 35% 0%, 58% 5%, 78% 15%, 92% 28%, 97% 45%, 95% 65%, 88% 82%, 75% 94%, 55% 98%, 35% 95%, 18% 88%, 8% 75%, 3% 58%, 5% 35%, 12% 18%)',
                 animation: 'nebulaCircularLarge 60s infinite linear'
               }}>
          </div>
        </div>
        
        {/* Secondary nebula */}
        <div className="absolute top-1/3 right-1/4 w-[1500px] h-[1000px] opacity-12">
          <div className="w-full h-full blur-3xl animate-pulse" 
               style={{ 
                 background: `
                   radial-gradient(ellipse 80% 60% at 30% 25%, rgba(0, 255, 255, 0.3) 0%, transparent 40%),
                   radial-gradient(ellipse 40% 85% at 5% 85%, rgba(255, 255, 0, 0.2) 0%, transparent 35%)
                 `,
                 clipPath: 'polygon(20% 5%, 45% 0%, 70% 8%, 88% 22%, 96% 40%, 92% 58%, 83% 78%, 68% 92%, 48% 97%, 28% 93%, 12% 83%, 3% 65%, 6% 45%, 15% 25%)',
                 animation: 'nebulaCircular 80s infinite linear reverse'
               }}>
          </div>
        </div>
      </div>

      {/* Optimized Star Field - Reduced from 500 to 100 stars */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              background: i % 5 === 0 ? '#ff0080' : 
                         i % 5 === 1 ? '#00ffff' : 
                         i % 5 === 2 ? '#ffff00' :
                         i % 5 === 3 ? '#ff8000' : '#ffffff',
              borderRadius: '50%',
              boxShadow: '0 0 6px currentColor',
              animation: `twinkle ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Optimized Shooting Stars - Reduced from 20 to 8 */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 30 + 20}px`,
              height: `${Math.random() * 30 + 20}px`,
              background: i % 4 === 0 ? 
                'radial-gradient(circle, rgba(255, 0, 128, 0.8) 0%, rgba(255, 0, 128, 0.4) 50%, transparent 100%)' :
                i % 4 === 1 ?
                'radial-gradient(circle, rgba(0, 255, 255, 0.8) 0%, rgba(0, 255, 255, 0.4) 50%, transparent 100%)' :
                i % 4 === 2 ?
                'radial-gradient(circle, rgba(255, 255, 0, 0.8) 0%, rgba(255, 255, 0, 0.4) 50%, transparent 100%)' :
                'radial-gradient(circle, rgba(255, 128, 0, 0.8) 0%, rgba(255, 128, 0, 0.4) 50%, transparent 100%)',
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              animation: i % 2 === 0 ? `flyingStarCircularLarge ${Math.random() * 15 + 25}s infinite linear` :
                        `flyingStarCircular ${Math.random() * 12 + 20}s infinite linear`,
              filter: 'blur(0.5px)',
              boxShadow: '0 0 20px currentColor'
            }}
          />
        ))}
      </div>

      {/* Simplified Galaxy Spiral */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10">
        <div className="absolute inset-0">
          <div className="w-full h-full animate-spin" style={{ 
            background: 'conic-gradient(from 0deg, transparent, rgba(255, 0, 128, 0.2), transparent, rgba(0, 255, 255, 0.2), transparent)',
            animationDuration: '120s'
          }}></div>
        </div>
      </div>

      {/* Optimized Particle System - Reduced from 120 to 30 */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 3}px`,
              height: `${Math.random() * 6 + 3}px`,
              background: i % 4 === 0 ? '#ff0080' : 
                         i % 4 === 1 ? '#00ffff' :
                         i % 4 === 2 ? '#ffff00' : '#ff8000',
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              boxShadow: '0 0 10px currentColor',
              animation: `flyingStarCircularSmall ${Math.random() * 20 + 20}s infinite linear`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Background;
