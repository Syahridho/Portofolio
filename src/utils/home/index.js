// Icons
import html from "/src/assets/icons/html.svg";
import css from "/src/assets/icons/css.svg";
import javascript from "/src/assets/icons/javascript.svg";
import tailwind from "/src/assets/icons/tailwind.svg";
import react from "/src/assets/icons/react.svg";
import redux from "/src/assets/icons/redux.svg";
import python from "/src/assets/icons/python.svg";
import php from "/src/assets/icons/php.svg";
import mysql from "/src/assets/icons/mysql.svg";
import network from "/src/assets/icons/network.svg";
import typescript from "/src/assets/icons/typescript.svg";
import nextJs from "/src/assets/icons/next-js.svg";

import figma from "/src/assets/icons/figma.svg";
import git from "/src/assets/icons/git.svg";
import github from "/src/assets/icons/github.svg";
import vsc from "/src/assets/icons/visual-studio-code.svg";

import university from "/src/assets/home/logo.webp";

const skillData = () => [
  {
    id: 1,
    title: "HTML",
    image: html,
    study: false,
  },
  {
    id: 2,
    title: "CSS",
    image: css,
    study: false,
  },
  {
    id: 3,
    title: "JavaScript",
    image: javascript,
    study: false,
  },
  {
    id: 4,
    title: "Tailwind",
    image: tailwind,
    study: false,
  },
  {
    id: 5,
    title: "ReactJs",
    image: react,
    study: false,
  },
  {
    id: 6,
    title: "Redux",
    image: redux,
  },
  {
    id: 7,
    title: "Python",
    image: python,
    study: false,
  },
  {
    id: 8,
    title: "Php",
    image: php,
    study: false,
  },
  {
    id: 9,
    title: "MySql",
    image: mysql,
    study: false,
  },
  {
    id: 10,
    title: "Network",
    image: network,
    study: false,
  },
  {
    id: 11,
    title: "TypeScript",
    image: typescript,
    study: true,
  },
  {
    id: 12,
    title: "NextJs",
    image: nextJs,
    study: true,
  },
];

const toolslData = () => [
  {
    id: 1,
    title: "Figma",
    image: figma,
  },
  {
    id: 2,
    title: "Git",
    image: git,
  },
  {
    id: 3,
    title: "Github",
    image: github,
  },
  {
    id: 4,
    title: "VCS",
    image: vsc,
  },
];

const educationData = () => [
  {
    id: 1,
    title: "University Lancang Kuning",
    subTitle: "Informatics Engineering",
    time: "Mei 2022 - Now",
    status: "~ 4rd semester",
    image: university,
  },
];

export { skillData, toolslData, educationData };
