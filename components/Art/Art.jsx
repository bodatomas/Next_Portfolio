import React, { useEffect } from 'react';
import Aos from 'aos';
import styles from './Art.module.scss';
import Title from '../Title/Title';
import ShowBox from './ShowBox/ShowBox';

const Art = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className={styles.art}>
      <div>
        <div data-aos="fade-up">
          <Title title="Artwork" emoji="&#x1F3A8;" />
        </div>
        <section className={styles.showCase} data-aos="fade-up">
          <ShowBox
            img="/Images/Mac.png"
            altImg="Mac"
            linkq="https://www.artstation.com/artwork/28L91e"
          />
          <ShowBox
            img="/Images/Scope.png"
            altImg="Scope"
            link="https://www.artstation.com/artwork/mqmVlE"
          />
          <ShowBox
            img="/Images/Lamp.png"
            altImg="Lamp"
            link="https://www.artstation.com/artwork/e0nqRb"
          />
        </section>
      </div>
    </div>
  );
};

export default Art;
