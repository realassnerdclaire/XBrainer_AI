
import React from 'react';
import { Card, CardContent } from '../ui/card';
import { problemCards } from '../../constants/data';

const ProblemCards: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-20">
      {problemCards.map((card, index) => (
        <Card 
          key={index}
          onClick={card.action}
          className="bg-gradient-to-br from-slate-950/98 to-slate-900/95 border-slate-700/80 backdrop-blur-sm hover:from-slate-900/99 hover:to-slate-800/98 transition-all duration-300 group cursor-pointer hover:scale-105 hover:border-slate-600/90 hover:shadow-xl hover:shadow-black/50"
        >
          <CardContent className="p-8 text-center">
            <div className="relative mb-6">
              <card.icon className="h-16 w-16 text-gray-200 mx-auto group-hover:text-white transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-300/20 to-purple-300/20 rounded-full blur-xl group-hover:from-cyan-300/40 group-hover:to-purple-300/40 transition-all duration-300"></div>
            </div>
            <h3 className="text-2xl font-bold text-gray-100 mb-4 group-hover:text-white transition-colors duration-300">{card.title}</h3>
            <p className="text-gray-200 text-lg group-hover:text-gray-100 transition-colors duration-300">{card.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProblemCards;
