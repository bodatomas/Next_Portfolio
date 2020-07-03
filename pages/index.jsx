import Head from 'next/head';
import Home from '../components/Home/Home';
import Layout from '../components/Layout/Layout';
import Projects from '../components/Projects/Projects';
import Art from '../components/Art/Art';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';

function App() {
  return (
    <Layout>
      <Head>
        <title>Tomas Boda</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Home />
      <Projects />
      <Art />
      <About />
      <Footer />
    </Layout>
  );
}

export default App;
