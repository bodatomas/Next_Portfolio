/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import styles from './Error.module.scss';

const Error = () => {
  return (
    <div className={styles.error}>
      <h1>404</h1>
      <h1>Something went wrong ...</h1>
      <Link href="/">
        <a>Back Home</a>
      </Link>
    </div>
  );
};

export default Error;
