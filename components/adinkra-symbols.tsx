"use client"

// Adinkra symbols - traditional Ghanaian patterns
export const AdinkraSymbols = {
  // Sankofa - "go back for what you have forgotten"
  Sankofa: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
      <path
        d="M 50 20 Q 70 30 70 50 Q 70 70 50 80 Q 30 70 30 50 Q 30 30 50 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M 50 35 L 55 45 L 45 45 Z" fill="currentColor" />
    </svg>
  ),

  // Adinkrahene - "chief of Adinkra symbols"
  Adinkrahene: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="35" y1="50" x2="65" y2="50" stroke="currentColor" strokeWidth="2" />
      <line x1="50" y1="35" x2="50" y2="65" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),

  // Gye Nyame - "except God"
  GyeNyame: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="50" cy="50" r="10" fill="currentColor" />
      <path
        d="M 50 10 L 55 30 L 75 20 L 60 35 L 80 45 L 60 45 L 70 65 L 50 55 L 30 65 L 40 45 L 20 45 L 40 35 L 25 20 L 45 30 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  ),

  // Akoma - "heart"
  Akoma: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path
        d="M 50 85 C 30 70 20 55 20 45 C 20 30 30 20 40 20 C 45 20 50 23 50 23 C 50 23 55 20 60 20 C 70 20 80 30 80 45 C 80 55 70 70 50 85 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line x1="50" y1="35" x2="50" y2="65" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
}

export function AdinkraPattern({ symbol, className = "" }) {
  const SymbolComponent = AdinkraSymbols[symbol]
  return <div className={`text-primary ${className}`}>{SymbolComponent && SymbolComponent()}</div>
}
