




// Updated component with darker theme, expanded gallery, video + voice sections
// Replace asset paths with actual files you have

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function GadedeSegbefiaPortfolio() {
  const [active, setActive] = useState("home");
  const sections = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { root: null, rootMargin: "-30% 0px -60% 0px", threshold: 0.2 }
    );

    Object.values(sections.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const nav = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "media", label: "Media" },
    { id: "videos", label: "Videos" },
    { id: "voice", label: "Voice" },
    { id: "contact", label: "Contact" },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const sectionRef = (el, id) => (sections.current[id] = el);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen text-gray-200 bg-[#0a0a0f] font-sans antialiased">
      {/* NAV */}
      <header className="fixed w-full z-40 top-4 left-0 px-6">
        <nav className="backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl shadow-lg mx-auto max-w-6xl p-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => scrollTo("home")} aria-label="Go home" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-rose-400 shadow">
                <img src="/assets/ITC-90.jpg" className="w-full h-full object-cover" />
              </div>
              <div className="text-sm">
                <div className="font-semibold text-white">Gadede Aku Segbefia</div>
                <div className="text-xs text-gray-300">Actor · Voice Over</div>
              </div>
            </button>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {nav.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all hover:text-rose-400 ${active === n.id ? "text-rose-300 bg-white/10" : "text-gray-300"}`}
              >
                {n.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="mailto:gadedesegbefia1@gmail.com" className="hidden md:block px-4 py-2 rounded-lg bg-rose-600 text-white text-sm font-medium hover:bg-rose-700">Book / Contact</a>
          </div>
        </nav>
      </header>

      <main className="pt-28">

        {/* HOME */}
    <section
  id="home"
  ref={(el) => sectionRef(el, "home")}
  className="relative w-full px-6 py-28 min-h-screen flex items-center bg-black"
>
  {/* Background Video */}
  <div className="absolute inset-0 overflow-hidden">
<iframe
  src="https://player.vimeo.com/video/1143827126?autoplay=1&loop=1"
  frameBorder="0"
  allow="autoplay; fullscreen"
  className="w-full h-full absolute top-0 left-0 object-cover"
></iframe>


    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/60"></div>
  </div>

  {/* Foreground content */}
  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center z-10">
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
    >
      <p className="text-sm uppercase tracking-wider text-rose-300 font-semibold">
        Gadede Aku Segbefia
      </p>
      <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-white">
        Actor · Voice Over Artiste
        <span className="block text-2xl md:text-3xl text-gray-200 mt-2">
          Stage & Screen Performer
        </span>
      </h1>
      <p className="mt-6 text-lg text-gray-300 italic">
        "Doing the Lord's work through arts."
      </p>
      <p className="mt-4 text-gray-300 max-w-xl">
        With more than a decade of experience...
      </p>

      <div className="mt-6 flex gap-3">
        <button
          onClick={() => scrollTo("about")}
          className="px-5 py-3 rounded-lg bg-rose-600 text-white shadow hover:bg-rose-700"
        >
          About Gadede
        </button>
        <button
          onClick={() => scrollTo("media")}
          className="px-5 py-3 rounded-lg border border-rose-400 text-gray-200 hover:bg-white/10"
        >
          View Media
        </button>
      </div>
    </motion.div>

  </div>
</section>

{/* ARTIST STATEMENT */}
<section id="artist-statement" className="max-w-6xl mx-auto px-6 py-24">
<h2 className="text-3xl font-bold text-white mb-12">Artist Statement</h2>
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
<img src="/assets/PRM_3938 (1).jpg" className="w-full h-full object-cover" />
</div>
<div>
<p className="text-gray-300 leading-relaxed text-lg">"Acting gives me the freedom to escape the limitations of my world and embrace the fullness of other lives. Every character is a doorway into understanding humanity, and every performance is an opportunity to tell stories that matter. My craft is rooted in authenticity, courage, and curiosity. I honour the diversity of African stories and use my voice; both spoken and poetic to bring them to life."</p>
<p className="text-rose-400 font-semibold text-xl mt-6">— Gadede Aku Segbefia</p>
</div>
</div>
</section>

        {/* ABOUT */}
        <section id="about" className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <img src="/assets/PRM_3773.jpg" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">About Gadede</h2>
            <p className="mt-4 text-gray-300">Gadede Aku Segbefia is a Ghanaian actor and voice over artiste with over 10 years of professional experience. She is a freelance performer and a guest actor with the Ghana Drama Company (Abibigroma), resident at the National Theatre of Ghana.
Her love for performance began in secondary school as a form of liberation, a space where she could be expressive, free, and fully herself. Coming from a strict family environment where stereotypes and societal expectations defined a woman’s life, acting became her way of breaking boundaries and discovering identity.
She studied theatre for four years at the tertiary level, deepening her knowledge and refining her craft. Though she briefly worked in the corporate world due to limited industry opportunities, she made a bold decision in 2021 to return to acting full-time pursuing her passion with renewed purpose.
Today, Gadede’s work spans stage, screen, voice performance, and commercial storytelling. Her artistry is shaped by truth, freedom, and a deep belief in the power of narrative to heal, inspire, and transform.
</p>
            <p className="mt-4 text-gray-300">Her performances balance emotional depth, faith-driven passion, and artistic discipline.</p>
          </div>
        </section>

        {/* EXPERIENCE */}



<section id="experience" className="max-w-6xl mx-auto px-6 py-24">
<h2 className="text-3xl font-bold text-white mb-12">Experience</h2>


<div className="grid md:grid-cols-2 gap-12 items-start">
<div>
<h3 className="text-xl font-semibold text-rose-400">Stage & Theatre</h3>
<ul className="mt-4 space-y-3 text-gray-300">
<li>• The Black Star (Teacher of Africa) — Supporting Actor (Sept. 2025)</li>
<li>• Dilemma of a Ghost — Lead (2020–Present)</li>
<li>• Song of a Pharaoh — Supporting Actor (2025)</li>
<li>• In the Chest of a Woman — Lead (2024/2025)</li>
<li>• Honeymoon Hotel — Supporting Actor (2025)</li>
</ul>


<h3 className="text-xl font-semibold text-rose-400 mt-8">Television</h3>
<ul className="mt-4 space-y-3 text-gray-300">
<li>• GTV Breakfast Show — Host (2014–2015)</li>
<li>• EBN News — Host / Producer (2018)</li>
<li>• TV3 Talented Kids S6 — Production Assistant (2016)</li>
<li>• Celebrations (TV3) — Production Assistant (2016)</li>
<li>• Spotlight (TV3) — Production Assistant (2016)</li>
</ul>


<h3 className="text-xl font-semibold text-rose-400 mt-8">Film</h3>
<ul className="mt-4 space-y-3 text-gray-300">
<li>• No Man of God — Supporting Actor (2025)</li>
<li>• SEVSU — Supporting Actor (2022)</li>
<li>• Gun Point — Supporting Actor (2021)</li>
<li>• Butterfly Sting — Lead (2023)</li>
<li>• Accra Medic (S1 & S2) — Supporting Actor (2021/2023)</li>
</ul>


<h3 className="text-xl font-semibold text-rose-400 mt-8">Voice Over</h3>
<ul className="mt-4 space-y-3 text-gray-300">
<li>• MoMo Consumer Promo (Radio) — Supporting (2025)</li>
<li>• MTN SIM Card Awareness Promo (Radio) — Supporting (2025)</li>
<li>• GCB Digital Salary Advance Promo (Radio) — Lead (2025)</li>
<li>• Ecobank Promo — Lead (2024)</li>
<li>• Stanbic Bank Explainer (Radio) — Lead (2024)</li>
</ul>
</div>


<div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
<img src="/assets/PRM_3742.jpg" className="w-full h-full object-cover" />
</div>
</div>
</section>


{/* EXPERIENCE */}
<section id="experience" className="max-w-6xl mx-auto px-6 py-24">
</section>

        {/* MEDIA — now expanded with more images */}
        <section id="media" ref={(el) => sectionRef(el, "media")} className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold text-white">Media & Gallery</h2>
          <p className="mt-2 text-gray-400 max-w-prose">Headshots, stills, behind‑the‑scenes and more.</p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {["ITC-70.jpg", "ITC-10.jpg", "ITC-115.jpg", "ITC-5.jpg", "ITC-151.jpg", "ITC-122.jpg", "PRM_3764.jpg", "PRM_3954-Edit.jpg","PRM_3962-Edit.jpg"].map((img) => (
              <div key={img} className="rounded-2xl overflow-hidden shadow-lg bg-white/5 border border-white/10">
                <img src={`/assets/${img}`} className="w-full h-64 object-cover" />
              </div>
            ))}
          </div>
        </section>


        {/* VIDEOS */}
        <section id="videos" ref={(el) => sectionRef(el, "videos")} className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-rose-300">Videos</h2>
          <p className="text-gray-400 mt-2">Showreels & performance clips.</p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe className="w-full h-64" src="https://www.youtube.com/embed/tgbNymZ7vqY" allowFullScreen></iframe>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe className="w-full h-64" src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowFullScreen></iframe>
            </div>
          </div>
        </section>

        {/* VOICE */}
   {/* VOICE */}
<section id="voice" ref={(el) => sectionRef(el, "voice")} className="max-w-6xl mx-auto px-6 py-24">
<h2 className="text-3xl font-bold text-white">Voice Samples</h2>
<p className="mt-2 text-gray-400">Voice‑over reels and narration samples.</p>

<div className="mt-10 grid md:grid-cols-2 gap-8">
  {[
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  ].map((v) => (
    <div key={v} className="rounded-2xl bg-white/5 border border-white/10 p-6">
      <audio controls className="w-full">
        <source src={v} type="audio/mpeg" />
      </audio>
    </div>
  ))}
</div>

</section>

        {/* CONTACT — unchanged except dark theme */}


        {/* CONTACT */}
        <section id="contact" ref={(el) => sectionRef(el, "contact")} className="max-w-6xl mx-auto px-6 py-20">
          <div className="bg-black/40 border border-white/10 rounded-2xl p-10 shadow-lg">
            <h2 className="text-3xl font-bold text-rose-300">Contact / Booking</h2>
            <p className="mt-2 text-gray-300">For bookings, interviews, collaborations:</p>
            <ul className="mt-4 space-y-2 text-gray-300 text-sm">
              <li><strong>Email:</strong> <a href="mailto:gadedesegbefia1@gmail.com" className="text-rose-400">gadedesegbefia1@gmail.com</a></li>
            </ul>
          </div>
        </section>

      </main>
    </div>
  );
}



