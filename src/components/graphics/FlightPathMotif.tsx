type FlightPathMotifProps = {
  className?: string;
};

/**
 * Abstract runway / flight-path motif drawn in code — thin gold lines only.
 * Decorative; inherits its colour from `currentColor` (set to the accent token).
 * No stock imagery, per 02-design.md.
 */
export function FlightPathMotif({ className }: FlightPathMotifProps) {
  return (
    <svg
      aria-hidden
      className={className}
      fill="none"
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
        {/* radar range rings */}
        <circle cx="268" cy="146" r="58" strokeOpacity="0.28" />
        <circle cx="268" cy="146" r="108" strokeOpacity="0.16" />
        <circle cx="268" cy="146" r="162" strokeOpacity="0.08" />

        {/* bearing ticks */}
        <line x1="268" y1="72" x2="268" y2="90" strokeOpacity="0.4" />
        <line x1="268" y1="202" x2="268" y2="220" strokeOpacity="0.4" />
        <line x1="194" y1="146" x2="212" y2="146" strokeOpacity="0.4" />
        <line x1="324" y1="146" x2="342" y2="146" strokeOpacity="0.4" />

        {/* runway in perspective */}
        <path d="M52 372 L150 206" strokeOpacity="0.55" />
        <path d="M118 372 L176 206" strokeOpacity="0.55" />
        <line x1="96" y1="316" x2="150" y2="316" strokeOpacity="0.3" strokeDasharray="2 8" />
        <line x1="108" y1="272" x2="154" y2="272" strokeOpacity="0.3" strokeDasharray="2 8" />

        {/* flight path */}
        <path
          d="M70 340 C 150 268, 214 150, 330 66"
          strokeOpacity="0.65"
          strokeDasharray="3 7"
        />
      </g>

      {/* aircraft glyph at the head of the flight path */}
      <path
        d="M330 66 l-17 5 l7 -7 l-7 -7 z"
        fill="currentColor"
        fillOpacity="0.85"
      />
    </svg>
  );
}
