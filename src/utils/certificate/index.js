import aHtml from "./../../assets/certificates/always/always-html.webp";
import aCss from "./../../assets/certificates/always/always-css.webp";
import aJs from "./../../assets/certificates/always/always-js.webp";
import aPhp from "./../../assets/certificates/always/always-php.webp";
import aMysql from "./../../assets/certificates/always/always-mysql.webp";

import dAws from "./../../assets/certificates/dicoding/dicoding-aws.webp";
import dBackend from "./../../assets/certificates/dicoding/dicoding-backend.webp";
import dDevops from "./../../assets/certificates/dicoding/dicoding-devops.webp";
import dFrondEnd from "./../../assets/certificates/dicoding/dicoding-frond-end.webp";
import dJaringan from "./../../assets/certificates/dicoding/dicoding-jaringan.webp";
import dJs from "./../../assets/certificates/dicoding/dicoding-js.webp";
import dMysql from "./../../assets/certificates/dicoding/dicoding-mysql.webp";
import dProyek from "./../../assets/certificates/dicoding/dicoding-proyek.webp";
import dPsoft from "./../../assets/certificates/dicoding/dicoding-Psoftware.webp";
import dPweb from "./../../assets/certificates/dicoding/dicoding-Pweb.webp";
import dSolid from "./../../assets/certificates/dicoding/dicoding-solid.webp";
import dUx from "./../../assets/certificates/dicoding/dicoding-ux.webp";
import dMachine from "./../../assets/certificates/dicoding/dicoding-machineLearning.webp";
import dPython from "./../../assets/certificates/dicoding/dicoding-python.webp";
import dVisualData from "./../../assets/certificates/dicoding/dicoding-visualData.webp";

import mtcna from "./../../assets/certificates/mtcna/mtcna.webp";

import pHtmlCss from "./../../assets/certificates/progate/progate-html&css.webp";
import pJs from "./../../assets/certificates/progate/progate-js.webp";
import pSass from "./../../assets/certificates/progate/progate-sass.webp";
import pGit from "./../../assets/certificates/progate/progate-git.webp";
import pMysql from "./../../assets/certificates/progate/progate-mysql.webp";

const HeroCertrificates = () => [
  {
    id: 1,
    title: "fronded",
    image: dFrondEnd,
  },
  {
    id: 2,
    title: "UI/UX",
    image: dUx,
  },
  {
    id: 3,
    title: "MTCNA",
    image: mtcna,
  },
  {
    id: 4,
    title: "Git",
    image: pGit,
  },
  {
    id: 5,
    title: "HTML & CSS",
    image: pHtmlCss,
  },
];

const AllCertificate = () => [
  {
    FrondEnd: [
      {
        id: 1,
        image: dFrondEnd,
      },
      {
        id: 2,
        image: dJs,
      },
      {
        id: 3,
        image: dPweb,
      },
      {
        id: 4,
        image: dPsoft,
      },
      {
        id: 5,
        image: dSolid,
      },
      {
        id: 6,
        image: pHtmlCss,
      },
      {
        id: 7,
        image: pJs,
      },
      {
        id: 8,
        image: pSass,
      },
      {
        id: 9,
        image: pGit,
      },
      {
        id: 10,
        image: aHtml,
      },
      {
        id: 11,
        image: aCss,
      },
      {
        id: 12,
        image: aJs,
      },
    ],
    BackEnd: [
      {
        id: 1,
        image: dBackend,
      },
      {
        id: 2,
        image: dAws,
      },
      {
        id: 3,
        image: dMysql,
      },
      {
        id: 4,
        image: dProyek,
      },
      {
        id: 5,
        image: pMysql,
      },
      {
        id: 6,
        image: aPhp,
      },
      {
        id: 7,
        image: aMysql,
      },
    ],
    DevOps: [
      {
        id: 1,
        image: dDevops,
      },
      {
        id: 2,
        image: dJaringan,
      },
      {
        id: 3,
        image: dProyek,
      },
      {
        id: 4,
        image: mtcna,
      },
    ],
    Mechine: [
      {
        id: 1,
        image: dMachine,
      },
      {
        id: 2,
        image: dPython,
      },
      {
        id: 3,
        image: dVisualData,
      },
    ],
  },
];

export { HeroCertrificates, AllCertificate };
