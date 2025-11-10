import React from 'react';

interface ErrorMicroscopeProps {
  className?: string;
}

const ErrorMicroscope: React.FC<ErrorMicroscopeProps> = ({ className = '' }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 800 800" 
      fill="none"
      className={className}
    >
      <style jsx>{`
        .primary { fill: currentColor; }
        .secondary { fill: currentColor; opacity: 0.8; }
        .light { fill: currentColor; opacity: 0.3; }
        .medium { fill: currentColor; opacity: 0.5; }
        .dark { fill: currentColor; opacity: 0.7; }
        .outline { stroke: currentColor; stroke-width: 2; }
        .glass { fill: currentColor; fill-opacity: 0.3; }
        .error { fill: #ef4444; }
      `}</style>
      
      {/* Base of microscope */}
      <path className="primary outline" d="M300 650H500C550 650 580 630 580 600C580 570 550 550 500 550H300C250 550 220 570 220 600C220 630 250 650 300 650Z" />
      <path className="secondary" d="M250 600C250 585 270 575 300 575H500C530 575 550 585 550 600C550 615 530 625 500 625H300C270 625 250 615 250 600Z" />
      
      {/* Main stem */}
      <path className="dark outline" d="M360 550V250C360 240 370 230 380 230H420C430 230 440 240 440 250V550" />
      <path className="secondary" d="M380 550V250C380 245 385 240 390 240H410C415 240 420 245 420 250V550" />
      
      {/* Eyepiece */}
      <path className="primary outline" d="M350 230H450C460 230 470 220 470 210V150C470 140 460 130 450 130H350C340 130 330 140 330 150V210C330 220 340 230 350 230Z" />
      <path className="medium" d="M350 210H450C455 210 460 205 460 200V150C460 145 455 140 450 140H350C345 140 340 145 340 150V200C340 205 345 210 350 210Z" />
      
      {/* Eyepiece lens */}
      <circle className="glass outline" cx="400" cy="180" r="20" />
      
      {/* Stage and objective */}
      <path className="primary outline" d="M330 350H470C480 350 490 360 490 370V390C490 400 480 410 470 410H330C320 410 310 400 310 390V370C310 360 320 350 330 350Z" />
      <path className="medium" d="M330 370H470C475 370 480 375 480 380C480 385 475 390 470 390H330C325 390 320 385 320 380C320 375 325 370 330 370Z" />
      
      {/* Objective lens */}
      <path className="light outline" d="M380 410V450C380 455 385 460 390 460H410C415 460 420 455 420 450V410" />
      <circle className="glass outline" cx="400" cy="470" r="15" />
      
      {/* Light source */}
      <path className="primary outline" d="M370 550L320 500H480L430 550" />
      <circle className="light outline" cx="400" cy="520" r="10" />
      
      {/* 404 Symbol */}
      <path className="error" d="M520 320H530L550 280H570V290H555L535 330H520V320Z" />
      <circle className="error" cx="590" cy="305" r="15" />
      <circle cx="590" cy="305" r="10" fill="white" />
      <path className="error" d="M620 320H630L650 280H670V290H655L635 330H620V320Z" />
      
      {/* "Not found" indicators */}
      <path className="error" d="M450 480L460 500L470 480" stroke="#ef4444" strokeWidth="2" />
      <path className="error" d="M440 490H480" stroke="#ef4444" strokeWidth="2" />
      
      {/* Focus adjustment knobs */}
      <circle className="dark outline" cx="330" cy="320" r="15" />
      <circle className="medium" cx="330" cy="320" r="5" />
      <circle className="dark outline" cx="470" cy="320" r="15" />
      <circle className="medium" cx="470" cy="320" r="5" />
    </svg>
  );
};

export default ErrorMicroscope;