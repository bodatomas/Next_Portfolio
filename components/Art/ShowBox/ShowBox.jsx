import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ShowBox.module.scss';

const ShowBox = ({ img, altImg, link }) => {
  const [show, setShow] = useState(false);

  const showLink = () => {
    setShow(true);
  };
  const hideLink = () => {
    setShow(false);
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={styles.showBox}
      onMouseEnter={showLink}
      onMouseLeave={hideLink}
    >
      {show && (
        <div className={styles.hover}>
          <img src="/Icons/Launch.png" alt="icon" />
        </div>
      )}
      <img src={img} alt={altImg} />
    </a>
  );
};

ShowBox.propTypes = {
  img: PropTypes.string,
  altImg: PropTypes.string,
  link: PropTypes.string,
};

ShowBox.defaultProps = {
  img: '',
  altImg: '',
  link: '',
};

export default ShowBox;
