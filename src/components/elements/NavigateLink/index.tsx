import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type PropsTypes = {
  icons?: ReactNode;
  children: ReactNode;
  to: string;
};

const NavigateLink = (props: PropsTypes) => {
  const { to, children, icons = "" } = props;
  return (
    <NavLink
      to={to}
      className="flex items-center gap-2 py-2 w-full tracking-wide px-3.5 rounded transition-all duration-500 hover:gap-4"
    >
      {icons} {children}
    </NavLink>
  );
};

export default NavigateLink;
