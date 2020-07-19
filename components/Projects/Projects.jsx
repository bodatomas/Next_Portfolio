import React, { useEffect } from 'react';
import Aos from 'aos';
import styles from './Projects.module.scss';
import ProjectBox from './ProjectBox/ProjectBox';

const ProjectsData = [
  {
    name: 'PokeInfo Vue.js',
    image: '/Images/Screenshot-4.png',
    link: 'https://github.com/ImTomz/PokeInfo',
    linkDemo: 'https://clever-visvesvaraya-d647ba.netlify.app',
    technologies: 'Vue.js REST',
    id: 1,
  },
  {
    name: 'React/Redux-e-commerce',
    image: '/Images/Redux.png',
    link: 'https://github.com/ImTomz/React-Redux-e-commerce',
    linkDemo: 'https://naughty-aryabhata-9fd534.netlify.app/',
    technologies: 'React Redux',
    id: 5,
  },
  {
    name: 'Static HTML web',
    image: '/Images/Screenshot-2.png',
    link: 'https://github.com/ImTomz/Static-responsive-Web',
    linkDemo: 'https://sharp-benz-9bf026.netlify.app',
    technologies: 'HTML5 CSS3 Javascript',
    id: 2,
  },
  {
    name: 'Landing page GSAP',
    image: '/Images/Screenshot-3.png',
    link: 'https://github.com/ImTomz/Landing_PageGSAP',
    linkDemo: 'https://gifted-lamport-4a085b.netlify.app/',
    technologies: 'HTML5 CSS3 Javascript GSAP',
    id: 3,
  },
  {
    name: 'MERN Stack',
    image: '/Images/Screenshot.png',
    link: 'https://github.com/ImTomz/MERN_Todolist_App',
    technologies: 'MongoDB Express React.js Node.js',
    id: 4,
  },
];

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className={styles.projects}>
      {ProjectsData.map((item) => {
        return (
          <div data-aos="fade-up" key={item.id}>
            <ProjectBox
              name={item.name}
              image={item.image}
              link={item.link}
              linkDemo={item.linkDemo}
              technologies={item.technologies}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
