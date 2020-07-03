import React from 'react';
import PropTypes from 'prop-types';
import styles from './Title.module.scss';

const Title = ({ title, emoji }) => {
  return (
    <div className={styles.title}>
      <div className={styles.flexContainer}>
        <div className={styles.line} />
        <h1>
          {title}
          <span role="img" aria-label="label">
            {emoji}
          </span>
        </h1>

        <div className={styles.line} />
      </div>
      <div className={styles.lineBottom} />
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  emoji: PropTypes.string,
};

Title.defaultProps = {
  title: '',
  emoji: '',
};

export default Title;
