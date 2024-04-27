import { ReactNode } from "react";

type PropsTypes = {
  children: ReactNode;
  href: string;
  ariaLabel: string;
};

const SocialMedia = (props: PropsTypes) => {
  const { children, href, ariaLabel } = props;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="text-slate-500 block p-2 border border-slate-500 rounded-full transition duration-500 hover:bg-slate-700 hover:text-white hover:border-slate-700"
    >
      {children}
    </a>
  );
};

export default SocialMedia;
