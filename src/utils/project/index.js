// Icons
// import html from "/src/assets/icons/html.svg";
// import css from "/src/assets/icons/css.svg";
// import javascript from "/src/assets/icons/javascript.svg";
import tailwind from "/src/assets/icons/tailwind.svg";
import react from "/src/assets/icons/react.svg";
import redux from "/src/assets/icons/redux.svg";
// import python from "/src/assets/icons/python.svg";
// import php from "/src/assets/icons/php.svg";
// import mysql from "/src/assets/icons/mysql.svg";
// import network from "/src/assets/icons/network.svg";
// import typescript from "/src/assets/icons/typescript.svg";
// import nextJs from "/src/assets/icons/next-js.svg";

import figma from "/src/assets/icons/figma.svg";
// import git from "/src/assets/icons/git.svg";
// import github from "/src/assets/icons/github.svg";
// import vsc from "/src/assets/icons/visual-studio-code.svg";

import music from "/src/assets/projects/uiMusic.webp";
import notes from "/src/assets/projects/notesApp.webp";
import klinik from "/src/assets/projects/klinik.webp";
import login from "/src/assets/projects/login.webp";

const projectsData = () => [
  {
    id: 1,
    title: "Ui music list 1",
    desc: "The look of my classical music app",
    image: music,
    tools: [figma],
    git: "-",
    link: "https://www.figma.com/file/IjAgupx9sfVi0U2zHp0Myo/Untitled?type=design&node-id=0%3A1&mode=design&t=y0Jtr0QkTGakIhAn-1",
  },
  {
    id: 2,
    title: "Notes App",
    desc: "Simple Notes App",
    image: notes,
    tools: [react, tailwind],
    git: "https://github.com/Syahridho/Notes-App.git",
    link: "https://notes-app-sandy-six.vercel.app/",
  },
  {
    id: 3,
    title: "Clinik",
    desc: "Simple clinic app",
    image: klinik,
    tools: [react, redux, tailwind],
    git: "https://github.com/Syahridho/rumah-sakit.git",
    link: "https://klinik-sand.vercel.app/",
  },
  {
    id: 4,
    title: "Authentication app",
    desc: "Sign in & Sing up app",
    image: login,
    tools: [react, redux, tailwind],
    git: "https://github.com/Syahridho/simple-login-2.git",
    link: "simple-login-drab.vercel.app",
  },
];

export default projectsData;
