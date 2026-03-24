"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";

// Smooth Scroll
function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// Fade
function FadeIn({ children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

// Cursor Glow
function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed w-28 h-28 bg-purple-500 opacity-20 rounded-full blur-2xl pointer-events-none z-50"
      style={{
        transform: `translate(${pos.x - 56}px, ${pos.y - 56}px)`
      }}
    />
  );
}

// 🌌 BACKGROUND IMAGE
function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "radial-gradient(circle at 40% 20%, rgba(124, 58, 237, 0.5), rgba(0, 0, 0, 0.85) 70%)" }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="text-white relative">
      <Background />
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}

// NAVBAR
function Navbar() {
  return (
    <nav className="fixed top-4 w-full flex justify-center z-50">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 px-8 py-3 rounded-full flex gap-8 shadow-lg">

        <h1 className="text-sm font-semibold">Portfolio</h1>

        <button onClick={() => scrollToSection("about")} className="cursor-pointer text-gray-400 hover:text-purple-400 transition">
          About
        </button>

        <button onClick={() => scrollToSection("projects")} className="cursor-pointer text-gray-400 hover:text-purple-400 transition">
          Projects
        </button>

        <button onClick={() => scrollToSection("experience")} className="cursor-pointer text-gray-400 hover:text-purple-400 transition">
          Experience
        </button>

        <button onClick={() => scrollToSection("contact")} className="cursor-pointer text-gray-400 hover:text-purple-400 transition">
          Contact
        </button>

      </div>
    </nav>
  );
}

// HERO
function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 pt-32 gap-16">

      <div className="max-w-xl">
        <p className="text-xs text-purple-400 border border-purple-500/20 px-3 py-1 rounded-full mb-6 inline-block">
          AI • FULL STACK • BUILDER
        </p>

        <h1 className="text-5xl md:text-6xl font-semibold">
          Hi, I'm
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Prathith Shetty
          </span>
        </h1>

        <p className="mt-6 text-gray-400">
          Ann AI-focused full stack developer integrating LLMs,
          vector databases, and modern technologies.
        </p>

        <div className="mt-8 flex gap-4">
          <button onClick={() => scrollToSection("projects")} className="px-6 py-3 bg-purple-500 rounded-lg hover:bg-purple-600 transition cursor-pointer">
            View Work
          </button>

          <button onClick={() => scrollToSection("contact")} className="px-6 py-3 border border-gray-700 rounded-lg hover:border-purple-500 transition cursor-pointer">
            Contact
          </button>
        </div>
      </div>

      {/* IMAGE */}
      <div className="relative bg-white p-3 rounded-xl shadow-lg">
        <img
          src="/profile.jpg.JPG"
          className="w-[260px] md:w-[300px] h-[340px] object-cover rounded-lg border border-gray-200"
          alt="Prathith Shetty"
        />

        <div className="absolute bottom-2 right-2 bg-purple-500 px-3 py-1 rounded-full text-xs">
          Available
        </div>
      </div>

    </section>
  );
}

// ABOUT
function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6">
      <FadeIn>
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl mb-6">About</h2>

          <p className="text-gray-300">
            I am Prathith Shetty, an AIML student at PES University with a strong foundation in web development, Python, and basic game development. I focus on building practical, real-world solutions and continuously improving my technical skills through hands-on projects.

            In addition to my academic work, I have gained business and operational experience by managing accounts using Tally and supporting day-to-day operations in my family’s hotel business. I have also served as a class representative for nearly two years, strengthening my leadership, communication, and organizational abilities.

            My role in handling hotel operations-including coordinating staff, managing customer requirements, and ensuring smooth execution of events-npm has helped me develop strong problem-solving skills and the ability to make effective decisions under pressure.

            I am keen to apply my technical knowledge and leadership experience to create efficient, impactful solutions while continuing to grow as a professional..
          </p>
        </div>
      </FadeIn>
    </section>
  );
}

// PROJECTS
function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <h2 className="text-3xl text-center mb-12">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Tilt>
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h3>The AfterImage</h3>
            <p className="text-gray-400">Hackathon project</p>
          </div>
        </Tilt>

        <Tilt>
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h3>AI Portfolio</h3>
            <p className="text-gray-400">Next.js + AI</p>
          </div>
        </Tilt>
      </div>
    </section>
  );
}

// EXPERIENCE
function Experience() {
  const data = [
    {
      role: "Events Team Member",
      org: "CodeChef PESU",
      time: "2025 - Present",
      desc: "Organized coding contests and workshops."
    },
    {
      role: "Backstage Team",
      org: "Mangobites Club",
      time: "2025 - Present",
      desc: "Handled event logistics and execution."
    }
  ];

  return (
    <section id="experience" className="px-6 py-20">
      <h2 className="text-3xl text-center mb-12">Experience</h2>

      <div className="max-w-3xl mx-auto space-y-6">
        {data.map((item, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
            <p className="text-purple-400 text-xs">{item.time}</p>
            <h3 className="text-xl">{item.role}</h3>
            <p className="text-gray-400 text-sm">{item.org}</p>
            <p className="text-gray-500 mt-2 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// CONTACT
function Contact() {
  return (
    <section id="contact" className="px-6 py-20 text-center">
      <h2 className="text-3xl mb-6">Contact</h2>

      <div className="flex justify-center gap-4">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shettyprathith@gmail.com" target="_blank" className="px-5 py-2 bg-purple-500 rounded-lg">
          Email
        </a>

        <a href="https://github.com/PrathithShetty" className="px-5 py-2 border border-gray-600 rounded-lg">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/prathith-shetty-b09048360/" target="_blank" className="px-5 py-2 border border-gray-600 rounded-lg">
          LinkedIn
        </a>
      </div>
    </section>
  );
}