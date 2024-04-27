import { Fade } from "react-awesome-reveal";
import ImgSkill from "../../elements/ImgSkill";

type PropsTypes = {
  icons: any;
};

const SkillList = (props: PropsTypes) => {
  const { icons } = props;
  return (
    <div className="flex flex-wrap gap-5 justify-center py-4">
      <Fade fraction={0.5} duration={3000}>
        {icons.map((icon: any) => (
          <ImgSkill
            key={icon.id}
            img={icon.image}
            alt={icon.title}
            title={icon.title}
            study={icon.study}
          />
        ))}
      </Fade>
    </div>
  );
};

export default SkillList;
