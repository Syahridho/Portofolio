import { ReactNode } from "react";
import Navbar from "../../fragments/Navbar";
import Footer from "../../fragments/Footer";

type PropsTypes = {
  children: ReactNode;
};

const ContainerLayouts = (props: PropsTypes) => {
  const { children } = props;
  return (
    <div className="container mx-auto max-w-[1100px] md:flex relative">
      <Navbar />
      <div className="w-full min-h-screen px-6 py-4 mt-14 md:pt-16 md:mt-0">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default ContainerLayouts;
