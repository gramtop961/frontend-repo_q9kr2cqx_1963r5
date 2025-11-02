import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a1a2a] text-amber-100">
      {/* Starry sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a2a] via-[#0c2238] to-[#0a1a2a]" />

      {/* Subtle geometric pattern (SVG) */}
      <svg className="absolute inset-0 opacity-10" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="geo" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <circle cx="40" cy="40" r="1" fill="#fbbf24" />
            <path d="M0 40H80M40 0V80" stroke="#fbbf24" strokeWidth="0.5" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#geo)" />
      </svg>

      {/* Floating dust motes */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(24)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-amber-200/20 shadow-amber-200/10"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -10, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 6 + Math.random() * 6, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-6xl tracking-wide text-amber-300 sm:text-7xl"
          style={{ fontFamily: 'serif' }}
        >
          AVICENIA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 max-w-2xl text-lg text-amber-100/90"
        >
          “A Celebration of Knowledge, Curiosity & Discovery”
        </motion.p>

        {/* Entrance button as wooden door / scroll */}
        <motion.a
          href="#about"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="group relative mt-10 inline-flex items-center justify-center rounded-lg border-2 border-amber-400/80 bg-gradient-to-b from-amber-700 to-amber-900 px-8 py-4 text-lg font-medium text-amber-100 shadow-[inset_0_0_12px_rgba(0,0,0,.4),0_10px_20px_rgba(0,0,0,.4)]"
          style={{ boxShadow: 'inset 0 0 20px rgba(0,0,0,.5), 0 10px 30px rgba(0,0,0,.4)' }}
        >
          <span className="absolute inset-0 rounded-lg bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.2),transparent_40%)] opacity-60 transition-opacity group-hover:opacity-80" />
          <span className="relative z-10 font-semibold tracking-wide">Enter the House of Wisdom</span>
          {/* Wax seal */}
          <span className="ml-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-600 text-xs font-bold text-amber-50 shadow-inner shadow-amber-900">⟐</span>
        </motion.a>

        {/* Ornate arch frame */}
        <div className="pointer-events-none mt-16 w-full max-w-3xl">
          <div className="mx-auto h-2 w-48 rounded-full bg-amber-400/40 blur-[2px]" />
          <div className="mt-6 rounded-3xl border border-amber-300/20 p-4 backdrop-blur-sm">
            <p className="text-sm text-amber-100/80">
              Step through — a journey into the Islamic Renaissance awaits.
            </p>
          </div>
        </div>
      </div>

      {/* Candle flicker accents */}
      <div className="pointer-events-none absolute bottom-10 left-10">
        <span className="block h-3 w-3 rounded-full bg-amber-300/70 blur-[1px] animate-pulse" />
      </div>
      <div className="pointer-events-none absolute bottom-14 right-10">
        <span className="block h-3 w-3 rounded-full bg-amber-300/70 blur-[1px] animate-pulse" />
      </div>
    </section>
  );
}
