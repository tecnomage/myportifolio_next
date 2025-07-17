"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./components/Footer";
import { FaCode, FaWordpress } from "react-icons/fa";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaWordpress as FaWp,
  FaNodeJs,
  FaServer,
  FaDatabase,
  FaDocker,
  FaCloud,
  FaAws,
  FaJava,
  FaAngular,
  FaJenkins,
  FaPhp,
} from "react-icons/fa";
import { SiApache } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.page}>
      <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <button 
            className={styles.mobileMenuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
          <div className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>ABOUT</a>
            <a href="#technologies" onClick={() => setIsMenuOpen(false)}>TECHNOLOGIES</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>SERVICES</a>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              CONTACT
            </a>
          </div>
        </div>
      </nav>

      <header className={styles.hero} id="about">
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <a href="#about">
            <h1>
              FULLSTACK
              <br />
              DEVELOPER
            </h1>
            <div className={styles.introText}>
              <p>
              Hi, I'm Vinicius — a full-stack web developer passionate about crafting scalable, high-performance digital experiences.
              </p>
              <p>
              I transform ideas into reliable, maintainable applications by combining clean architecture, intuitive user interfaces, and robust backend systems. Whether it's frontend design systems, API development, or database modeling, I manage the entire development lifecycle with attention to detail and technical excellence.
              </p>
              <p>
              Let’s solve complex challenges with smart, elegant, and functional web solutions.
              </p>
              <p className={styles.highlight}>
              Let’s turn complex problems into elegant, functional web applications.
              </p>
            </div>

            </a>
            <a 
              href="#services" 
              className={styles.ctaButton}
              onClick={(e) => {
                e.preventDefault();
                const servicesSection = document.getElementById('services');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              VIEW MY WORK
            </a>
          </div>

          <div className={styles.animationContainer}>
            <svg
              className={styles.codeAnimation}
              viewBox="0 0 900 500"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Enhanced Gradients and Definitions */}
              <defs>
                <linearGradient id="windowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e1e2e" />
                  <stop offset="50%" stopColor="#313244" />
                  <stop offset="100%" stopColor="#181825" />
                </linearGradient>
                
                <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#64ffda" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
                
                <linearGradient id="terminalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0f172a" />
                  <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>

                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Main Browser Window */}
              <rect
                x="80"
                y="50"
                width="740"
                height="400"
                rx="20"
                className={styles.browserWindow}
                fill="url(#windowGradient)"
              />

              {/* Window Controls */}
              <circle cx="110" cy="85" r="8" className={styles.windowControl} fill="#ff5f56" />
              <circle cx="135" cy="85" r="8" className={styles.windowControl} fill="#ffbd2e" />
              <circle cx="160" cy="85" r="8" className={styles.windowControl} fill="#27ca3f" />

              {/* Enhanced Address Bar */}
              <rect
                x="200"
                y="70"
                width="500"
                height="30"
                rx="15"
                className={styles.addressBar}
              />
              <circle cx="220" cy="85" r="5" className={styles.lockIcon} />
              <text x="240" y="90" className={styles.urlText} fontSize="10" fill="#64ffda">localhost:3000</text>

              {/* VS Code-like Tab Bar */}
              <rect x="80" y="110" width="740" height="35" fill="#2d3748" />
              <rect x="80" y="110" width="120" height="35" fill="#4a5568" className={styles.activeTab} />
              <text x="95" y="130" className={styles.tabText} fontSize="10" fill="#e2e8f0">App.tsx</text>
              <circle cx="185" cy="127" r="3" fill="#64ffda" className={styles.tabClose} />
              
              <rect x="200" y="110" width="100" height="35" fill="#2d3748" className={styles.inactiveTab} />
              <text x="215" y="130" className={styles.tabText} fontSize="10" fill="#a0aec0">styles.css</text>

              {/* Line Numbers */}
              <g className={styles.lineNumbers}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, i) => (
                  <text key={num} x="100" y={175 + i * 22} fontSize="10" fill="#6b7280" className={styles.lineNumber}>
                    {num}
                  </text>
                ))}
              </g>

              {/* Enhanced Code Lines with Syntax Highlighting */}
              <g className={styles.codeContent}>
                {/* Import statement */}
                <text x="120" y="175" className={styles.codeKeyword} fontSize="11" fill="#c792ea">import</text>
                <text x="165" y="175" className={styles.codeText} fontSize="11" fill="#82aaff">React</text>
                <text x="200" y="175" className={styles.codeKeyword} fontSize="11" fill="#c792ea">from</text>
                <text x="235" y="175" className={styles.codeString} fontSize="11" fill="#c3e88d">'react'</text>

                {/* Function declaration */}
                <text x="120" y="197" className={styles.codeKeyword} fontSize="11" fill="#c792ea">const</text>
                <text x="160" y="197" className={styles.codeFunction} fontSize="11" fill="#82aaff">App</text>
                <text x="185" y="197" className={styles.codeText} fontSize="11" fill="#ffffff">=</text>
                <text x="200" y="197" className={styles.codeText} fontSize="11" fill="#ffffff">()</text>
                <text x="220" y="197" className={styles.codeKeyword} fontSize="11" fill="#c792ea">=&gt;</text>
                <text x="250" y="197" className={styles.codeText} fontSize="11" fill="#ffffff">&#123;</text>

                {/* Return statement */}
                <text x="140" y="219" className={styles.codeKeyword} fontSize="11" fill="#c792ea">return</text>
                <text x="185" y="219" className={styles.codeText} fontSize="11" fill="#ffffff">(</text>

                {/* JSX */}
                <text x="160" y="241" className={styles.codeTag} fontSize="11" fill="#f07178">&lt;div</text>
                <text x="195" y="241" className={styles.codeAttribute} fontSize="11" fill="#ffcb6b">className</text>
                <text x="250" y="241" className={styles.codeText} fontSize="11" fill="#ffffff">=</text>
                <text x="260" y="241" className={styles.codeString} fontSize="11" fill="#c3e88d">"app"</text>
                <text x="295" y="241" className={styles.codeTag} fontSize="11" fill="#f07178">&gt;</text>

                <text x="180" y="263" className={styles.codeTag} fontSize="11" fill="#f07178">&lt;h1&gt;</text>
                <text x="210" y="263" className={styles.codeText} fontSize="11" fill="#ffffff">Hello World</text>
                <text x="285" y="263" className={styles.codeTag} fontSize="11" fill="#f07178">&lt;/h1&gt;</text>

                <text x="160" y="285" className={styles.codeTag} fontSize="11" fill="#f07178">&lt;/div&gt;</text>

                {/* Closing brackets */}
                <text x="140" y="307" className={styles.codeText} fontSize="11" fill="#ffffff">)</text>
                <text x="120" y="329" className={styles.codeText} fontSize="11" fill="#ffffff">&#125;</text>
              </g>

              {/* Terminal Section */}
              <rect
                x="500"
                y="180"
                width="300"
                height="200"
                rx="12"
                fill="url(#terminalGradient)"
                className={styles.terminal}
              />
              
              {/* Terminal Header */}
              <rect x="500" y="180" width="300" height="30" fill="#0f172a" rx="12" />
              <circle cx="520" cy="195" r="4" fill="#ff5f56" />
              <circle cx="535" cy="195" r="4" fill="#ffbd2e" />
              <circle cx="550" cy="195" r="4" fill="#27ca3f" />
              <text x="565" y="200" fontSize="9" fill="#64748b">Terminal</text>

              {/* Terminal Content */}
              <g className={styles.terminalContent}>
                <text x="515" y="230" className={styles.terminalPrompt} fontSize="10" fill="#64ffda">$</text>
                <text x="525" y="230" className={styles.terminalCommand} fontSize="10" fill="#e2e8f0">npm run dev</text>
                
                <text x="515" y="250" className={styles.terminalOutput} fontSize="9" fill="#10b981">✓ Ready in 2.1s</text>
                <text x="515" y="265" className={styles.terminalOutput} fontSize="9" fill="#64748b">Local:</text>
                <text x="555" y="265" className={styles.terminalOutput} fontSize="9" fill="#06b6d4">http://localhost:3000</text>
                
                <text x="515" y="285" className={styles.terminalPrompt} fontSize="10" fill="#64ffda">$</text>
                <rect x="525" y="280" width="2" height="12" fill="#64ffda" className={styles.terminalCursor} />
              </g>

              {/* Floating Dev Tools */}
              <g className={styles.devTools}>
                {/* React Logo */}
                <circle cx="150" cy="380" r="25" fill="none" stroke="#61dafb" strokeWidth="2" className={styles.reactLogo} />
                <circle cx="150" cy="380" r="10" fill="none" stroke="#61dafb" strokeWidth="2" />
                <ellipse cx="150" cy="380" rx="25" ry="10" fill="none" stroke="#61dafb" strokeWidth="2" transform="rotate(60 150 380)" />
                <ellipse cx="150" cy="380" rx="25" ry="10" fill="none" stroke="#61dafb" strokeWidth="2" transform="rotate(-60 150 380)" />

                {/* TypeScript Logo */}
                <rect x="680" y="380" width="40" height="40" rx="5" fill="#3178c6" className={styles.tsLogo} />
                <text x="695" y="405" fontSize="20" fill="white" fontWeight="bold">TS</text>

                {/* Git Branch Indicator */}
                <circle cx="400" cy="420" r="15" fill="#f14e32" className={styles.gitIndicator} />
                <path d="M395 415 L400 420 L405 415" stroke="white" strokeWidth="2" fill="none" />

                {/* Package Indicators */}
                <rect x="250" y="400" width="30" height="30" rx="5" fill="#000000" className={styles.packageIcon} />
                <text x="260" y="420" fontSize="12" fill="white">npm</text>
              </g>

              {/* Animated Particles */}
              <g className={styles.animatedParticles}>
                {[...Array(20)].map((_, i) => (
                  <circle
                    key={i}
                    r="2"
                    className={styles.particle}
                    fill="#64ffda"
                    style={{ '--delay': `${i * 0.2}s`, '--duration': `${3 + i * 0.1}s` } as React.CSSProperties}
                  />
                ))}
              </g>

              {/* Code Flow Lines */}
              <g className={styles.flowLines}>
                <path
                  d="M 300 200 Q 400 150 500 200"
                  stroke="url(#codeGradient)"
                  strokeWidth="2"
                  fill="none"
                  className={styles.flowLine}
                  strokeDasharray="5,5"
                />
                <path
                  d="M 200 300 Q 350 250 500 300"
                  stroke="url(#codeGradient)"
                  strokeWidth="2"
                  fill="none"
                  className={styles.flowLine}
                  strokeDasharray="5,5"
                  style={{ '--delay': '1s' } as React.CSSProperties}
                />
              </g>
            </svg>
          </div>
        </div>
      </header>

      <section id="services">
        <div className={styles.container}>
          <h2>MY SERVICES</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <FaCode className={styles.serviceIcon} />
              <h3>Full-Stack Web Development</h3>
              <p>
              End-to-end development of modern web applications using React,
               Next.js, Node.js, and PostgreSQL/MongoDB.
                I build secure, scalable, and maintainable solutions tailored to your business needs.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <FaReact className={styles.serviceIcon} />
              <h3>Frontend Development & UI/UX</h3>
              <p>
              I create clean, responsive, and accessible interfaces using React, TypeScript, and modern design systems. My focus is delivering intuitive user experiences that drive engagement and usability.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <FaServer className={styles.serviceIcon} />
              <h3>Backend Development & APIs</h3>
              <p>
              I architect robust backend systems and APIs (REST & GraphQL) using Node.js, Express, and Spring Boot. My solutions are built with security, performance, and scalability in mind.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <FaWordpress className={styles.serviceIcon} />
              <h3>WordPress & CMS Solutions</h3>
              <p>
              Tailored WordPress development including custom themes, plugin integration, and CMS optimization — ideal for businesses seeking flexibility with a user-friendly backend..
              </p>
            </div>

            <div className={styles.serviceCard}>
              <FaCloud className={styles.serviceIcon} />
              <h3>Cloud Architecture & DevOps</h3>
              <p>
              I design and implement cloud infrastructure with AWS, Docker, and CI/CD pipelines. I help teams deploy faster and scale efficiently using automation and modern DevOps practices
              </p>
            </div>

            <div className={styles.serviceCard}>
              <FaDatabase className={styles.serviceIcon} />
              <h3>Database Design & Optimization</h3>
              <p>
              I provide complete database solutions from schema design to optimization and migration. Skilled in both SQL (PostgreSQL) and NoSQL (MongoDB), always aiming for performance, reliability, and scalability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="technologies">
        <div className={styles.container}>
          <h2>Technologies</h2>

          {/* Frontend Category */}
          <div className={styles.categorySection}>
            <h3>Frontend</h3>
            <div className={styles.skillsGrid}>
              <div className={styles.skillIcon}>
                <FaHtml5 />
                <span>HTML5</span>
              </div>
              <div className={styles.skillIcon}>
                <FaCss3Alt />
                <span>CSS3</span>
              </div>
              <div className={styles.skillIcon}>
                <FaJs />
                <span>JavaScript</span>
              </div>
              <div className={styles.skillIcon}>
                <FaCode />
                <span>TypeScript</span>
              </div>
              <div className={styles.skillIcon}>
                <FaReact />
                <span>React</span>
              </div>
              <div className={styles.skillIcon}>
                <TbBrandNextjs />
                <span>Next.js</span>
              </div>
              <div className={styles.skillIcon}>
                <FaAngular />
                <span>Angular</span>
              </div>
            </div>
          </div>

          {/* DevOps & Infrastructure Category */}
          <div className={styles.categorySection}>
            <h3>DevOps & Infrastructure</h3>
            <div className={styles.skillsGrid}>
              <div className={styles.skillIcon}>
                <FaDocker />
                <span>Docker</span>
              </div>
              <div className={styles.skillIcon}>
                <SiApache />
                <span>Apache</span>
              </div>
              <div className={styles.skillIcon}>
                <FaJenkins />
                <span>Jenkins</span>
              </div>
              <div className={styles.skillIcon}>
                <FaAws />
                <span>AWS</span>
              </div>
            </div>
          </div>

          {/* Backend Category */}
          <div className={styles.categorySection}>
            <h3>Backend</h3>
            <div className={styles.skillsGrid}>
              <div className={styles.skillIcon}>
                <FaNodeJs />
                <span>Node.js</span>
              </div>
              <div className={styles.skillIcon}>
                <FaServer />
                <span>Express</span>
              </div>
              <div className={styles.skillIcon}>
                <FaJava />
                <span>Java</span>
              </div>
              <div className={styles.skillIcon}>
                <FaJava />
                <span>Spring</span>
              </div>
              <div className={styles.skillIcon}>
                <FaPhp />
                <span>PHP</span>
              </div>
              <div className={styles.skillIcon}>
                <FaDatabase />
                <span>MongoDB</span>
              </div>
              <div className={styles.skillIcon}>
                <FaDatabase />
                <span>PostgreSQL</span>
              </div>
            </div>
          </div>

          {/* CMS Category */}
          <div className={styles.categorySection}>
            <h3>CMS & Other Technologies</h3>
            <div className={styles.skillsGrid}>
              <div className={styles.skillIcon}>
                <FaWordpress />
                <span>WordPress</span>
              </div>
              <div className={styles.skillIcon}>
                <FaCloud />
                <span>Cloud Services</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="soft-skills" className={`${styles.section} ${styles.softSkills}`}>
        <div className={styles.container}>
          <h2>Soft Skills – Beyond the Code</h2>
          <p className={styles.softSkillsIntro}>
            In my journey as a developer, I've learned that exceptional work comes
            from more than just technical prowess. It's about the people,
            experiences, and relentless curiosity that drive every project.
          </p>

          <div className={styles.softSkillsGrid}>
            <div className={styles.softSkillCard}>
              <h3>🔍 Analytical Thinking & Deep Problem Solving</h3>
              <p>
              I treat every challenge as a chance to grow. Instead of applying surface-level fixes, I investigate root causes, explore creative alternatives, and strengthen my technical toolkit along the wa
              </p>
            </div>

            <div className={styles.softSkillCard}>
              <h3>🤝 Collaboration with Empathy</h3>
              <p>
              Great software is built through honest dialogue. I value active listening, respect diverse perspectives, and communicate openly to build solutions that align with real team and user needs.
              </p>
            </div>

            <div className={styles.softSkillCard}>
              <h3>💪 Adaptability in a Fast-Moving World</h3>
              <p>
              In tech, change is constant. I stay calm under pressure, embrace uncertainty, and learn new tools and frameworks quickly to keep delivering consistent value.
              </p>
            </div>

            <div className={styles.softSkillCard}>
              <h3>✨ User-Centered Attention to Detail</h3>
              <p>
              Code is not just logic — it's experience. I pay close attention to the small details that make an interface feel intuitive, aiming to deliver products that are both functional and delightful to use..
              </p>
            </div>

            <div className={styles.softSkillCard}>
              <h3>⚡ Proactive Ownership & Execution</h3>
              <p>
                I take full responsibility for my work — from planning to delivery. I manage my time effectively, stay organized, and hold myself accountable to high standards of quality and punctuality.
              </p>
            </div>
            
            <div className={styles.softSkillCard}>
              <h3>🎯 Emotional Intelligence & Team Growth</h3>
              <p>
              I foster healthy team dynamics through emotional awareness, empathy, and mentorship. By supporting junior developers and building trust with peers, I help cultivate a culture of learning and shared success.
              </p>
            </div>
          </div>
        </div>
      </section>

    
      <Footer />
    </div>
  );
}
