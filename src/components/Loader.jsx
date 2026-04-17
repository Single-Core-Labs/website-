import './Loader.css'

const Loader = () => {
  return (
    <div className="loader-container">
      <svg className="loader-svg" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="traceGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00e1ff" stopOpacity="0" />
            <stop offset="50%" stopColor="#00e1ff" />
            <stop offset="100%" stopColor="#00e1ff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="traceGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5227ff" stopOpacity="0" />
            <stop offset="50%" stopColor="#5227ff" />
            <stop offset="100%" stopColor="#5227ff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="traceGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3fe9ff" stopOpacity="0" />
            <stop offset="50%" stopColor="#3fe9ff" />
            <stop offset="100%" stopColor="#3fe9ff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="traceGradient4" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff9f9f" stopOpacity="0" />
            <stop offset="50%" stopColor="#ff9f9f" />
            <stop offset="100%" stopColor="#ff9f9f" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Grid */}
        <g className="grid">
          {[...Array(20)].map((_, i) => (
            <line key={`v-${i}`} x1={i * 40} y1="0" x2={i * 40} y2="500" className="grid-line" />
          ))}
          {[...Array(13)].map((_, i) => (
            <line key={`h-${i}`} x1="0" y1={i * 40} x2="800" y2={i * 40} className="grid-line" />
          ))}
        </g>

        {/* Browser Frame */}
        <rect x="50" y="50" width="700" height="400" rx="10" className="browser-frame" />
        <rect x="50" y="50" width="700" height="30" rx="10" className="browser-top" />
        <circle cx="80" cy="65" r="5" fill="#ff5f57" />
        <circle cx="100" cy="65" r="5" fill="#ffbd2e" />
        <circle cx="120" cy="65" r="5" fill="#28c940" />

        {/* Loading Text */}
        <text x="400" y="290" textAnchor="middle" className="loading-text">
          Loading...
        </text>

        {/* Skeleton Elements */}
        <rect x="100" y="130" width="600" height="30" rx="4" className="skeleton" style={{animationDelay: '0s'}} />
        <rect x="100" y="180" width="400" height="20" rx="4" className="skeleton" style={{animationDelay: '0.2s'}} />
        <rect x="100" y="220" width="500" height="20" rx="4" className="skeleton" style={{animationDelay: '0.4s'}} />
        <rect x="100" y="260" width="350" height="20" rx="4" className="skeleton" style={{animationDelay: '0.6s'}} />

        {/* Trace Lines */}
        <path d="M100 350 Q 250 300, 400 350 T 700 350" stroke="url(#traceGradient1)" className="trace-flow" style={{animationDelay: '0s'}} />
        <path d="M100 370 Q 250 320, 400 370 T 700 370" stroke="url(#traceGradient2)" className="trace-flow" style={{animationDelay: '0.5s'}} />
        <path d="M100 390 Q 250 340, 400 390 T 700 390" stroke="url(#traceGradient3)" className="trace-flow" style={{animationDelay: '1s'}} />
        <path d="M100 410 Q 250 360, 400 410 T 700 410" stroke="url(#traceGradient4)" className="trace-flow" style={{animationDelay: '1.5s'}} />
      </svg>
    </div>
  )
}

export default Loader