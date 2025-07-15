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

      <header className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1>
              FULLSTACK
              <br />
              DEVELOPER
            </h1>
            <div className={styles.introText}>
              <p>
                Hi, I'm Vinicius, a passionate web developer with a focus on
                full-stack development.
              </p>
              <p>
                I specialize in crafting high-performance, scalable, and visually stunning web applications. 
                With expertise across the entire development stack, I transform innovative ideas
                into exceptional digital experiences.
              </p>
              <p className={styles.highlight}>
                Turning your vision into reality through beautiful and responsive websites.
              </p>
            </div>
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
              viewBox="0 0 800 400"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Browser Window Frame with gradient */}
              <defs>
                <linearGradient id="windowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2a2a4a" />
                  <stop offset="100%" stopColor="#1a1a2a" />
                </linearGradient>
              </defs>
              
              <rect
                x="60"
                y="30"
                width="680"
                height="340"
                rx="16"
                className={styles.browserWindow}
                fill="url(#windowGradient)"
              />

              {/* Animated Browser Dots */}
              <circle cx="116" cy="80" r="8" className={styles.dot} style={{ '--delay': '0s' } as React.CSSProperties} />
              <circle cx="148" cy="80" r="8" className={styles.dot} style={{ '--delay': '0.2s' } as React.CSSProperties} />
              <circle cx="180" cy="80" r="8" className={styles.dot} style={{ '--delay': '0.4s' } as React.CSSProperties} />

              {/* Glowing Address Bar */}
              <rect
                x="207"
                y="65"
                width="447"
                height="32"
                rx="8"
                className={styles.addressBar}
              />
              <circle cx="223" cy="81" r="4" className={styles.lockIcon} />

              {/* Animated Code Lines */}
              <g className={styles.codeLines}>
                {[...Array(6)].map((_, i) => (
                  <rect
                    key={i}
                    x="92"
                    y={140 + i * 40}
                    width={180 + Math.random() * 200}
                    height="12"
                    rx="6"
                    className={styles.codeLine}
                    style={{ '--delay': `${i * 0.15}s` } as React.CSSProperties}
                  />
                ))}
              </g>

              {/* Enhanced Floating Elements with Gradients */}
              <g className={styles.floatingElements}>
                {[
                  { x: 480, y: 140, size: 70 },
                  { x: 560, y: 180, size: 55 },
                  { x: 512, y: 260, size: 60 },
                  { x: 600, y: 247, size: 65 },
                  { x: 480, y: 313, size: 58 }
                ].map((elem, i) => (
                  <g key={i} className={styles.floatingGroup} style={{ '--delay': `${i * 0.2}s` } as React.CSSProperties}>
                    <rect
                      x={elem.x}
                      y={elem.y}
                      width={elem.size}
                      height={elem.size}
                      rx="10"
                      className={styles.floatingBox}
                    />
                    <circle
                      cx={elem.x + elem.size/2}
                      cy={elem.y + elem.size/2}
                      r="4"
                      className={styles.boxDot}
                    />
                  </g>
                ))}
              </g>

              {/* Animated Cursor */}
              <rect
                x="92"
                y="260"
                width="3"
                height="21"
                className={styles.cursor}
              />

              {/* Particle Effects */}
              <g className={styles.particles}>
                {[...Array(15)].map((_, i) => (
                  <circle
                    key={i}
                    r="2"
                    className={styles.particle}
                    style={{ '--delay': `${i * 0.3}s` } as React.CSSProperties}
                  />
                ))}
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
                Custom-built web applications using React, Next.js, Node.js,
                Express, and PostgreSQL/MongoDB to deliver secure, scalable, and
                high-performance solutions.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <FaReact className={styles.serviceIcon} />
              <h3>Frontend Development & UI/UX</h3>
              <p>
                Crafting engaging, interactive, and responsive interfaces using
                React, Angular, TypeScript, and modern UI frameworks to enhance
                user experience.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <FaServer className={styles.serviceIcon} />
              <h3>Backend Development & APIs</h3>
              <p>
                Developing RESTful and GraphQL APIs with Node.js, Express, Java
                (Spring Boot), and PHP to power robust web applications.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <FaWordpress className={styles.serviceIcon} />
              <h3>WordPress & CMS Solutions</h3>
              <p>
                Custom WordPress theme development, plugin integration, and CMS
                optimization to meet your business needs.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <FaCloud className={styles.serviceIcon} />
              <h3>Cloud Architecture & DevOps</h3>
              <p>
                Expert cloud infrastructure design and implementation using AWS, Docker, and Jenkins. 
                Implementing CI/CD pipelines, container orchestration, and automated deployment 
                strategies for optimal application performance and scalability.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <FaDatabase className={styles.serviceIcon} />
              <h3>Database Design & Optimization</h3>
              <p>
                Comprehensive database solutions including schema design, query optimization, 
                and data migration services. Expertise in both SQL (PostgreSQL) and NoSQL 
                (MongoDB) databases with focus on performance and scalability.
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
              <h3>🔍 Curiosity-Driven Problem Solving</h3>
              <p>
                I see every bug and design challenge as an opportunity to learn
                something new. Rather than applying quick fixes, I dive deep into
                the issue—experimenting with creative solutions and continuously
                expanding my toolkit.
              </p>
            </div>

            <div className={styles.softSkillCard}>
              <h3>🤝 Genuine Collaboration & Empathy</h3>
              <p>
                Great software is built through open, honest conversations. I
                actively listen and share ideas with teammates, blending diverse
                perspectives to craft solutions that truly work for everyone.
              </p>
            </div>

            <div className={styles.softSkillCard}>
              <h3>💪 Resilience & Adaptability</h3>
              <p>
                The tech landscape is ever-evolving, and I thrive in that dynamic.
                I've learned to embrace change—be it tackling unforeseen
                challenges or rapidly learning new frameworks.
              </p>
            </div>

            <div className={styles.softSkillCard}>
              <h3>✨ Crafting Memorable User Experiences</h3>
              <p>
                Attention to detail goes beyond clean code. I believe every line
                of code contributes to the overall experience. I focus on creating
                digital experiences that resonate with users.
              </p>
            </div>

            <div className={styles.softSkillCard}>
              <h3>⚡ Ownership & Time Mastery</h3>
              <p>
                I take full responsibility for my work, ensuring that projects not
                only meet deadlines but also exceed expectations. My proactive
                approach means I'm always prepared to deliver results.
              </p>
            </div>
            
            <div className={styles.softSkillCard}>
              <h3>🎯 Emotional Intelligence & Mentorship</h3>
              <p>
                I believe in the power of understanding and nurturing the human
                side of tech. By cultivating emotional intelligence, I build
                strong, empathetic relationships with colleagues and take pride in
                mentoring junior developers. This not only fosters a supportive
                team culture but also drives collective growth and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

    
      <Footer />
    </div>
  );
}
