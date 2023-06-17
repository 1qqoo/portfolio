import project01 from './../img/projects/LearnMin.jpg';
import project01Big from './../img/projects/Learn.jpg';

import project02 from './../img/projects/MestoMin.jpg';
import project02Big from './../img/projects/Mesto.jpg';
import { Link } from 'react-router-dom';

// import project03 from "./../img/projects/03.jpg";
// import project03Big from "./../img/projects/03-big.jpg";

const projects = [
  {
    id: 1,
    title: 'How-to-learn',
    skills: `${'Языки HTML и CSS * Flexbox * Grid Layout * БЭМ nested'}`,
    img: project01,
    imgBig: project01Big,
    gitHubLink: 'https://1qqoo.github.io/how-to-learn/',
  },
  {
    id: 2,
    title: 'Mesto ',
    skills: `${'JavaScript * ReactApi * Grid Layout * Flexbox * БЭМ nested'}`,
    img: project02,
    imgBig: project02Big,
    gitHubLink: 'https://1qqoo.github.io/mesto/',
  },
  // {
  //   id: 3,
  //   title: "portal",
  //   skills: "React",
  //   img: project03,
  //   imgBig: project03Big,
  //   gitHubLink: "https://github.com/",
  // },
];

export { projects };
