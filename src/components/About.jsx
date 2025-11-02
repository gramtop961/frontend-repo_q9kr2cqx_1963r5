import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 bg-[#0b1f32] py-20 text-amber-100">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.08),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-xl border border-amber-400/20 bg-[#0f263f]/60 p-6 shadow-xl"
          >
            <h2 className="font-serif text-3xl text-amber-300">The Story of Avicenia</h2>
            <p className="mt-4 text-amber-100/90">
              Named in honor of Ibn Sīnā — known to the West as Avicenna — this gathering salutes a mind that bridged medicine, philosophy, and the sciences. In the spirit of Bayt al-Ḥikma, the House of Wisdom, we invite seekers to read, to build, to measure the heavens, and to share discoveries with humility and wonder.
            </p>
            <p className="mt-3 text-amber-100/90">
              The Islamic Renaissance was an age of luminous scholarship from Córdoba to Samarkand. Libraries glowed with lantern light; scholars annotated Greek, Persian, and Indian works; artisans forged instruments — astrolabes, sundials, armillary spheres — that guided explorers and dreamers alike. AVICENIA rekindles that flame for a new generation.
            </p>
          </motion.div>

          {/* Manuscript-styled rules */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-xl border border-amber-400/20 bg-gradient-to-b from-[#132a44] to-[#0e233a] p-6 shadow-xl"
          >
            <div className="rounded-lg bg-[#f5e6c8] p-5 text-[#3a2f20] shadow-inner">
              <h3 className="font-serif text-2xl text-[#7a5b2a]">Rules & Guidelines</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed">
                <li>Honor the spirit of inquiry — reference sources where needed.</li>
                <li>Teams may comprise scholars from the same institution.</li>
                <li>Respect time-keeping as you would the movement of the heavens.</li>
                <li>Hardware and materials will be inspected for safety and fairness.</li>
                <li>Exhibitions should be accessible: label diagrams, annotate methods.</li>
              </ul>
              <div className="mt-4 border-t border-[#c0a575] pt-3 text-xs italic text-[#6b542e]">
                Manuscript Note: Organizers may adjust categories and schedules to ensure balance and harmony.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
