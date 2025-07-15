"use client";

import styles from './Footer.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.socialIcons}>
          <a 
            href="https://github.com/tecnomage/tecnomage" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className={styles.icon} />
          </a>
          <a 
            href="https://www.linkedin.com/in/viniciusbraga11/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className={styles.icon} />
          </a>
          <a 
            href="mailto:your.email@example.com"
            aria-label="Email"
          >
            <MdEmail className={styles.icon} />
          </a>
        </div>
        <p className={styles.copyright}>© 2025 Vinicius Braga. All rights reserved.</p>
      </div>
    </footer>
  );
} 