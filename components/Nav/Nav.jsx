import React, { useState, useEffect, useRef } from 'react';
import { TimelineMax, Power3 } from 'gsap/dist/gsap';
import styles from './Nav.module.scss';

const Nav = () => {
  const [scrollPosition, setSrollPosition] = useState(0);
  const [burgerClicked, setBurgerClicked] = useState(false);
  let lineOne = useRef();
  let lineTwo = useRef();
  let lineThree = useRef();
  const tl = new TimelineMax();

  const handleClickTop = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  };

  const handleClickScroll = (e) => {
    e.preventDefault();
    window.scrollTo(0, 800);
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
  };

  const handleBurgerOpen = () => {
    if (!burgerClicked) {
      tl.to(lineOne, 0.1, {
        backgroundColor: 'red',
        y: '6.25px',
        rotate: '45',
        ease: Power3.easeIn,
      })
        .to(lineTwo, 0.1, { opacity: '0' })
        .to(lineThree, 0.1, {
          backgroundColor: 'red',
          y: '-12px',
          rotate: '-45',
        });
    } else {
      tl.to(lineOne, 0.1, {
        backgroundColor: '#fff',
        rotate: 0,
        y: 0,
        ease: Power3.easeIn,
      })
        .to(lineTwo, 0.1, { opacity: '1' })
        .to(lineThree, 0.1, { backgroundColor: '#fff', rotate: 0, y: 0 });
    }
    setBurgerClicked(!burgerClicked);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={styles.navigation}>
      <div className={styles.upperNav}>
        <a href="#home" className={styles.logo} onClick={handleClickTop}>
          <img src="/Images/logoGrad.png" alt="logo" />
        </a>
        <button
          type="submit"
          className={styles.burger}
          onClick={handleBurgerOpen}
        >
          <div
            className={styles.line}
            ref={(e) => {
              lineOne = e;
            }}
          />
          <div
            className={styles.midLine}
            ref={(e) => {
              lineTwo = e;
            }}
          />
          <div
            className={styles.line}
            ref={(e) => {
              lineThree = e;
            }}
          />
        </button>
        {burgerClicked && (
          <div className={styles.burgerLinks}>
            <button type="button" onClick={() => window.scrollTo(0, 0)}>
              Home
            </button>
            <button
              type="button"
              onClick={() => window.scrollTo(0, window.innerHeight)}
            >
              Projects
            </button>
            <button
              type="button"
              onClick={() => window.scrollTo(0, 3 * window.innerHeight)}
            >
              Art
            </button>
            <button
              type="button"
              onClick={() =>
                window.scrollTo(
                  0,
                  3 * window.innerHeight +
                    window.innerHeight / 2 +
                    window.innerHeight / 2
                )
              }
            >
              About
            </button>
          </div>
        )}
      </div>
      <div className={styles.lowerNav}>
        <div className={styles.scrollDown}>
          {(() => {
            if (scrollPosition < 200) {
              return (
                <button type="submit" onClick={handleClickScroll}>
                  Scroll Down
                </button>
              );
            }
            if (scrollPosition > 200 && scrollPosition < 2400) {
              return <h1>Projects</h1>;
            }
            if (scrollPosition > 2400 && scrollPosition < 3200) {
              return <h1>Art</h1>;
            }
            return <h1>About</h1>;
          })()}
          {scrollPosition < 200 && <img src="/Icons/arrow.png" alt="arrow" />}
        </div>
        <div className={styles.social}>
          <a href="https://github.com/ImTomz" target="_blank" rel="noreferrer">
            <img src="/Icons/github.png" alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/imtomz/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/Icons/linked.png" alt="linked" />
          </a>
          <a
            href="https://twitter.com/t_bodaa"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/Icons/twitter.png" alt="twitter" />
          </a>
          <a
            href="https://www.instagram.com/t_bodaa/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/Icons/insta.png" alt="insta" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
