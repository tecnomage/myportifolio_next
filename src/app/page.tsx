import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./components/Footer";
import { FaCode, FaPalette, FaWordpress } from 'react-icons/fa';
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
  FaAws
} from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';

export default function Home() {
  return (
    <div className={styles.page}>
      <nav>
        <div className={styles.logo}>Logo</div>
        <div className={styles.navLinks}>
          <a href="#about">ABOUT</a>
          <a href="#technologies">TECHNOLOGIES</a>
          <a href="#services">SERVICES</a>
          <a href="#contact">CONTACT</a>
        </div>
      </nav>

      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Fullstack<br/>DEVELOPER</h1>
          <p>I am Tatiana, web developer with a passion for<br/>creating beautiful and responsive websites</p>
          <button className={styles.ctaButton}>VIEW MY WORK</button>
        </div>
           
        <div className={styles.animationContainer}>
        <svg 
          className={styles.codeAnimation} 
          viewBox="0 0 500 200" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Browser Window Frame */}
          <rect 
            x="50" 
            y="20" 
            width="400" 
            height="160" 
            rx="10" 
            className={styles.browserWindow} 
          />
          
          {/* Browser Dots */}
          <circle cx="85" cy="45" r="5" className={styles.dot} />
          <circle cx="105" cy="45" r="5" className={styles.dot} />
          <circle cx="125" cy="45" r="5" className={styles.dot} />
          
          {/* Code Lines */}
          <g className={styles.codeLines}>
            <rect x="70" y="70" width="120" height="6" rx="3" />
            <rect x="70" y="90" width="200" height="6" rx="3" />
            <rect x="70" y="110" width="160" height="6" rx="3" />
            <rect x="70" y="130" width="180" height="6" rx="3" />
          </g>

          {/* Floating Elements */}
          <g className={styles.floatingElements}>
            <rect x="300" y="70" width="40" height="40" rx="5" />
            <rect x="350" y="90" width="30" height="30" rx="5" />
            <rect x="320" y="130" width="35" height="35" rx="5" />
          </g>
        </svg>
      </div>


        <div className={styles.heroImage}>
          <Image
            src="/headshot.png"
            alt="Profile"
            width={400}
            height={400}
            priority
            className={styles.profileImage}
          />
          <div className={styles.imageBackground}></div>
        </div>
      </header>
 
      <section id="services">
        <h2>MY SERVICES</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <FaCode className={styles.serviceIcon} />
            <h3>Website Development</h3>
            <p>Custom website development using modern technologies and best practices</p>
          </div>
          <div className={styles.serviceCard}>
            <FaPalette className={styles.serviceIcon} />
            <h3>Web Design</h3>
            <p>Creating beautiful and user-friendly interfaces that engage visitors</p>
          </div>
          <div className={styles.serviceCard}>
            <FaWordpress className={styles.serviceIcon} />
            <h3>WordPress Development</h3>
            <p>Building and customizing WordPress websites for your needs</p>
          </div>
        </div>
      </section>

      <section id="technologies">
        <h2>Technologies</h2>
        <p>The skills, tools and technologies I use</p>
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
            <FaWp />
            <span>WordPress</span>
          </div>
          <div className={styles.skillIcon}>
            <FaReact />
            <span>React</span>
          </div>

          <div className={styles.skillIcon}>
            <FaNodeJs />
            <span>Node.js</span>
          </div>

          <div className={styles.skillIcon}>
            <FaServer />
            <span>Express</span>
          </div>

          <div className={styles.skillIcon}>
            <FaDatabase />
            <span>MongoDB</span>
          </div>

          <div className={styles.skillIcon}>
            <FaDatabase />
            <span>PostgreSQL</span>
          </div>

          <div className={styles.skillIcon}>
            <FaDocker />
            <span>Docker</span>
          </div>

          <div className={styles.skillIcon}>
            <FaCloud />
            <span>Kubernetes</span>
          </div>

          <div className={styles.skillIcon}>
            <FaAws />
            <span>AWS</span>
          </div>
        </div>
      </section>

      
      <section id="contact" className={styles.contactSection}>
        <h2>DO YOU HAVE A PROJECT TO DISCUSS?</h2>
        <p>I'd love to hear from you! Fill out the form below and I'll get back to you as soon as possible.</p>
        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name"
              name="name"
              placeholder="Your name"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input 
              type="email"
              id="email" 
              name="email"
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject" 
              placeholder="What's this about?"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your project..."
              rows={5}
              required
            ></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
}
