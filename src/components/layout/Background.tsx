
import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="absolute inset-0">
      {/* Deep space multi-layer gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/90 via-purple-950/70 via-blue-950/50 to-black"></div>
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/40 via-violet-800/30 to-transparent"></div>
      
      {/* MASSIVE NEBULA FIELD - Much More Extensive Coverage */}
      <div className="absolute inset-0">
        {/* Main large nebula clusters - covering entire screen */}
        <div className="absolute -top-60 -left-60 w-[2800px] h-[2000px] opacity-20">
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
                 animationDuration: '20s',
                 animation: 'nebulaFloat 30s infinite ease-in-out'
               }}>
          </div>
        </div>
        
        {/* Second massive nebula layer */}
        <div className="absolute top-1/4 -right-80 w-[3000px] h-[2200px] opacity-18">
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
                 animationDuration: '35s',
                 animationDelay: '5s',
                 animation: 'nebulaFloat2 40s infinite ease-in-out 5s'
               }}>
          </div>
        </div>
        
        {/* Third massive nebula layer */}
        <div className="absolute bottom-0 -left-40 w-[2600px] h-[1800px] opacity-16">
          <div className="w-full h-full blur-3xl animate-pulse" 
               style={{ 
                 background: `
                   radial-gradient(ellipse 90% 40% at 70% 50%, rgba(128, 0, 255, 0.35) 0%, transparent 45%),
                   radial-gradient(ellipse 35% 90% at 15% 80%, rgba(255, 0, 128, 0.3) 0%, transparent 40%),
                   radial-gradient(ellipse 75% 30% at 95% 15%, rgba(0, 255, 128, 0.35) 0%, transparent 35%),
                   radial-gradient(ellipse 30% 80% at 5% 45%, rgba(0, 128, 255, 0.4) 0%, transparent 40%),
                   radial-gradient(ellipse 65% 35% at 85% 90%, rgba(255, 255, 0, 0.3) 0%, transparent 35%),
                   radial-gradient(ellipse 80% 50% at 40% 70%, rgba(255, 64, 192, 0.35) 0%, transparent 40%)
                 `,
                 clipPath: 'polygon(10% 8%, 30% 0%, 55% 6%, 75% 18%, 90% 35%, 95% 55%, 88% 75%, 73% 90%, 53% 97%, 33% 92%, 15% 82%, 5% 65%, 8% 45%, 12% 25%)',
                 animationDuration: '28s',
                 animationDelay: '10s',
                 animation: 'nebulaFloat3 45s infinite ease-in-out 10s'
               }}>
          </div>
        </div>
        
        {/* Additional nebula clusters for full coverage */}
        <div className="absolute top-1/2 -left-60 w-[2000px] h-[1400px] opacity-14">
          <div className="w-full h-full blur-3xl animate-pulse" 
               style={{ 
                 background: `
                   radial-gradient(ellipse 80% 50% at 60% 60%, rgba(255, 128, 0, 0.3) 0%, transparent 40%),
                   radial-gradient(ellipse 40% 90% at 15% 85%, rgba(255, 255, 0, 0.35) 0%, transparent 35%),
                   radial-gradient(ellipse 70% 35% at 90% 20%, rgba(128, 255, 0, 0.3) 0%, transparent 30%),
                   radial-gradient(ellipse 55% 75% at 25% 70%, rgba(0, 255, 255, 0.35) 0%, transparent 40%)
                 `,
                 clipPath: 'polygon(25% 3%, 50% 0%, 75% 12%, 90% 30%, 95% 50%, 88% 70%, 75% 85%, 50% 95%, 25% 88%, 10% 70%, 5% 50%, 10% 30%)',
                 animationDuration: '32s',
                 animationDelay: '3s',
                 animation: 'nebulaFloat4 38s infinite ease-in-out 3s'
               }}>
          </div>
        </div>

        <div className="absolute top-1/6 -right-80 w-[2200px] h-[1600px] opacity-15">
          <div className="w-full h-full blur-3xl animate-pulse" 
               style={{ 
                 background: `
                   radial-gradient(ellipse 75% 45% at 35% 55%, rgba(0, 255, 255, 0.35) 0%, transparent 40%),
                   radial-gradient(ellipse 35% 80% at 85% 15%, rgba(128, 0, 255, 0.3) 0%, transparent 35%),
                   radial-gradient(ellipse 80% 30% at 10% 90%, rgba(255, 0, 255, 0.35) 0%, transparent 30%),
                   radial-gradient(ellipse 50% 70% at 70% 40%, rgba(255, 192, 64, 0.3) 0%, transparent 35%)
                 `,
                 clipPath: 'polygon(20% 5%, 45% 0%, 70% 10%, 85% 25%, 95% 45%, 90% 65%, 80% 80%, 60% 92%, 40% 95%, 20% 88%, 8% 75%, 3% 55%, 8% 35%, 15% 20%)',
                 animationDuration: '26s',
                 animationDelay: '8s',
                 animation: 'nebulaFloat5 42s infinite ease-in-out 8s'
               }}>
          </div>
        </div>

        {/* More scattered nebula for complete coverage */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-12"
            style={{
              left: `${Math.random() * 120 - 20}%`,
              top: `${Math.random() * 120 - 20}%`,
              width: `${Math.random() * 1500 + 1000}px`,
              height: `${Math.random() * 1200 + 800}px`
            }}
          >
            <div className="w-full h-full blur-3xl animate-pulse" 
                 style={{ 
                   background: `
                     radial-gradient(ellipse 60% 70% at 40% 30%, rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.25) 0%, transparent 35%),
                     radial-gradient(ellipse 40% 50% at 80% 70%, rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.3) 0%, transparent 30%),
                     radial-gradient(ellipse 70% 40% at 20% 80%, rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.25) 0%, transparent 35%)
                   `,
                   clipPath: 'polygon(30% 8%, 55% 2%, 78% 15%, 92% 32%, 95% 52%, 88% 72%, 75% 88%, 52% 95%, 28% 90%, 12% 75%, 5% 52%, 12% 32%)',
                   animationDuration: `${Math.random() * 20 + 25}s`,
                   animationDelay: `${Math.random() * 15}s`,
                   animation: `nebulaFloat${(i % 6) + 1} ${Math.random() * 20 + 30}s infinite ease-in-out ${Math.random() * 15}s`
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

      {/* ENHANCED STAR-SHAPED SHOOTING STARS - Much More Visible */}
      <div className="absolute inset-0">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-30"
            style={{
              left: `${Math.random() * 120 - 20}%`,
              top: `${Math.random() * 120 - 20}%`,
              width: `${Math.random() * 20 + 12}px`,
              height: `${Math.random() * 20 + 12}px`,
              background: i % 7 === 0 ? 
                'radial-gradient(circle, rgba(255, 0, 128, 0.8) 0%, rgba(255, 0, 128, 0.4) 30%, rgba(255, 0, 128, 0.1) 60%, transparent 100%)' :
                i % 7 === 1 ?
                'radial-gradient(circle, rgba(0, 255, 255, 0.8) 0%, rgba(0, 255, 255, 0.4) 30%, rgba(0, 255, 255, 0.1) 60%, transparent 100%)' :
                i % 7 === 2 ?
                'radial-gradient(circle, rgba(255, 255, 0, 0.8) 0%, rgba(255, 255, 0, 0.4) 30%, rgba(255, 255, 0, 0.1) 60%, transparent 100%)' :
                i % 7 === 3 ?
                'radial-gradient(circle, rgba(255, 128, 0, 0.8) 0%, rgba(255, 128, 0, 0.4) 30%, rgba(255, 128, 0, 0.1) 60%, transparent 100%)' :
                i % 7 === 4 ?
                'radial-gradient(circle, rgba(128, 255, 0, 0.8) 0%, rgba(128, 255, 0, 0.4) 30%, rgba(128, 255, 0, 0.1) 60%, transparent 100%)' :
                i % 7 === 5 ?
                'radial-gradient(circle, rgba(128, 0, 255, 0.8) 0%, rgba(128, 0, 255, 0.4) 30%, rgba(128, 0, 255, 0.1) 60%, transparent 100%)' :
                'radial-gradient(circle, rgba(255, 64, 128, 0.8) 0%, rgba(255, 64, 128, 0.4) 30%, rgba(255, 64, 128, 0.1) 60%, transparent 100%)',
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `flyingStar ${Math.random() * 8 + 6}s infinite linear ${Math.random() * 5}s`,
              filter: 'blur(0.5px)',
              boxShadow: '0 0 15px currentColor'
            }}
          />
        ))}
      </div>

      {/* Additional Faster Shooting Stars */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-40"
            style={{
              left: `${Math.random() * 120 - 20}%`,
              top: `${Math.random() * 120 - 20}%`,
              width: `${Math.random() * 16 + 8}px`,
              height: `${Math.random() * 16 + 8}px`,
              background: `radial-gradient(circle, rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.9) 0%, rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5) 40%, transparent 100%)`,
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `flyingStar ${Math.random() * 4 + 3}s infinite linear ${Math.random() * 3}s`,
              filter: 'blur(0.2px)',
              boxShadow: '0 0 20px currentColor'
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

      {/* Enhanced Particle System */}
      <div className="absolute inset-0">
        {[...Array(120)].map((_, i) => (
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
                         i % 7 === 5 ? '#8000ff' : '#ff4080',
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              boxShadow: '0 0 12px currentColor',
              animation: `particle ${Math.random() * 20 + 15}s infinite linear`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Background;
