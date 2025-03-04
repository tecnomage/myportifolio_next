import styles from './Footer.module.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Learn</h3>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
              aria-hidden
            />
            Documentation
          </a>
        </div>

        <div className={styles.footerSection}>
          <h3>Examples</h3>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
              aria-hidden
            />
            Projects
          </a>
        </div>

        <div className={styles.footerSection}>
          <h3>Connect</h3>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
              aria-hidden
            />
            Portfolio →
          </a>
        </div>
      </div>
    </footer>
  );
} 