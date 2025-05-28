export default function Error401() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-400 to-yellow-500 text-black text-center px-4">
        {/* Judul atas */}
        <p className="text-sm font-semibold tracking-widest">WPLOUNGE</p>
  
        {/* 401 ERROR */}
        <h1 className="text-6xl font-extrabold mt-2">401 ERROR</h1>
  
        {/* Stickman SVG */}
        <div className="mt-8">
          <svg
            width="150"
            height="250"
            viewBox="0 0 100 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Head */}
            <circle cx="50" cy="30" r="15" stroke="black" strokeWidth="2" />
            <circle cx="45" cy="25" r="2" fill="black" />
            <circle cx="55" cy="25" r="2" fill="black" />
            <path d="M45 35 Q50 40 55 35" stroke="black" strokeWidth="2" /> {/* frown */}
  
            {/* Body */}
            <line x1="50" y1="45" x2="50" y2="110" stroke="black" strokeWidth="2" />
  
            {/* Arms */}
            <line x1="50" y1="60" x2="20" y2="30" stroke="black" strokeWidth="2" />
            <line x1="50" y1="60" x2="80" y2="30" stroke="black" strokeWidth="2" />
  
            {/* Hands (arrows up) */}
            <polyline points="17,33 20,30 23,33" fill="none" stroke="black" strokeWidth="2" />
            <polyline points="77,33 80,30 83,33" fill="none" stroke="black" strokeWidth="2" />
  
            {/* Legs */}
            <line x1="50" y1="110" x2="30" y2="160" stroke="black" strokeWidth="2" />
            <line x1="50" y1="110" x2="70" y2="160" stroke="black" strokeWidth="2" />
          </svg>
        </div>
  
        {/* Optional: Message or back button */}
        <p className="mt-6 text-sm text-black">
          You are not authorized to view this page.
        </p>
      </div>
    );
  }
  