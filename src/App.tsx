import React, { useState, useEffect, CSSProperties } from 'react';
import './index.css';


const ValentinePage = () => {
  const [noCount, setNoCount] = useState(0);
  const [showHugging, setShowHugging] = useState(false);
  const [buttonStyle, setButtonStyle] = useState<CSSProperties>({});
  
  const messages = [
    "Will you be my valentine?",
    "Why would you pick no? :(",
    "May be you accidentally keep picking no. Try again.",
    "Think again, I am cute",
    "I'll get you burger and fries, what say?",
    "Wow you are really determined to tell no is it!"
  ];

  // Bear SVGs for different emotions
  const bearSVGs = {
    normal: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='50' fill='%23CC8E69'/%3E%3Ccircle cx='80' cy='90' r='10' fill='%234A2F24'/%3E%3Ccircle cx='120' cy='90' r='10' fill='%234A2F24'/%3E%3Ccircle cx='100' cy='110' r='8' fill='%234A2F24'/%3E%3Ccircle cx='70' cy='60' r='20' fill='%23CC8E69'/%3E%3Ccircle cx='130' cy='60' r='20' fill='%23CC8E69'/%3E%3Cpath d='M 80 120 Q 100 140 120 120' stroke='%234A2F24' stroke-width='4' fill='none'/%3E%3C/svg%3E",
    sad: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='50' fill='%23CC8E69'/%3E%3Ccircle cx='80' cy='90' r='10' fill='%234A2F24'/%3E%3Ccircle cx='120' cy='90' r='10' fill='%234A2F24'/%3E%3Ccircle cx='100' cy='110' r='8' fill='%234A2F24'/%3E%3Ccircle cx='70' cy='60' r='20' fill='%23CC8E69'/%3E%3Ccircle cx='130' cy='60' r='20' fill='%23CC8E69'/%3E%3Cpath d='M 80 130 Q 100 110 120 130' stroke='%234A2F24' stroke-width='4' fill='none'/%3E%3C/svg%3E",
    happy: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='50' fill='%23CC8E69'/%3E%3Ccircle cx='80' cy='90' r='10' fill='%234A2F24'/%3E%3Ccircle cx='120' cy='90' r='10' fill='%234A2F24'/%3E%3Ccircle cx='100' cy='110' r='8' fill='%234A2F24'/%3E%3Ccircle cx='70' cy='60' r='20' fill='%23CC8E69'/%3E%3Ccircle cx='130' cy='60' r='20' fill='%23CC8E69'/%3E%3Cpath d='M 80 110 Q 100 150 120 110' stroke='%234A2F24' stroke-width='4' fill='none'/%3E%3C/svg%3E",
    hugging: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 200'%3E%3Cg transform='translate(50, 0)'%3E%3Ccircle cx='100' cy='100' r='50' fill='%23CC8E69'/%3E%3Ccircle cx='80' cy='90' r='10' fill='%234A2F24'/%3E%3Ccircle cx='120' cy='90' r='10' fill='%234A2F24'/%3E%3Ccircle cx='100' cy='110' r='8' fill='%234A2F24'/%3E%3Ccircle cx='70' cy='60' r='20' fill='%23CC8E69'/%3E%3Cpath d='M 80 120 Q 100 140 120 120' stroke='%234A2F24' stroke-width='4' fill='none'/%3E%3C/g%3E%3Cpath d='M 250 70 C 270 30 310 30 310 70 C 310 90 280 110 250 130 C 220 110 190 90 190 70 C 190 30 230 30 250 70' fill='%23FF6B6B'/%3E%3Cg transform='translate(250, 0)'%3E%3Ccircle cx='100' cy='100' r='50' fill='%23CC8E69'/%3E%3Ccircle cx='80' cy='90' r='10' fill='%234A2F24'/%3E%3Ccircle cx='120' cy='90' r='10' fill='%234A2F24'/%3E%3Ccircle cx='100' cy='110' r='8' fill='%234A2F24'/%3E%3Ccircle cx='130' cy='60' r='20' fill='%23CC8E69'/%3E%3Cpath d='M 80 120 Q 100 140 120 120' stroke='%234A2F24' stroke-width='4' fill='none'/%3E%3C/g%3E%3C/svg%3E"
  };

  const getBearImage = () => {
    if (noCount === 1 || noCount === 2) return bearSVGs.sad;
    if (noCount >= 3) return bearSVGs.happy;
    return bearSVGs.normal;
  };

  const getRandomPosition = (): CSSProperties => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    const x = Math.random() * (viewportWidth - 140);
    const y = Math.random() * (viewportHeight - 60);
    
    return {
      position: 'fixed' as const,
      left: `${x}px`,
      top: `${y}px`,
      transform: `scale(${Math.max(0.4, 1 - noCount * 0.2)})`,
      opacity: Math.max(0.3, 1 - noCount * 0.3),
      transition: 'all 0.3s ease',
      zIndex: 50
    };
  };

  const handleNo = () => {
    setNoCount(prev => prev + 1);
    setButtonStyle(getRandomPosition());
  };

  const handleYes = () => {
    setShowHugging(true);
  };

  useEffect(() => {
    if (noCount === 1) {
      setButtonStyle(getRandomPosition());
    }
  }, [noCount]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-pink-200 via-red-100 to-pink-300">
      <div className="relative w-full max-w-lg mx-auto p-4 flex flex-col items-center justify-center min-h-screen">
        {!showHugging ? (
          <>
            <h1 className="text-4xl font-bold text-pink-600 mb-8 text-center">
              {messages[Math.min(noCount, messages.length - 1)]}
            </h1>
            
            <div className="w-40 h-40 mb-8">
              <img
                src={getBearImage()}
                alt="Cute bear"
                className="w-full h-full"
              />
            </div>
            
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={handleYes}
                className="px-8 py-4 text-xl font-bold rounded-full bg-pink-500 text-white hover:bg-pink-600 transform transition-all hover:scale-110"
                style={{
                  transform: `scale(${1 + noCount * 0.2})`,
                  fontSize: `${Math.min(20 + noCount * 2, 32)}px`,
                  zIndex: 40
                }}
              >
                Yes
              </button>
              
              {noCount < 5 && (
                <button
                  onClick={handleNo}
                  className="px-8 py-4 text-xl font-bold rounded-full bg-gray-500 text-white hover:bg-gray-600 transform transition-all hover:scale-110"
                  style={noCount === 0 ? {} : buttonStyle}
                >
                  No
                </button>
              )}
            </div>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold text-pink-600 mb-8 text-center animate-bounce">
              Yay! Happy Valentine's Day! ❤️
            </h1>
            
            <div className="w-96 h-48">
              <img
                src={bearSVGs.hugging}
                alt="Hugging bears"
                className="w-full h-full"
              />
            </div>
          </>
        )}
      </div>

      {/* Copyright text at bottom-right */}
      <footer style={{ 
        position: "fixed", 
        bottom: "10px", 
        right: "10px", 
        fontSize: "14px", 
        backgroundColor: "rgba(0, 0, 0, 0.1)", 
        padding: "5px 10px", 
        borderRadius: "5px" 
      }}>
        © {new Date().getFullYear()} Shivani W
      </footer>
    </div>


        

  );
  
};

export default ValentinePage;