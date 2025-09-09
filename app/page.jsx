'use client';

import { motion } from 'framer-motion';

export default function Page() {
  // Studio pillars (short + confident)
  const features = [
    { title: 'Original Artwork', desc: 'Built in-house from sketch to master. No stock.' },
    { title: 'Print-Perfect Files', desc: '4500×5400 PNG (transparent). Vector/SVG on request.' },
    { title: 'Brand-Ready', desc: 'Mockups, export presets and simple licensing.' },
  ];

  const shots = [
    { title: 'Splash of Color', src: 'https://i.ibb.co/7NKFNZFb/Black-and-White-Minimalist-T-Shirt-Mockup-Instagram-Post-6.png' },
    { title: 'Vivid Peace', src: 'https://i.ibb.co/JF75rYXm/Black-and-White-Minimalist-T-Shirt-Mockup-Instagram-Post-1.png' },
    { title: 'Retro Rainbow', src: 'https://i.ibb.co/XZK32NCL/Black-and-White-Minimalist-T-Shirt-Mockup-Instagram-Post-2.png' },
    { title: 'Electric Pop', src: 'https://i.ibb.co/4nx9Fqw7/Black-and-White-Minimalist-T-Shirt-Mockup-Instagram-Post-3.png' },
    { title: 'Pastel Vibes', src: 'https://i.ibb.co/8nqQBwfs/Black-and-White-Minimalist-T-Shirt-Mockup-Instagram-Post-5.png' },
    { title: 'Bold Geometry', src: 'https://i.ibb.co/Rkb1NWvJ/Black-and-White-Minimalist-T-Shirt-Mockup-Instagram-Post-4.png' },
  ];

  // marquee banner
  const banner = [
    'https://i.ibb.co/PG2j3VMH/Retro-Color-5.png',
    'https://i.ibb.co/hJhZMR86/Retro-Color-4.png',
    'https://i.ibb.co/7tqNcFrq/Retro-Color-2.png',
    'https://i.ibb.co/3504Q9Sk/Retro-Color-3.png',
    'https://i.ibb.co/gbxQD3g1/Retro-Color.png',
    'https://i.ibb.co/Swrh75nS/Retro-Color-1.png',
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-neutral-200/70 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="#home" className="text-xl font-black tracking-tight">huutsy</a>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#work" className="hover:opacity-70">Work</a>
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#studio" className="hover:opacity-70">Studio</a>
            <a href="#process" className="hover:opacity-70">Process</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-900 px-4 py-2 text-sm transition hover:bg-neutral-900 hover:text-white"
          >
            Get in touch
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:grid-cols-2 md:py-28">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1 text-xs uppercase tracking-wide text-neutral-600">
              Apparel Graphics Studio
            </p>
            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
              Print-ready design with a brand point of view.
            </h1>
            <p className="mt-5 text-lg text-neutral-600">
              We craft original graphics for apparel and on-demand platforms—clean type, bold color, and clear
              detail that holds up on fabric.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="rounded-full bg-neutral-900 px-5 py-3 text-white transition hover:opacity-90"
              >
                See portfolio
              </a>
              <a
                href="#contact"
                className="rounded-full border border-neutral-900 px-5 py-3 transition hover:bg-neutral-900 hover:text-white"
              >
                Request a quote
              </a>
            </div>

            <div className="mt-4 flex items-center gap-3 text-sm text-neutral-500">
              <span className="inline-block h-1 w-1 rounded-full bg-neutral-400" />
              24–48h previews
              <span className="inline-block h-1 w-1 rounded-full bg-neutral-400" />
              EN / FR / ES support
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl">
              <img
                src="https://i.ibb.co/j9pRY4Nr/Design-sans-titre-1.png"
                alt="Huutsy hero"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-t border-neutral-200 bg-white py-12 md:py-14">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="mb-2 text-xs uppercase tracking-wide text-neutral-500">Pillar {i + 1}</div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-wide text-neutral-500">Selected Work</p>
              <h2 className="text-3xl font-bold md:text-4xl">Recent studies & drops</h2>
            </div>
            <a href="#contact" className="text-sm underline underline-offset-4">Request similar designs</a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {shots.map((p, i) => (
              <motion.figure
                key={i}
                className="group overflow-hidden rounded-3xl border bg-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
              >
                <div className="overflow-hidden">
                  <img
                    src={p.src}
                    alt={p.title}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <figcaption className="flex items-center justify-between p-3 text-sm text-neutral-700">
                  <span className="font-medium">{p.title}</span>
                  <span className="opacity-60">Print-ready</span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-neutral-200 bg-white py-16">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-wide text-neutral-500">About</p>
            <h3 className="mt-1 text-3xl font-bold md:text-4xl">Huutsy, a design studio for apparel</h3>
            <p className="mt-4 leading-relaxed text-neutral-700">
              We specialize in high-impact graphics for on-demand printing. Files follow industry dimensions,
              optimized palettes and clear scaling, so the result stays crisp on fabric. We combine trend research
              with technical checks to ship artwork that’s upload-ready from day one.
            </p>
            <ul className="mt-6 space-y-2 pl-5 text-sm text-neutral-700">
              <li className="list-disc">4500×5400 PNG (transparent) • Vector (SVG/AI) on request</li>
              <li className="list-disc">Files tested for clarity, contrast & content compliance</li>
              <li className="list-disc">Lifestyle + flat mockups included for instant listings</li>
              <li className="list-disc">Straightforward commercial license</li>
            </ul>
          </div>

          <div className="rounded-3xl border bg-neutral-50 p-6">
            <h4 className="font-semibold">Services</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {['10-design starter packs', 'Logo refresh & vectorization', 'Listing copy & keyword audit', 'Art direction for collections'].map(
                (chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-neutral-300 bg-white px-3 py-1 text-xs text-neutral-700"
                  >
                    {chip}
                  </span>
                ),
              )}
            </div>
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-block rounded-full bg-neutral-900 px-5 py-3 text-white transition hover:opacity-90"
              >
                Start a project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STUDIO (Behance-style) */}
      <section id="studio" className="border-t border-neutral-200 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-wide text-neutral-500">Studio</p>
            <h3 className="mt-1 text-3xl font-bold md:text-4xl">Inside the studio</h3>
            <p className="mt-4 max-w-2xl text-neutral-700">
              Clean, minimal, and built for flow—our space mirrors our work: clarity first with bold accents.
              From concept sprints to pre-press checks, everything happens here.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {/* Tip: if a ibb.co URL doesn’t render, replace with its direct i.ibb.co/... image URL */}
            {[
              { href: 'https://i.ibb.co/xqWk4LfW/3-1.png', src: 'https://i.ibb.co/xqWk4LfW/3-1.png', alt: 'Huutsy Studio view 1' },
              { href: 'https://i.ibb.co/qFRW0tz1/5-1.png', src: 'https://i.ibb.co/qFRW0tz1/5-1.png', alt: 'Huutsy Studio view 2' },
              { href: 'https://i.ibb.co/whrZDMfc/6-1.png',  src: 'https://i.ibb.co/whrZDMfc/6-1.png',  alt: 'Huutsy Studio view 3' },
            ].map((img, i) => (
              <motion.a
                key={i}
                href={img.href}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-3xl border bg-white"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
              >
                <div className="overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-center justify-between p-3 text-sm text-neutral-700">
                  <span className="font-medium">Workspace {i + 1}</span>
                  <span className="opacity-60">Open in new tab</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* LOOPING MARQUEE */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-6xl overflow-hidden px-4">
          <motion.div
            className="flex gap-4"
            initial={{ x: 0 }}
            whileInView={{ x: ['0%', '-50%'] }}
            transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
          >
            {[...banner, ...banner].map((src, i) => (
              <div key={i} className="shrink-0">
                <img
                  src={src}
                  alt={`Banner ${i + 1}`}
                  className="h-28 w-[220px] rounded-xl object-cover shadow-sm sm:h-32 sm:w-[260px]"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-xs uppercase tracking-wide text-neutral-500">Process</p>
          <h4 className="mt-1 text-3xl font-bold md:text-4xl">From brief to upload-ready</h4>

          <ol className="mt-6 grid gap-4 text-sm md:grid-cols-4">
            {['Brief & niches', 'Moodboard & directions', 'Design & print checks', 'Delivery & mockups'].map(
              (step, i) => (
                <li key={i} className="rounded-3xl border bg-white p-5">
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full border font-semibold">
                    {i + 1}
                  </div>
                  <p className="text-neutral-700">{step}</p>
                </li>
              ),
            )}
          </ol>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-neutral-200 bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h5 className="text-3xl font-bold md:text-4xl">Let’s work together ✉️</h5>
          <p className="mt-4 text-neutral-700">Tell us what you want to create and we’ll reply within 24–48h.</p>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <a
              href="mailto:sales@huutsy.com"
              className="rounded-2xl border p-4 transition hover:bg-neutral-900 hover:text-white"
            >
              sales@huutsy.com
            </a>
            <a
              href="https://www.instagram.com/studio_huutsy/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border p-4 transition hover:bg-neutral-900 hover:text-white"
            >
              Instagram
            </a>
            <a
              href="https://www.behance.net/huutsy"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border p-4 transition hover:bg-neutral-900 hover:text-white"
            >
              Behance
            </a>
          </div>

          <p className="mt-6 text-xs text-neutral-500">huutsy • All rights reserved</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-neutral-600 md:flex-row">
          <p>© {new Date().getFullYear()} huutsy. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="opacity-70">SAS 2MANNECY</span>
            <span className="opacity-70">RCS 882337801</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
