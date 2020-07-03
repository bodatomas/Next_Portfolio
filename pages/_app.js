/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import '../styles/styles.css';
import 'aos/dist/aos.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
