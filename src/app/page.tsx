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
              viewBox="0 0 1000 600"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Enhanced Gradients */}
                <linearGradient id="editorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1a1d29" />
                  <stop offset="50%" stopColor="#2a2d3a" />
                  <stop offset="100%" stopColor="#181b26" />
                </linearGradient>
                
                <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#64ffda" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
                
                <linearGradient id="terminalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0d1117" />
                  <stop offset="100%" stopColor="#161b22" />
                </linearGradient>

                <linearGradient id="dataFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#64ffda" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>

                <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#64ffda" />
                  <stop offset="100%" stopColor="#1db584" />
                </radialGradient>

                {/* Enhanced Filters */}
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>

                <filter id="innerGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2" result="softGlow"/>
                  <feMerge>
                    <feMergeNode in="softGlow"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Modern Code Editor Interface */}
              <rect
                x="50"
                y="80"
                width="900"
                height="480"
                rx="16"
                fill="url(#editorGradient)"
                className={styles.editorWindow}
                stroke="rgba(100, 255, 218, 0.1)"
                strokeWidth="1"
              />

              {/* Editor Header with Activity Bar */}
              <rect x="50" y="80" width="900" height="50" fill="#21262d" rx="16" />
              <rect x="50" y="110" width="900" height="20" fill="transparent" />

              {/* Activity Bar Icons */}
              <g className={styles.activityBar}>
                <rect x="70" y="95" width="20" height="20" rx="3" fill="#58a6ff" className={styles.activeIcon} />
                <rect x="100" y="95" width="20" height="20" rx="3" fill="#7c3aed" opacity="0.7" />
                <rect x="130" y="95" width="20" height="20" rx="3" fill="#f97316" opacity="0.7" />
                <rect x="160" y="95" width="20" height="20" rx="3" fill="#06b6d4" opacity="0.7" />
              </g>

              {/* File Tab System */}
              <g className={styles.fileTabs}>
                <rect x="200" y="95" width="120" height="25" fill="#333741" className={styles.activeFileTab} />
                <text x="215" y="110" fontSize="11" fill="#e6edf3">portfolio.tsx</text>
                <circle cx="305" cy="107" r="3" fill="#64ffda" className={styles.fileModified} />
                
                <rect x="320" y="95" width="100" height="25" fill="#21262d" className={styles.inactiveFileTab} />
                <text x="330" y="110" fontSize="11" fill="#8b949e">styles.css</text>

                <rect x="420" y="95" width="110" height="25" fill="#21262d" className={styles.inactiveFileTab} />
                <text x="430" y="110" fontSize="11" fill="#8b949e">package.json</text>
              </g>

              {/* Sidebar with File Explorer */}
              <rect x="50" y="130" width="180" height="430" fill="#161b22" />
              <text x="65" y="150" fontSize="12" fill="#f0f6fc" fontWeight="bold">EXPLORER</text>
              
              <g className={styles.fileTree}>
                <text x="65" y="175" fontSize="10" fill="#7d8590">▼ portfolio-app</text>
                <text x="80" y="195" fontSize="10" fill="#7d8590">▼ src</text>
                <text x="95" y="215" fontSize="10" fill="#58a6ff">⚛️ components</text>
                <text x="95" y="235" fontSize="10" fill="#58a6ff">📁 pages</text>
                <text x="95" y="255" fontSize="10" fill="#f97316">🎨 styles</text>
                <text x="80" y="275" fontSize="10" fill="#7d8590">📦 package.json</text>
                <text x="80" y="295" fontSize="10" fill="#238636">✅ README.md</text>
              </g>

              {/* Main Code Area with Enhanced Syntax */}
              <g className={styles.codeEditor}>
                {/* Line Numbers */}
                <rect x="230" y="130" width="30" height="430" fill="#0d1117" />
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num, i) => (
                  <text key={num} x="245" y={155 + i * 30} fontSize="10" fill="#6e7681" textAnchor="middle">
                    {num}
                  </text>
                ))}

                {/* Enhanced Code Content */}
                <g className={styles.syntaxHighlight}>
                  {/* Import statements */}
                  <text x="275" y="155" fontSize="12" fill="#ff7b72">import</text>
                  <text x="320" y="155" fontSize="12" fill="#79c0ff">React</text>
                  <text x="365" y="155" fontSize="12" fill="#ff7b72">from</text>
                  <text x="405" y="155" fontSize="12" fill="#a5d6ff">'react'</text>

                  <text x="275" y="185" fontSize="12" fill="#ff7b72">import</text>
                  <text x="320" y="185" fontSize="12" fill="#79c0ff">&#123; useState &#125;</text>
                  <text x="400" y="185" fontSize="12" fill="#ff7b72">from</text>
                  <text x="445" y="185" fontSize="12" fill="#a5d6ff">'react'</text>

                  {/* Component definition */}
                  <text x="275" y="215" fontSize="12" fill="#ff7b72">const</text>
                  <text x="320" y="215" fontSize="12" fill="#d2a8ff">Portfolio</text>
                  <text x="385" y="215" fontSize="12" fill="#79c0ff">=</text>
                  <text x="405" y="215" fontSize="12" fill="#ff7b72">()</text>
                  <text x="430" y="215" fontSize="12" fill="#ff7b72">=&gt;</text>
                  <text x="460" y="215" fontSize="12" fill="#79c0ff">&#123;</text>

                  {/* JSX with animations */}
                  <text x="295" y="245" fontSize="12" fill="#ff7b72">return</text>
                  <text x="350" y="245" fontSize="12" fill="#79c0ff">(</text>

                  <text x="315" y="275" fontSize="12" fill="#7ee787">&lt;div</text>
                  <text x="355" y="275" fontSize="12" fill="#f2cc60">className</text>
                  <text x="415" y="275" fontSize="12" fill="#79c0ff">=</text>
                  <text x="430" y="275" fontSize="12" fill="#a5d6ff">"hero"</text>

                  <text x="335" y="305" fontSize="12" fill="#f2cc60">style</text>
                  <text x="375" y="305" fontSize="12" fill="#79c0ff">=</text>
                  <text x="390" y="305" fontSize="12" fill="#a5d6ff">&#123;&#123; opacity: 1 &#125;&#125;</text>


                  <text x="315" y="365" fontSize="12" fill="#7ee787">&gt;</text>
                  
                  <text x="335" y="395" fontSize="12" fill="#7ee787">&lt;h1&gt;</text>
                  <text x="375" y="395" fontSize="12" fill="#e6edf3">Full-Stack Developer</text>
                  <text x="530" y="395" fontSize="12" fill="#7ee787">&lt;/h1&gt;</text>

                  <text x="335" y="395" fontSize="12" fill="#7ee787">&lt;p&gt;</text>
                  <text x="365" y="395" fontSize="12" fill="#e6edf3">Building modern web experiences</text>
                  <text x="570" y="395" fontSize="12" fill="#7ee787">&lt;/p&gt;</text>

                  <text x="315" y="425" fontSize="12" fill="#7ee787">&lt;/div&gt;</text>
                  <text x="295" y="455" fontSize="12" fill="#79c0ff">)</text>
                  <text x="275" y="485" fontSize="12" fill="#79c0ff">&#125;</text>
                </g>
              </g>

              {/* Enhanced Terminal */}
              <rect
                x="600"
                y="160"
                width="320"
                height="240"
                rx="12"
                fill="url(#terminalGradient)"
                className={styles.modernTerminal}
                stroke="rgba(100, 255, 218, 0.2)"
                strokeWidth="1"
              />
              
              {/* Terminal Header */}
              <rect x="600" y="160" width="320" height="35" fill="#0d1117" rx="12" />
              <circle cx="625" cy="177" r="6" fill="#ff5f56" className={styles.terminalButton} />
              <circle cx="645" cy="177" r="6" fill="#ffbd2e" className={styles.terminalButton} />
              <circle cx="665" cy="177" r="6" fill="#27ca3f" className={styles.terminalButton} />
              <text x="690" y="182" fontSize="11" fill="#8b949e">zsh - portfolio</text>

              {/* Terminal Commands */}
              <g className={styles.terminalSession}>
                <text x="620" y="220" fontSize="11" fill="#58a6ff">➜</text>
                <text x="635" y="220" fontSize="11" fill="#7c3aed">portfolio</text>
                <text x="690" y="220" fontSize="11" fill="#e6edf3">npm run dev</text>
                
                <text x="620" y="245" fontSize="10" fill="#56d364">✓ Ready on http://localhost:3000</text>
                <text x="620" y="265" fontSize="10" fill="#8b949e">✓ Compiled successfully</text>
                <text x="620" y="285" fontSize="10" fill="#f85149">⚠ 0 warnings found</text>
                
                <text x="620" y="315" fontSize="11" fill="#58a6ff">➜</text>
                <text x="635" y="315" fontSize="11" fill="#7c3aed">portfolio</text>
                <text x="690" y="315" fontSize="11" fill="#e6edf3">git status</text>
                
                <text x="620" y="335" fontSize="10" fill="#56d364">On branch main</text>
                <text x="620" y="355" fontSize="10" fill="#f85149">Changes to be committed:</text>
                <text x="635" y="375" fontSize="10" fill="#58a6ff">modified: src/components/Hero.tsx</text>
                
                <rect x="690" y="385" width="3" height="12" fill="#58a6ff" className={styles.liveCursor} />
              </g>

              {/* Floating Tech Stack Icons */}
              <g className={styles.floatingIcons}>
                {/* React Atom */}
                <g className={styles.reactAtom} transform="translate(150, 400)">
                  <circle r="30" fill="none" stroke="#61dafb" strokeWidth="2" opacity="0.8" />
                  <circle r="6" fill="#61dafb" />
                  <ellipse rx="30" ry="12" fill="none" stroke="#61dafb" strokeWidth="2" transform="rotate(60)" opacity="0.8" />
                  <ellipse rx="30" ry="12" fill="none" stroke="#61dafb" strokeWidth="2" transform="rotate(-60)" opacity="0.8" />
                </g>

                {/* Next.js Logo */}
                <circle cx="800" cy="400" r="25" fill="#000000" className={styles.nextjsLogo} />
                <path d="M790 390 Q800 385 810 390 Q820 400 810 410 Q800 415 790 410 Z" fill="#ffffff" />

                {/* TypeScript Diamond */}
                <rect x="300" y="480" width="35" height="35" rx="5" fill="#3178c6" className={styles.typescriptLogo} transform="rotate(45 317.5 497.5)" />
                <text x="317.5" y="503" fontSize="16" fill="white" fontWeight="bold" textAnchor="middle">TS</text>

                {/* Node.js Hexagon */}
                <polygon points="720,480 740,470 760,480 760,500 740,510 720,500" fill="#339933" className={styles.nodeLogo} />
                <text x="740" y="495" fontSize="12" fill="white" fontWeight="bold" textAnchor="middle">N</text>
              </g>

              {/* Data Flow Visualization */}
              <g className={styles.dataFlow}>
                {/* API Connection Nodes */}
                <circle cx="450" cy="450" r="8" fill="url(#nodeGradient)" className={styles.dataNode} filter="url(#glow)" />
                <circle cx="550" cy="480" r="6" fill="#bb86fc" className={styles.dataNode} />
                <circle cx="650" cy="460" r="7" fill="#03dac6" className={styles.dataNode} />

                {/* Animated Connection Lines */}
                <path
                  d="M 450 450 Q 500 430 550 480"
                  stroke="url(#dataFlowGradient)"
                  strokeWidth="2"
                  fill="none"
                  className={styles.dataConnection}
                  strokeDasharray="8,4"
                />
                <path
                  d="M 550 480 Q 600 470 650 460"
                  stroke="url(#dataFlowGradient)"
                  strokeWidth="2"
                  fill="none"
                  className={styles.dataConnection}
                  strokeDasharray="8,4"
                  style={{ '--delay': '1.5s' } as React.CSSProperties}
                />

                {/* Data Packets */}
                <circle r="3" fill="#f093fb" className={styles.dataPacket} />
                <circle r="3" fill="#4facfe" className={styles.dataPacket} />
              </g>

              {/* Enhanced Particle System */}
              <g className={styles.particleSystem}>
                {[...Array(25)].map((_, i) => (
                  <circle
                    key={i}
                    r={Math.random() * 2 + 1}
                    className={styles.modernParticle}
                    fill={i % 3 === 0 ? '#64ffda' : i % 3 === 1 ? '#bb86fc' : '#03dac6'}
                    style={{ 
                      '--delay': `${i * 0.3}s`, 
                      '--duration': `${4 + i * 0.1}s`,
                      '--start-x': `${100 + (i % 5) * 180}px`,
                      '--start-y': `${200 + Math.random() * 200}px`
                    } as React.CSSProperties}
                  />
                ))}
              </g>

              {/* Code Quality Indicators */}
              <g className={styles.codeMetrics}>
                <rect x="50" y="570" width="150" height="20" rx="10" fill="#238636" opacity="0.8" />
                <text x="125" y="583" fontSize="11" fill="white" textAnchor="middle">✓ All Tests Passing</text>
                
                <rect x="220" y="570" width="120" height="20" rx="10" fill="#1f6feb" opacity="0.8" />
                <text x="280" y="583" fontSize="11" fill="white" textAnchor="middle">TypeScript</text>
                
                <rect x="360" y="570" width="100" height="20" rx="10" fill="#f85149" opacity="0.8" />
                <text x="410" y="583" fontSize="11" fill="white" textAnchor="middle">0 Errors</text>
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
