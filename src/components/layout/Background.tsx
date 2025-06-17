
import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="absolute inset-0">
      {/* Deep space multi-layer gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/90 via-purple-950/70 via-blue-950/50 to-black"></div>
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/40 via-violet-800/30 to-transparent"></div>
      
      {/* MASSIVE NEBULA FIELD - Much More Extensive Coverage with Circular Motion */}
      <div className="absolute inset-0">
        {/* Main large nebula clusters - covering entire screen with circular orbits */}
        <div className="absolute top-1/4 left-1/4 w-[2800px] h-[2000px] opacity-20">
          <div className="w-full h-full blur-3xl animate-pulse" 
               style={{ 
                 background: `
                   radial-gradient(ellipse 70% 55% at 25% 80%, rgba(255, 0, 128, 0.4) 0%, transparent 40%),
                   radial-gradient(ellipse 85% 45% at 85% 30%, rgba(255, 128, 0, 0.35) 0%, transparent 35%),
                   radial-gradient(ellipse 60% 75% at 15% 15%, rgba(255, 255, 0, 0.3) 0%, transparent 45%),
                   radial-gradient(ellipse 45% 65% at 95% 85%, rgba(128, 255, 0, 0.4) 0%, transparent 40%),
                   radial-gradient(ellipse 75% 40% at 5% 95%, rgba(0, 255, 128, 0.35) 0%, transparent 35%),
                   radial-gradient(ellipse 50% 80% at 75% 5%, rgba(0, 128, 255, 0.4) 0%, transparent 45%),
                   radial-gradient(ellipse 65% 35% at 90% 55%, rgba(128, 0, 255, 0.35) 0%, transparent 40%)
                 `,
                 clipPath: 'polygon(15% 3%, 35% 0%, 58% 5%, 78% 15%, 92% 28%, 97% 45%, 95% 65%, 88% 82%, 75% 94%, 55% 98%, 35% 95%, 18% 88%, 8% 75%, 3% 58%, 5% 35%, 12% 18%)',
                 animation: 'nebulaCircularLarge 45s infinite linear'
               }}>
          </div>
        </div>
        
        {/* Second massive nebula layer with different circular path */}
        <div className="absolute top-1/3 left-1/3 w-[3000px] h-[2200px] opacity-18">
          <div className="w-full h-full blur-3xl animate-pulse" 
               style={{ 
                 background: `
                   radial-gradient(ellipse 80% 60% at 30% 25%, rgba(0, 255, 255, 0.4) 0%, transparent 40%),
                   radial-gradient(ellipse 90% 35% at 90% 75%, rgba(255, 0, 255, 0.35) 0%, transparent 45%),
                   radial-gradient(ellipse 40% 85% at 5% 85%, rgba(255, 255, 0, 0.3) 0%, transparent 35%),
                   radial-gradient(ellipse 75% 30% at 95% 10%, rgba(255, 128, 0, 0.4) 0%, transparent 40%),
                   radial-gradient(ellipse 30% 95% at 15% 60%, rgba(128, 0, 255, 0.35) 0%, transparent 45%),
                   radial-gradient(ellipse 85% 45% at 70% 90%, rgba(0, 255, 128, 0.3) 0%, transparent 35%)
                 `,
                 clipPath: 'polygon(20% 5%, 45% 0%, 70% 8%, 88% 22%, 96% 40%, 92% 58%, 83% 78%, 68% 92%, 48% 97%, 28% 93%, 12% 83%, 3% 65%, 6% 45%, 15% 25%)',
                 animation: 'nebulaCircular 60s infinite linear reverse'
               }}>
          </div>
        </div>
        
        {/* Additional circular nebula clusters */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-15"
            style={{
              left: `${Math.random() * 60 + 20}%`,
              top: `${Math.random() * 60 + 20}%`,
              width: `${Math.random() * 1500 + 1200}px`,
              height: `${Math.random() * 1200 + 1000}px`
            }}
          >
            <div className="w-full h-full blur-3xl animate-pulse" 
                 style={{ 
                   background: `
                     radial-gradient(ellipse 60% 70% at 40% 30%, rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.3) 0%, transparent 35%),
                     radial-gradient(ellipse 40% 50% at 80% 70%, rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.35) 0%, transparent 30%),
                     radial-gradient(ellipse 70% 40% at 20% 80%, rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.3) 0%, transparent 35%)
                   `,
                   clipPath: 'polygon(30% 8%, 55% 2%, 78% 15%, 92% 32%, 95% 52%, 88% 72%, 75% 88%, 52% 95%, 28% 90%, 12% 75%, 5% 52%, 12% 32%)',
                   animation: i % 2 === 0 ? `nebulaCircular ${Math.random() * 30 + 40}s infinite linear` : `nebulaCircularLarge ${Math.random() * 40 + 50}s infinite linear reverse`
                 }}>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Star Field */}
      <div className="absolute inset-0">
        {[...Array(500)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              background: i % 7 === 0 ? '#ff0080' : 
                         i % 7 === 1 ? '#00ffff' : 
                         i % 7 === 2 ? '#ffff00' :
                         i % 7 === 3 ? '#ff8000' :
                         i % 7 === 4 ? '#80ff00' :
                         i % 7 === 5 ? '#8000ff' : '#ffffff',
              borderRadius: '50%',
              boxShadow: '0 0 8px currentColor',
              animation: `twinkle ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* LARGE STAR-SHAPED SHOOTING STARS with CIRCULAR MOTION */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 40 + 25}px`,
              height: `${Math.random() * 40 + 25}px`,
              background: i % 7 === 0 ? 
                'radial-gradient(circle, rgba(255, 0, 128, 0.9) 0%, rgba(255, 0, 128, 0.6) 40%, rgba(255, 0, 128, 0.2) 70%, transparent 100%)' :
                i % 7 === 1 ?
                'radial-gradient(circle, rgba(0, 255, 255, 0.9) 0%, rgba(0, 255, 255, 0.6) 40%, rgba(0, 255, 255, 0.2) 70%, transparent 100%)' :
                i % 7 === 2 ?
                'radial-gradient(circle, rgba(255, 255, 0, 0.9) 0%, rgba(255, 255, 0, 0.6) 40%, rgba(255, 255, 0, 0.2) 70%, transparent 100%)' :
                i % 7 === 3 ?
                'radial-gradient(circle, rgba(255, 128, 0, 0.9) 0%, rgba(255, 128, 0, 0.6) 40%, rgba(255, 128, 0, 0.2) 70%, transparent 100%)' :
                i % 7 === 4 ?
                'radial-gradient(circle, rgba(128, 255, 0, 0.9) 0%, rgba(128, 255, 0, 0.6) 40%, rgba(128, 255, 0, 0.2) 70%, transparent 100%)' :
                i % 7 === 5 ?
                'radial-gradient(circle, rgba(128, 0, 255, 0.9) 0%, rgba(128, 0, 255, 0.6) 40%, rgba(128, 0, 255, 0.2) 70%, transparent 100%)' :
                'radial-gradient(circle, rgba(255, 64, 128, 0.9) 0%, rgba(255, 64, 128, 0.6) 40%, rgba(255, 64, 128, 0.2) 70%, transparent 100%)',
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              animation: i % 3 === 0 ? `flyingStarCircularLarge ${Math.random() * 15 + 20}s infinite linear` :
                        i % 3 === 1 ? `flyingStarCircular ${Math.random() * 12 + 15}s infinite linear` :
                        `flyingStarCircularSmall ${Math.random() * 10 + 12}s infinite linear`,
              filter: 'blur(0.5px)',
              boxShadow: '0 0 25px currentColor, 0 0 50px currentColor'
            }}
          />
        ))}
      </div>

      {/* Medium Star-Shaped Elements with Different Circular Paths */}
      <div className="absolute inset-0">
        {[...Array(35)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 25 + 15}px`,
              height: `${Math.random() * 25 + 15}px`,
              background: `radial-gradient(circle, rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.8) 0%, rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.4) 50%, transparent 100%)`,
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              animation: i % 2 === 0 ? `flyingStarCircular ${Math.random() * 8 + 10}s infinite linear` : `flyingStarCircularSmall ${Math.random() * 6 + 8}s infinite linear reverse`,
              filter: 'blur(0.3px)',
              boxShadow: '0 0 15px currentColor'
            }}
          />
        ))}
      </div>

      {/* Rotating Galaxy Spiral */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-15">
        <div className="absolute inset-0">
          <div className="w-full h-full animate-spin" style={{ 
            background: 'conic-gradient(from 0deg, transparent, rgba(255, 0, 128, 0.3), transparent, rgba(0, 255, 255, 0.3), transparent, rgba(255, 255, 0, 0.3), transparent)',
            animationDuration: '200s'
          }}></div>
        </div>
      </div>

      {/* Enhanced Star-Shaped Particle System with Circular Motion */}
      <div className="absolute inset-0">
        {[...Array(120)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              background: i % 7 === 0 ? '#ff0080' : 
                         i % 7 === 1 ? '#00ffff' :
                         i % 7 === 2 ? '#ffff00' : 
                         i % 7 === 3 ? '#ff8000' :
                         i % 7 === 4 ? '#80ff00' : 
                         i % 7 === 5 ? '#8000ff' : '#ff4080',
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              boxShadow: '0 0 12px currentColor',
              animation: i % 4 === 0 ? `flyingStarCircularSmall ${Math.random() * 20 + 15}s infinite linear` : `particle ${Math.random() * 20 + 15}s infinite linear`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Background;
