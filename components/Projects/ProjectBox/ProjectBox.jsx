/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectBox.module.scss';

const ProjectBox = ({ image, name, link, technologies, linkDemo }) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div className={styles.flexContainer}>
      <div className={styles.line} />
      <div className={styles.projectBox}>
        <div className={styles.lineVert} />
        <div
          className={styles.box}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {hover && (
            <div className={styles.hover}>
              <div className={styles.linksHover}>
                <a href={linkDemo} target="_blank" rel="noreferrer">
                  Live Demo
                  <img src="/Icons/Launch.png" alt="link" />
                </a>
                <a href={link} target="_blank" rel="noreferrer">
                  Code
                  <img src="/Icons/Launch.png" alt="link" />
                </a>
              </div>
            </div>
          )}
          <div className={styles.title}>
            <h2>{name}</h2>
          </div>
          <img src={image} alt="mern" />
        </div>
        <div className={styles.lineVert} />
        <h3>{technologies}</h3>
      </div>
      <div className={styles.line} />
    </div>
  );
};

ProjectBox.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  link: PropTypes.string,
  linkDemo: PropTypes.string,
  technologies: PropTypes.string,
};

ProjectBox.defaultProps = {
  image: '',
  name: '',
  link: '',
  linkDemo: '',
  technologies: '',
};

export default ProjectBox;
