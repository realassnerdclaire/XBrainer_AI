import React from 'react';
import { Check } from 'lucide-react';

const features = [
  'Hardware-Agnostic Integration',
  'Sub-ms Latency',
  'REST / WebSocket / gRPC APIs',
  'AES-GCM Encryption + Forward Secrecy',
  'Autoencoder-Based Anomaly Detection',
];

const TechnicalFeaturesSection: React.FC = () => {
  return (
    <section aria-labelledby="features-heading" className="py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 id="features-heading" className="text-2xl md:text-3xl font-semibold tracking-tight mb-6 text-foreground">
          Technical Features
        </h2>
        <ul className="grid md:grid-cols-2 gap-3 md:gap-4">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${i * 60}ms` }}>
              <Check className="mt-1 h-5 w-5 text-[hsl(var(--brand-plasma))]" />
              <span className="text-foreground/90">{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TechnicalFeaturesSection;
