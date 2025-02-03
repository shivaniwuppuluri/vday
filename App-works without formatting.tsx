import React, { useState } from 'react';

const ValentinePage = () => {
  const [noCount, setNoCount] = useState(0);
  const [showHugging, setShowHugging] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  
  const messages = [
    "Will you be my valentine?",
    "Aah i think you havent seen the option correctly. Try again.",
    "ohoo wrong answer, you really cant see the next option?",
    "Think again, I am cute",
    "woww you are really determined to tell no uh!",
    "Well, you are out of options now."
  ];

  const getRandomPosition = () => {
    const maxX = Math.max(window.innerWidth - 150, 0);
    const maxY = Math.max(window.innerHeight - 100, 0);
    
    return {
      x: Math.max(20, Math.floor(Math.random() * maxX)),
      y: Math.max(20, Math.floor(Math.random() * maxY))
    };
  };

  const handleNo = () => {
    setNoCount(prev => prev + 1);
    setNoButtonPosition(getRandomPosition());
  };

  const handleYes = () => {
    setShowHugging(true);
  };

  return (
    <div className="min-h-screen bg-pink-100 p-4 relative overflow-hidden">
      {!showHugging ? (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-4xl font-bold text-pink-600 mb-8 text-center">
            {messages[Math.min(noCount, messages.length - 1)]}
          </h1>
          
          {/* Single Bear */}
          <div className="w-48 h-48">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='50' fill='%23CC8E69'/%3E%3Ccircle cx='80' cy='90' r='10' fill='%234A2F24'/%3E%3Ccircle cx='120' cy='90' r='10' fill='%234A2F24'/%3E%3Ccircle cx='100' cy='110' r='8' fill='%234A2F24'/%3E%3Ccircle cx='70' cy='60' r='20' fill='%23CC8E69'/%3E%3Ccircle cx='130' cy='60' r='20' fill='%23CC8E69'/%3E%3Cpath d='M 80 120 Q 100 140 120 120' stroke='%234A2F24' stroke-width='4' fill='none'/%3E%3C/svg%3E"
              alt="Cute bear"
              className="w-full h-full"
            />
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-4">
            <button 
              onClick={handleYes}
              className={`px-6 py-3 text-xl rounded-full bg-pink-500 text-white hover:bg-pink-600 transition-all
                ${noCount > 0 ? 'animate-pulse' : ''}`}
              style={{
                opacity: 1 + (noCount * 0.2),
                transform: `scale(${1 + noCount * 0.3})`,
                fontSize: `${Math.min(24 + noCount * 4, 40)}px`,
                transition: 'all 0.3s ease-in-out'
              }}
            >
              Yes
            </button>
            
            {noCount < 5 && (
              <button 
                onClick={handleNo}
                className={`px-6 py-3 text-xl rounded-full bg-gray-500 text-white hover:bg-gray-600 transition-all
                  ${noCount > 0 ? 'absolute' : ''}`}
                style={{
                  opacity: Math.max(0.3, 1 - (noCount * 0.15)),
                  transform: `scale(${Math.max(0.6, 1 - noCount * 0.08)})`,
                  left: noCount > 0 ? `${noButtonPosition.x}px` : 'auto',
                  top: noCount > 0 ? `${noButtonPosition.y}px` : 'auto',
                  transition: 'all 0.3s ease-in-out'
                }}
              >
                No
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-4xl font-bold text-pink-600 mb-8">
            Yay! Happy Valentine's Day! ❤️
          </h1>
          {/* Hugging Bears */}
          <div className="w-96 h-48">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Cg transform='translate(-30, 0)'%3E%3Ccircle cx='100' cy='100' r='50' fill='%23CC8E69'/%3E%3Ccircle cx='80' cy='90' r='10' fill='%234A2F24'/%3E%3Ccircle cx='120' cy='90' r='10' fill='%234A2F24'/%3E%3Ccircle cx='100' cy='110' r='8' fill='%234A2F24'/%3E%3Ccircle cx='70' cy='60' r='20' fill='%23CC8E69'/%3E%3Cpath d='M 80 120 Q 100 140 120 120' stroke='%234A2F24' stroke-width='4' fill='none'/%3E%3C/g%3E%3Cg transform='translate(130, 0)'%3E%3Ccircle cx='100' cy='100' r='50' fill='%23CC8E69'/%3E%3Ccircle cx='80' cy='90' r='10' fill='%234A2F24'/%3E%3Ccircle cx='120' cy='90' r='10' fill='%234A2F24'/%3E%3Ccircle cx='100' cy='110' r='8' fill='%234A2F24'/%3E%3Ccircle cx='130' cy='60' r='20' fill='%23CC8E69'/%3E%3Cpath d='M 80 120 Q 100 140 120 120' stroke='%234A2F24' stroke-width='4' fill='none'/%3E%3C/g%3E%3Cpath d='M 200 70 C 220 30 260 30 260 70 C 260 90 230 110 200 130 C 170 110 140 90 140 70 C 140 30 180 30 200 70' fill='%23FF6B6B'/%3E%3C/svg%3E"
              alt="Hugging bears"
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ValentinePage;