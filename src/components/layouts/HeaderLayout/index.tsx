import { ReactNode } from "react";

type PropsTypes = {
  children: ReactNode;
  icons: ReactNode;
  title: string;
  subTitle: string;
};

const HeaderLayouts = (props: PropsTypes) => {
  const { children, icons, title, subTitle } = props;
  return (
    <div className="border-t border-slate-300 py-6 overflow-hidden">
      <h1 className="font-semibold text-xl flex items-center gap-2">
        {icons}
        {title}
      </h1>
      <p className="mb-6 text-slate-500">{subTitle}</p>
      {children}
    </div>
  );
};

export default HeaderLayouts;
