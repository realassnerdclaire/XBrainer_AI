
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowLeft, Brain } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <Brain className="h-24 w-24 text-purple-400 animate-pulse" />
        </div>
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-2xl font-semibold mb-4 text-gray-200">
          Neural Pathway Not Found
        </h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The neural connection you're looking for doesn't exist in our current reality matrix.
        </p>
        <Link to="/">
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to Main Interface
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
