'use client';

import { motion } from 'framer-motion';

export default function Page() {
  const features = [
    { title: 'Original Artwork', desc: 'Concepts crafted in‑house, from sketch to final master. No stock art.' },
    { title: 'Print‑Perfect Files', desc: '4500×5400 PNG with transparent background. Vector/SVG on request.' },
    { title: 'Brand‑Ready Delivery', desc: 'Mockups, export presets, and a simple commercial license.' },
  ];

  const shots = [
    { title: 'Type & Layout', src: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Retro Color', src: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Minimal Lines', src: 'https://images.unsplash.com/photo-1520975922323-c73521d2edc6?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Nature Motifs', src: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Bold Graphics', src: 'https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Y2K Neon', src: 'https://images.unsplash.com/photo-1554232456-8727aae0cfa4?q=80&w=1600&auto=format&fit=crop' },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#home" className="font-black tracking-tight text-2xl">HUUTSY</a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#work" className="hover:opacity-70">Work</a>
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#process" className="hover:opacity-70">Process</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-neutral-900 hover:bg-neutral-900 hover:text-white transition text-sm">Get in touch</a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Modern T‑Shirt Design Studio
            </h1>
            <p className="mt-5 text-neutral-600 text-lg">
              Huutsy is a creative studio crafting original, print‑ready graphics for apparel brands and
              print‑on‑demand projects. From clean type to bold illustrations, we deliver files that look as good
              on fabric as they do on screen.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="rounded-2xl px-5 py-3 bg-neutral-900 text-white hover:opacity-90">See portfolio</a>
              <a href="#contact" className="rounded-2xl px-5 py-3 border border-neutral-900 hover:bg-neutral-900 hover:text-white">Request a quote</a>
            </div>
            <p className="mt-4 text-sm text-neutral-500">24–48h previews • EN/FR/ES support</p>
          </motion.div>
          <motion.div initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} transition={{duration:0.6, delay:0.1}} className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1520975922323-c73521d2edc6?q=80&w=1600&auto=format&fit=crop" alt="Huutsy hero" className="w-full h-full object-cover"/>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 md:py-16 border-t border-neutral-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div key={i} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4, delay:i*0.05}} className="p-6 rounded-3xl border bg-neutral-50">
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section id="work" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-3xl md:text-4xl font-bold">Selected Work</h2>
            <a href="#contact" className="text-sm underline underline-offset-4">Request similar designs</a>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {shots.map((p, i) => (
              <motion.figure key={i} initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.03}} className="group overflow-hidden rounded-3xl border bg-white">
                <img src={p.src} alt={p.title} className="w-full h-64 object-cover group-hover:scale-105 transition"/>
                <figcaption className="p-3 text-sm text-neutral-600 flex items-center justify-between">
                  <span>{p.title}</span>
                  <span className="opacity-60">Print‑ready</span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 border-t border-neutral-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">About Huutsy</h2>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              We build capsule collections around trends (Y2K, Japandi, retro, expressive type) and timeless themes.
              Every graphic is crafted for clarity on fabric, limited color counts, and a consistent brand voice.
            </p>
            <ul className="mt-6 space-y-2 text-neutral-700 text-sm list-disc pl-5">
              <li>Deliverables: 4500×5400 PNG / SVG / AI</li>
              <li>Mockups included (lifestyle & flat)</li>
              <li>Commercial license • Strict copyright compliance</li>
            </ul>
          </div>
          <div className="p-6 rounded-3xl border bg-neutral-50">
            <h3 className="font-semibold">Services</h3>
            <ul className="mt-3 text-sm text-neutral-700 space-y-2">
              <li>• 10‑design starter packs</li>
              <li>• Logo refresh & vectorization</li>
              <li>• Listing copy & keyword audit</li>
              <li>• Art direction for collections</li>
            </ul>
            <div className="mt-6">
              <a href="#contact" className="inline-block rounded-2xl px-5 py-3 bg-neutral-900 text-white hover:opacity-90">Start a project</a>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Process in 4 steps</h2>
          <ol className="mt-6 grid md:grid-cols-4 gap-4 text-sm">
            {["Brief & niches","Moodboard & directions","Design & print checks","Delivery & mockups"].map((step, i) => (
              <li key={i} className="p-5 rounded-3xl border bg-white">
                <div className="w-8 h-8 rounded-full border flex items-center justify-center font-semibold mb-3">{i+1}</div>
                <p className="text-neutral-700">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 border-t border-neutral-200 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Let’s work together ✉️</h2>
          <p className="mt-4 text-neutral-700">Tell us what you want to create and we’ll reply within 24–48h.</p>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <a href="mailto:support@huutsy.com" className="rounded-2xl border p-4 hover:bg-neutral-900 hover:text-white transition">support@huutsy.com</a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="rounded-2xl border p-4 hover:bg-neutral-900 hover:text-white transition">Instagram</a>
            <a href="https://www.behance.net/" target="_blank" rel="noreferrer" className="rounded-2xl border p-4 hover:bg-neutral-900 hover:text-white transition">Behance</a>
          </div>
          <p className="mt-6 text-xs text-neutral-500">Huutsy • All rights reserved</p>
        </div>
      </section>

      <footer className="py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
          <p>© {new Date().getFullYear()} Huutsy. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:opacity-70">Privacy</a>
            <a href="#" className="hover:opacity-70">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
