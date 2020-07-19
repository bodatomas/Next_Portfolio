import styles from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={styles.home}>
      <header>
        <p>
          Html5 CSS3 Javascript React.js Next.js Vue.js Sass Npm Git | UE4
          Blender
        </p>
      </header>
      <div className={styles.title}>
        <div className={styles.container}>
          <h1>
            Hi
            <span role="img" aria-label="label">
              &#x1F44B;
            </span>
            My name is Tomas and I&apos;m frontend developer.
          </h1>
          <p className={styles.subTitle}>
            Hobbyist 3D artist.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
