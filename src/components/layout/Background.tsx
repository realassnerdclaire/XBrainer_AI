
import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="absolute inset-0">
      {/* Deep space multi-layer gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/90 via-purple-950/70 via-blue-950/50 to-black"></div>
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/40 via-violet-800/30 to-transparent"></div>
      
      {/* Natural Moving Rainbow Nebula Throughout Entire Page - More Organic Shapes */}
      <div className="absolute inset-0">
        {/* Main large nebula - top section with very organic, irregular cloud-like shape */}
        <div className="absolute -top-40 left-1/4 transform -translate-x-1/2 w-[2200px] h-[1600px] opacity-12">
          <div className="w-full h-full blur-3xl animate-pulse" 
               style={{ 
                 background: `
                   radial-gradient(ellipse 70% 55% at 25% 80%, rgba(255, 0, 128, 0.3) 0%, transparent 40%),
                   radial-gradient(ellipse 85% 45% at 85% 30%, rgba(255, 128, 0, 0.25) 0%, transparent 35%),
                   radial-gradient(ellipse 60% 75% at 15% 15%, rgba(255, 255, 0, 0.2) 0%, transparent 45%),
                   radial-gradient(ellipse 45% 65% at 95% 85%, rgba(128, 255, 0, 0.3) 0%, transparent 40%),
                   radial-gradient(ellipse 75% 40% at 5% 95%, rgba(0, 255, 128, 0.25) 0%, transparent 35%),
                   radial-gradient(ellipse 50% 80% at 75% 5%, rgba(0, 128, 255, 0.3) 0%, transparent 45%),
                   radial-gradient(ellipse 65% 35% at 90% 55%, rgba(128, 0, 255, 0.25) 0%, transparent 40%)
                 `,
                 clipPath: 'polygon(15% 3%, 35% 0%, 58% 5%, 78% 15%, 92% 28%, 97% 45%, 95% 65%, 88% 82%, 75% 94%, 55% 98%, 35% 95%, 18% 88%, 8% 75%, 3% 58%, 5% 35%, 12% 18%)',
                 animationDuration: '20s',
                 animation: 'nebulaFloat 30s infinite ease-in-out'
               }}>
          </div>
        </div>
        
        {/* Middle section nebula - center area with flowing organic shape */}
        <div className="absolute top-1/3 right-1/8 w-[1800px] h-[1400px] opacity-10">
          <div className="w-full h-full blur-3xl animate-pulse" 
               style={{ 
                 background: `
                   radial-gradient(ellipse 65% 80% at 30% 25%, rgba(0, 255, 255, 0.3) 0%, transparent 40%),
                   radial-gradient(ellipse 80% 35% at 90% 75%, rgba(255, 0, 255, 0.25) 0%, transparent 45%),
                   radial-gradient(ellipse 35% 85% at 5% 85%, rgba(255, 255, 0, 0.2) 0%, transparent 35%),
                   radial-gradient(ellipse 70% 30% at 95% 10%, rgba(255, 128, 0, 0.3) 0%, transparent 40%),
                   radial-gradient(ellipse 25% 95% at 15% 60%, rgba(128, 0, 255, 0.25) 0%, transparent 45%)
                 `,
                 clipPath: 'polygon(20% 5%, 45% 0%, 70% 8%, 88% 22%, 96% 40%, 92% 58%, 83% 78%, 68% 92%, 48% 97%, 28% 93%, 12% 83%, 3% 65%, 6% 45%, 15% 25%)',
                 animationDuration: '25s',
                 animationDelay: '5s',
                 animation: 'nebulaFloat2 35s infinite ease-in-out 5s'
               }}>
          </div>
        </div>
        
        {/* Bottom section nebula - footer area with sprawling organic form */}
        <div className="absolute bottom-0 left-1/4 w-[2000px] h-[1200px] opacity-8">
          <div className="w-full h-full blur-3xl animate-pulse" 
               style={{ 
                 background: `
                   radial-gradient(ellipse 90% 40% at 70% 50%, rgba(128, 0, 255, 0.25) 0%, transparent 45%),
                   radial-gradient(ellipse 35% 90% at 15% 80%, rgba(255, 0, 128, 0.2) 0%, transparent 40%),
                   radial-gradient(ellipse 75% 30% at 95% 15%, rgba(0, 255, 128, 0.25) 0%, transparent 35%),
                   radial-gradient(ellipse 30% 80% at 5% 45%, rgba(0, 128, 255, 0.3) 0%, transparent 40%),
                   radial-gradient(ellipse 65% 35% at 85% 90%, rgba(255, 255, 0, 0.2) 0%, transparent 35%)
                 `,
                 clipPath: 'polygon(10% 8%, 30% 0%, 55% 6%, 75% 18%, 90% 35%, 95% 55%, 88% 75%, 73% 90%, 53% 97%, 33% 92%, 15% 82%, 5% 65%, 8% 45%, 12% 25%)',
                 animationDuration: '28s',
                 animationDelay: '10s',
                 animation: 'nebulaFloat3 40s infinite ease-in-out 10s'
               }}>
          </div>
        </div>
        
        {/* Additional nebula clusters for full coverage */}
        <div className="absolute top-2/3 -left-40 w-[1400px] h-[1000px] opacity-6">
          <div className="w-full h-full blur-3xl animate-pulse" 
               style={{ 
                 background: `
                   radial-gradient(ellipse 80% 50% at 60% 60%, rgba(255, 128, 0, 0.2) 0%, transparent 40%),
                   radial-gradient(ellipse 40% 90% at 15% 85%, rgba(255, 255, 0, 0.25) 0%, transparent 35%),
                   radial-gradient(ellipse 70% 35% at 90% 20%, rgba(128, 255, 0, 0.2) 0%, transparent 30%)
                 `,
                 clipPath: 'polygon(25% 3%, 50% 0%, 75% 12%, 90% 30%, 95% 50%, 88% 70%, 75% 85%, 50% 95%, 25% 88%, 10% 70%, 5% 50%, 10% 30%)',
                 animationDuration: '22s',
                 animationDelay: '3s',
                 animation: 'nebulaFloat4 32s infinite ease-in-out 3s'
               }}>
          </div>
        </div>

        <div className="absolute top-1/6 -right-60 w-[1600px] h-[1100px] opacity-7">
          <div className="w-full h-full blur-3xl animate-pulse" 
               style={{ 
                 background: `
                   radial-gradient(ellipse 75% 45% at 35% 55%, rgba(0, 255, 255, 0.25) 0%, transparent 40%),
                   radial-gradient(ellipse 35% 80% at 85% 15%, rgba(128, 0, 255, 0.2) 0%, transparent 35%),
                   radial-gradient(ellipse 80% 30% at 10% 90%, rgba(255, 0, 255, 0.25) 0%, transparent 30%)
                 `,
                 clipPath: 'polygon(20% 5%, 45% 0%, 70% 10%, 85% 25%, 95% 45%, 90% 65%, 80% 80%, 60% 92%, 40% 95%, 20% 88%, 8% 75%, 3% 55%, 8% 35%, 15% 20%)',
                 animationDuration: '18s',
                 animationDelay: '8s',
                 animation: 'nebulaFloat5 28s infinite ease-in-out 8s'
               }}>
          </div>
        </div>

        {/* Additional scattered nebula for more coverage */}
        <div className="absolute top-1/2 left-1/2 w-[1200px] h-[800px] opacity-5">
          <div className="w-full h-full blur-3xl animate-pulse" 
               style={{ 
                 background: `
                   radial-gradient(ellipse 60% 70% at 40% 30%, rgba(255, 64, 128, 0.2) 0%, transparent 35%),
                   radial-gradient(ellipse 40% 50% at 80% 70%, rgba(64, 255, 128, 0.25) 0%, transparent 30%),
                   radial-gradient(ellipse 70% 40% at 20% 80%, rgba(128, 64, 255, 0.2) 0%, transparent 35%)
                 `,
                 clipPath: 'polygon(30% 8%, 55% 2%, 78% 15%, 92% 32%, 95% 52%, 88% 72%, 75% 88%, 52% 95%, 28% 90%, 12% 75%, 5% 52%, 12% 32%)',
                 animationDuration: '26s',
                 animationDelay: '12s',
                 animation: 'nebulaFloat6 36s infinite ease-in-out 12s'
               }}>
          </div>
        </div>
      </div>

      {/* Enhanced Star Field */}
      <div className="absolute inset-0">
        {[...Array(400)].map((_, i) => (
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

      {/* Very Transparent Colorful Flying Stars */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-4"
            style={{
              left: `${Math.random() * 120 - 20}%`,
              top: `${Math.random() * 120 - 20}%`,
              width: `${Math.random() * 12 + 6}px`,
              height: `${Math.random() * 12 + 6}px`,
              background: i % 7 === 0 ? 
                'radial-gradient(circle, rgba(255, 0, 128, 0.08) 0%, rgba(255, 0, 128, 0.02) 50%, transparent 100%)' :
                i % 7 === 1 ?
                'radial-gradient(circle, rgba(0, 255, 255, 0.08) 0%, rgba(0, 255, 255, 0.02) 50%, transparent 100%)' :
                i % 7 === 2 ?
                'radial-gradient(circle, rgba(255, 255, 0, 0.08) 0%, rgba(255, 255, 0, 0.02) 50%, transparent 100%)' :
                i % 7 === 3 ?
                'radial-gradient(circle, rgba(255, 128, 0, 0.08) 0%, rgba(255, 128, 0, 0.02) 50%, transparent 100%)' :
                i % 7 === 4 ?
                'radial-gradient(circle, rgba(128, 255, 0, 0.08) 0%, rgba(128, 255, 0, 0.02) 50%, transparent 100%)' :
                i % 7 === 5 ?
                'radial-gradient(circle, rgba(128, 0, 255, 0.08) 0%, rgba(128, 0, 255, 0.02) 50%, transparent 100%)' :
                'radial-gradient(circle, rgba(255, 64, 128, 0.08) 0%, rgba(255, 64, 128, 0.02) 50%, transparent 100%)',
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `flyingStar ${Math.random() * 15 + 12}s infinite linear ${Math.random() * 10}s`,
              filter: 'blur(0.3px)'
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
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              background: i % 7 === 0 ? '#ff0080' : 
                         i % 7 === 1 ? '#00ffff' :
                         i % 7 === 2 ? '#ffff00' : 
                         i % 7 === 3 ? '#ff8000' :
                         i % 7 === 4 ? '#80ff00' : 
                         i % 7 === 5 ? '#8000ff' : '#ff4080',
              boxShadow: '0 0 8px currentColor',
              animation: `particle ${Math.random() * 25 + 20}s infinite linear`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Background;
