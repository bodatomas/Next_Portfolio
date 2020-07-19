import React, { useEffect } from 'react';
import Aos from 'aos';
import styles from './About.module.scss';
import Title from '../Title/Title';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.about}>
      <div data-aos="fade-up">
        <h2 className={styles.preTitle}>About</h2>
        <Title title="Tomas Boda" emoji="&#x1F680;" />
        <div className={styles.interests}>
          <h2>Frontend Developer</h2>
          <h2>Hobyist 3D artist</h2>
        </div>
      </div>
      <section className={styles.text}>
        <p data-aos="fade-up" className={styles.aboutText}>
          I started my developer journey about a year ago. From the beginnig I
          was mainly focused on Frontend development and little bit on design
          aswell. After long time deciding which technology should I choose from
          that many out there, I chose React.js because its very valuable in
          nowadays and I had a lot of fun working with it. I have small
          experience with Vue.js aswell. I&apos;m also open to other
          technologies.
        </p>
        <p data-aos="fade-up" className={styles.aboutText}>
          I&apos;m always looking forward for new technologies, and I think
          I&apos;m able to quickly learn them.
        </p>
        <div className={styles.emojiContainer}>
          <h2 data-aos="fade-up">I value:</h2>
          <div className={styles.emoji}>
            <p data-aos="fade-up">
              <span role="img" aria-label="label">
                &#x1F3AF;
              </span>
              Consistency
            </p>
            <p data-aos="fade-up">
              <span role="img" aria-label="label">
                &#x1F55B;
              </span>
              Efficiency
            </p>
            <p data-aos="fade-up">
              <span role="img" aria-label="label">
                &#x1F9E0;
              </span>
              Quick Learning
            </p>
            <p data-aos="fade-up">
              <span role="img" aria-label="label">
                &#x270A;
              </span>
              Social skill
            </p>
          </div>
        </div>
        <div className={styles.emojiContainer}>
          <h2 data-aos="fade-up">My preffered technologies:</h2>
          <div className={styles.emoji}>
            <a
              href="https://reactjs.org/"
              data-aos="fade-up"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.icons8.com/plasticine/100/000000/react.png"
                alt="react.js"
              />
              React.js
            </a>
            <a
              href="https://vuejs.org/"
              data-aos="fade-up"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.icons8.com/color/48/000000/vue-js.png"
                alt="Vue.js"
              />
              Vue.js
            </a>
            <a
              href="https://sass-lang.com/"
              data-aos="fade-up"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.icons8.com/color/48/000000/sass.png"
                alt="Sass"
              />
              Sass
            </a>
            <p data-aos="fade-up">
              <img
                src="https://img.icons8.com/color/48/000000/html-5.png"
                alt="Html"
              />
              Html5
            </p>
            <p data-aos="fade-up">
              <img
                src="https://img.icons8.com/color/48/000000/css3.png"
                alt="Css"
              />
              Css3
            </p>
            <a
              href="https://www.unrealengine.com/en-US/"
              data-aos="fade-up"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.icons8.com/color/48/000000/unreal-engine.png"
                alt="ue4"
              />
              Unreal Engine 4
            </a>
            <a
              href="https://www.blender.org/"
              data-aos="fade-up"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.icons8.com/color/48/000000/blender-3d.png"
                alt="blender"
              />
              Blender
            </a>
          </div>
        </div>
        <div className={styles.emojiContainer}>
          <h2 data-aos="fade-up">Hobbies:</h2>
          <div className={styles.emoji}>
            <p data-aos="fade-up">
              <span role="img" aria-label="label">
                &#x1F3AE;
              </span>
              Games
            </p>
            <p data-aos="fade-up">
              <span role="img" aria-label="label">
                &#x1F3B5;
              </span>
              Music
            </p>
            <p data-aos="fade-up">
              <span role="img" aria-label="label">
                &#x1F4FA;
              </span>
              Movies
            </p>
            <p data-aos="fade-up">
              <span role="img" aria-label="label">
                &#x1F5FF;
              </span>
              3D Modeling
            </p>
            <p data-aos="fade-up">
              <span role="img" aria-label="label">
                &#x1F47E;
              </span>
              Learning GameDev
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
