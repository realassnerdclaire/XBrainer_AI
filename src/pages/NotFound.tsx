
import React from 'react';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-2xl mb-6">Page Not Found</h2>
        <p className="text-gray-300 mb-8">
          The page you're looking for doesn't exist in our neural network.
        </p>
        <Button 
          onClick={() => window.location.href = '/'}
          className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Return Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
