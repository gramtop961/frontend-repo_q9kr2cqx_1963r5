import { Calendar, Users, FileText, Image as ImageIcon, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

function Timeline() {
  const entries = [
    { t: 'Opening Decree', d: 'Registration Opens', day: '1 Shawwal' },
    { t: 'Scholarly Briefing', d: 'Rules & Formats', day: '5 Shawwal' },
    { t: 'Trials of Ingenuity', d: 'Qualifier Rounds', day: '12–14 Shawwal' },
    { t: 'Grand Majlis', d: 'Final Exhibition & Awards', day: '20 Shawwal' },
  ];
  return (
    <div className="rounded-xl border border-amber-400/20 bg-[#0f263f]/60 p-6 shadow-xl">
      <div className="mb-4 flex items-center gap-2 text-amber-200">
        <Calendar className="h-5 w-5" />
        <h3 className="font-serif text-2xl">Illustrated Timeline</h3>
      </div>
      <div className="rounded-lg border border-[#c0a575] bg-[#f5e6c8] p-5 text-[#3a2f20]">
        <ol className="relative ml-3 space-y-6">
          {entries.map((e, i) => (
            <li key={i} className="">
              <div className="absolute -left-3 mt-1 h-2 w-2 rounded-full bg-[#7a5b2a]" />
              <div className="rounded-md bg-[#fff6e6] p-3 shadow">
                <div className="text-xs uppercase tracking-wide text-[#7a5b2a]">{e.day}</div>
                <div className="font-semibold text-[#3a2f20]">{e.t}</div>
                <div className="text-sm text-[#57462a]">{e.d}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function Registration() {
  return (
    <div className="rounded-xl border border-emerald-400/20 bg-[#0f263f]/60 p-6 shadow-xl">
      <h3 className="mb-3 flex items-center gap-2 font-serif text-2xl text-emerald-200">
        <FileText className="h-5 w-5" /> Registration
      </h3>
      <p className="text-amber-100/90">Present your letter of intent and enlist your scholars.</p>
      <a
        href="#contact"
        className="mt-4 inline-flex items-center gap-2 rounded-lg border-2 border-amber-600 bg-gradient-to-b from-amber-500 to-amber-700 px-5 py-3 text-amber-50 shadow-md"
      >
        <span className="rounded-full bg-amber-800 px-2 py-1 text-xs font-semibold">Seal</span>
        Submit Your Entry
      </a>
    </div>
  );
}

function Council() {
  const council = [
    { name: 'A. Rahman', title: 'Chief Curator' },
    { name: 'Z. Farah', title: 'Master of Ceremonies' },
    { name: 'H. Idris', title: 'Registrar' },
    { name: 'N. Safiya', title: 'Steward of Exhibitions' },
  ];
  return (
    <div className="rounded-xl border border-amber-400/20 bg-[#0f263f]/60 p-6 shadow-xl">
      <div className="mb-4 flex items-center gap-2 text-amber-200">
        <Users className="h-5 w-5" />
        <h3 className="font-serif text-2xl">The Council of Scholars</h3>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {council.map((m, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center rounded-lg border border-amber-300/20 bg-[#112a45]/60 p-4 text-center"
          >
            <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-amber-300/30 to-amber-600/20 text-2xl font-bold text-amber-200">
              {m.name.split(' ').map((p) => p[0]).join('')}
            </div>
            <div className="font-semibold text-amber-100">{m.name}</div>
            <div className="text-xs text-amber-200/80">{m.title}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <div className="rounded-xl border border-amber-400/20 bg-[#0f263f]/60 p-6 shadow-xl">
      <div className="mb-4 flex items-center gap-2 text-amber-200">
        <ImageIcon className="h-5 w-5" />
        <h3 className="font-serif text-2xl">Hall of Records</h3>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="aspect-video rounded-lg border border-amber-300/20 bg-[linear-gradient(135deg,rgba(251,191,36,0.08),transparent)]" />
        ))}
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div id="contact" className="rounded-xl border border-amber-400/20 bg-[#0f263f]/60 p-6 shadow-xl">
      <div className="mb-4 flex items-center gap-2 text-amber-200">
        <Mail className="h-5 w-5" />
        <h3 className="font-serif text-2xl">Message to the Scribes</h3>
      </div>
      <form className="grid gap-3 md:grid-cols-2">
        <div className="md:col-span-1">
          <label className="mb-1 block text-sm text-amber-200">Your Name</label>
          <input className="w-full rounded-md border border-amber-300/30 bg-[#10263f] px-3 py-2 text-amber-100 placeholder:text-amber-200/50 focus:outline-none focus:ring-2 focus:ring-amber-400/50" placeholder="Ibn Sina" />
        </div>
        <div className="md:col-span-1">
          <label className="mb-1 block text-sm text-amber-200">E-mail</label>
          <input type="email" className="w-full rounded-md border border-amber-300/30 bg-[#10263f] px-3 py-2 text-amber-100 placeholder:text-amber-200/50 focus:outline-none focus:ring-2 focus:ring-amber-400/50" placeholder="scholar@academy.org" />
        </div>
        <div className="md:col-span-2">
          <label className="mb-1 block text-sm text-amber-200">Message</label>
          <textarea rows={5} className="w-full rounded-md border border-amber-300/30 bg-[#10263f] px-3 py-2 text-amber-100 placeholder:text-amber-200/50 focus:outline-none focus:ring-2 focus:ring-amber-400/50" placeholder="Write upon the scroll..." />
        </div>
        <div className="md:col-span-2">
          <button type="submit" className="inline-flex items-center gap-2 rounded-lg border-2 border-emerald-500/60 bg-gradient-to-b from-emerald-500 to-emerald-700 px-5 py-2 text-emerald-50 shadow">
            Dispatch
          </button>
        </div>
      </form>
    </div>
  );
}

export default function Chronicle() {
  return (
    <section id="chronicle" className="relative bg-[#0b1f32] py-20 text-amber-100">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(244,63,94,0.08),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-6xl space-y-10 px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <Timeline />
          <Registration />
        </div>
        <Council />
        <Gallery />
        <Contact />
      </div>
    </section>
  );
}
