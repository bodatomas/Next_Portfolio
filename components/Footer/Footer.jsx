import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.socialLinks}>
        <div className={styles.links}>
          <a
            href="https://twitter.com/t_bodaa"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/fluent/48/000000/twitter.png"
              alt="twitter"
            />
            Twitter
          </a>
          <a href="https://github.com/ImTomz" target="_blank" rel="noreferrer">
            <img
              src="https://img.icons8.com/fluent/48/000000/github.png"
              alt="github"
            />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/imtomz/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/color/48/000000/linkedin.png"
              alt="linkedIn"
            />
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/t_bodaa/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/fluent/48/000000/instagram-new.png"
              alt="instagram"
            />
            Instagram
          </a>
          <a
            href="https://www.artstation.com/pooparts"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/color/48/000000/artstation.png"
              alt="artstation"
            />
            ArtStation
          </a>
        </div>
        <div className={styles.email}>
          <span role="img" aria-label="label">
            &#x1F4E7;
          </span>
          <a href="mailto:tomasboda77@gmail.com">tomasboda77@gmail.com</a>
        </div>
      </div>
      <div className={styles.copyright}>
        <img src="/Icons/copyright.svg" alt="copyright" />
        <p>2021 Tomas Boda.</p>
      </div>
    </div>
  );
};

export default Footer;
