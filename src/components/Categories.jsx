import { Star, Hammer, BookOpen, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const realms = [
  {
    key: 'observatory',
    title: 'The Observatory',
    desc: 'Chart the stars, trace orbits, read the language of the heavens.',
    icon: Star,
    accent: 'from-emerald-500/30 to-emerald-800/30',
  },
  {
    key: 'workshop',
    title: "The Workshop",
    desc: 'Forge, build, test — where engineering finds its form.',
    icon: Hammer,
    accent: 'from-amber-500/30 to-amber-800/30',
  },
  {
    key: 'scholars',
    title: "The Scholars' Chamber",
    desc: 'Debate, research, annotate manuscripts and ideas.',
    icon: BookOpen,
    accent: 'from-sky-500/30 to-sky-800/30',
  },
  {
    key: 'invention',
    title: 'The Invention Court',
    desc: 'Exhibit projects, prototypes, and luminous innovations.',
    icon: Lightbulb,
    accent: 'from-rose-500/30 to-rose-800/30',
  },
];

export default function Categories() {
  return (
    <section id="realms" className="relative bg-[#0a1a2a] py-20 text-amber-100">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="font-serif text-3xl text-amber-300">Realms of Study</h2>
          <p className="mt-2 text-amber-100/80">Choose your chamber of exploration.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {realms.map((r, idx) => (
            <motion.div
              key={r.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-xl border border-amber-300/20 bg-[#0e2339]/60 p-5 shadow-lg backdrop-blur-sm"
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${r.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <span className="rounded-md bg-amber-300/20 p-2 text-amber-200">
                    <r.icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-serif text-xl text-amber-200">{r.title}</h3>
                </div>
                <p className="mt-3 text-sm text-amber-100/90">{r.desc}</p>
                {/* Hover effects: subtle glow and tilt */}
                <motion.div
                  whileHover={{ rotate: -1 }}
                  className="mt-4 h-10 w-24 rounded-full border border-amber-300/30 bg-amber-200/10 text-center text-xs leading-10 text-amber-200 shadow-inner shadow-black/30"
                >
                  Enter
                </motion.div>
              </div>
              {/* Constellation glow */}
              <motion.span
                className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-amber-300/20 blur-2xl"
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
