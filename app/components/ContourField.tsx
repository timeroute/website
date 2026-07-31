export default function ContourField() {
  return (
    <div className="hero-plane" aria-hidden="true">
      <svg
        className="absolute inset-0 h-full w-full contour-layer"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="terrainWash" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1f6f78" stopOpacity="0.08" />
            <stop offset="55%" stopColor="#7e95a3" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#d4654a" stopOpacity="0.07" />
          </linearGradient>
        </defs>

        <rect width="1440" height="900" fill="url(#terrainWash)" />

        {[
          "M-40 720 C 180 660, 320 780, 520 700 S 860 560, 1100 620 S 1380 760, 1520 700",
          "M-40 640 C 200 580, 360 700, 560 620 S 900 480, 1140 540 S 1400 680, 1520 620",
          "M-40 560 C 220 500, 400 620, 600 540 S 940 400, 1180 460 S 1420 600, 1520 540",
          "M-40 480 C 240 420, 440 540, 640 460 S 980 320, 1220 380 S 1440 520, 1520 460",
          "M-40 400 C 260 340, 480 460, 680 380 S 1020 240, 1260 300 S 1460 440, 1520 380",
          "M-40 320 C 280 260, 520 380, 720 300 S 1060 160, 1300 220 S 1480 360, 1520 300",
          "M-40 240 C 300 180, 560 300, 760 220 S 1100 80, 1340 140 S 1500 280, 1520 220",
        ].map((d, i) => (
          <path
            key={d}
            d={d}
            stroke="#1f6f78"
            strokeOpacity={0.1 + i * 0.035}
            strokeWidth={1.2}
          />
        ))}

        {/* Meridian / parallel grid — cartographic vernacular */}
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={`v-${i}`}
            x1={80 + i * 120}
            y1="0"
            x2={80 + i * 120}
            y2="900"
            stroke="#152028"
            strokeOpacity="0.04"
            strokeWidth="1"
          />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <line
            key={`h-${i}`}
            x1="0"
            y1={60 + i * 110}
            x2="1440"
            y2={60 + i * 110}
            stroke="#152028"
            strokeOpacity="0.035"
            strokeWidth="1"
          />
        ))}

        <circle
          className="meridian-glow"
          cx="1080"
          cy="260"
          r="180"
          fill="#1f6f78"
          fillOpacity="0.08"
        />
        <circle
          cx="1080"
          cy="260"
          r="8"
          fill="#d4654a"
          fillOpacity="0.85"
        />
        <circle
          cx="1080"
          cy="260"
          r="22"
          stroke="#d4654a"
          strokeOpacity="0.45"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}
