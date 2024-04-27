const { skillData, toolslData, educationData } =
  require("./../../utils/home") as any;
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { FaCode, FaToolbox, FaGraduationCap } from "react-icons/fa6";
import ContainerLayouts from "../../components/layouts/ContainerLayout";
import HeaderLayouts from "../../components/layouts/HeaderLayout";
import SkillList from "../../components/fragments/SkillLists";
const Home = () => {
  let skillData: any;
  let toolslData: any;
  let educationData: any;
  const [skill] = useState(skillData());
  const [tools] = useState(toolslData());
  const [edu] = useState(educationData());
  return (
    <ContainerLayouts>
      <div>
        <Fade duration={2000}>
          <h1 className="font-semibold text-2xl tracking-wide leading-9">
            Hello, I&apos;m Syahridho Arjuna Syahputra
          </h1>
        </Fade>
        <Fade duration={2500}>
          <ul className="list-disc list-inside flex flex-col gap-1 my-2 md:flex-row md:gap-4">
            <li>Based in indonesia</li>
            <li>Front End Develover</li>
          </ul>
        </Fade>
        <Fade duration={2800}>
          <p className="text-justify my-5">
            I am a Frontend Developer with a focus on creating aesthetic and
            responsive user interfaces. With skills in HTML, CSS, JavaScript,
            Tailwind and React JS, I have developed a variety of projects,
            ranging from business websites to interactive web applications.
          </p>
        </Fade>
      </div>
      <HeaderLayouts
        title="Skills"
        subTitle="My coding skills"
        icons={<FaCode />}
      >
        <SkillList icons={skill} />
      </HeaderLayouts>

      <HeaderLayouts title="Tools" subTitle="My Tools" icons={<FaToolbox />}>
        <SkillList icons={tools} />
      </HeaderLayouts>

      <HeaderLayouts
        title="Education"
        subTitle="My education"
        icons={<FaGraduationCap />}
      >
        <Fade bottom fraction={0.5} duration={2000}>
          <CardEduList datas={edu} />
        </Fade>
      </HeaderLayouts>
    </ContainerLayouts>
  );
};

export default Home;
