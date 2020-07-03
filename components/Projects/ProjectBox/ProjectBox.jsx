/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectBox.module.scss';

const ProjectBox = ({ image, name, link, technologies }) => {
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
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className={styles.box}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {hover && (
            <div className={styles.hover}>
              <img src="/Icons/Launch.png" alt="link" />
            </div>
          )}
          <div className={styles.title}>
            <h2>{name}</h2>
          </div>
          <img src={image} alt="mern" />
        </a>
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
  technologies: PropTypes.string,
};

ProjectBox.defaultProps = {
  image: '',
  name: '',
  link: '',
  technologies: '',
};

export default ProjectBox;
