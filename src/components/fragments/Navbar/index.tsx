import { useState } from "react";
import {
  FaBars,
  FaXmark,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaRegEnvelope,
  FaGithub,
  FaHouse,
  FaClipboardCheck,
  FaCertificate,
  FaGlobe,
} from "react-icons/fa6";
import NavigateLink from "../../elements/NavigateLink";
import SocialMedia from "../../elements/SocialMedia";
import profile from "/src/assets/profile.jpg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleHamburger = () => {
    setToggle(!toggle);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-white shadow-sm md:sticky md:h-screen md:w-96 md:pt-16">
      <div className="container mx-auto px-4 ">
        <div className="h-14 flex justify-between items-center  md:justify-center md:h-auto">
          <div className="flex items-center gap-2 md:flex-col">
            <div className="overflow-hidden w-8 h-8 border border-slate-800 rounded-full shadow-2xl  md:border-2 md:p-0.5 md:w-24 md:h-24">
              <img
                src={profile}
                alt="profile"
                className="w-full rounded-full"
              />
            </div>

            <h1 className="tracking-wide font-medium md:text-center md:mt-2">
              Syahridho Arjuna Syahputra
            </h1>
          </div>
          <button
            id="hamburger"
            aria-label="hamburger"
            className="p-2 hover:bg-slate-100 rounded md:hidden"
            onClick={() => handleHamburger()}
          >
            {toggle ? (
              <FaXmark className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
        <div
          className={`${
            !toggle && "hidden"
          } md:block md:mt-4 h-screen md:h-auto`}
        >
          <ul className="flex flex-col gap-1 py-4 border-y border-slate-200">
            <li>
              <NavigateLink to="/" icons={<FaHouse />}>
                Home
              </NavigateLink>
            </li>
            <li>
              <NavigateLink to="/projects" icons={<FaClipboardCheck />}>
                Projects
              </NavigateLink>
            </li>
            <li>
              <NavigateLink to="/certificates" icons={<FaCertificate />}>
                Certificate
              </NavigateLink>
            </li>
            <li>
              <NavigateLink to="/contact" icons={<FaGlobe />}>
                Contact
              </NavigateLink>
            </li>
          </ul>
          <div className="py-8 md:py-6">
            <h1 className="text-center text-slate-500">Social Media</h1>
            <ul className="flex justify-center items-center gap-2 py-4">
              <li>
                <SocialMedia
                  href="mailto:syahridhosyahputra@gmail.com?Subject=I want help you"
                  ariaLabel="email"
                >
                  <FaRegEnvelope />
                </SocialMedia>
              </li>
              <li>
                <SocialMedia
                  href="https://linkedin.com/in/syahridho"
                  ariaLabel="linkid"
                >
                  <FaLinkedin />
                </SocialMedia>
              </li>
              <li>
                <SocialMedia
                  href="https://github.com/Syahridho"
                  ariaLabel="github"
                >
                  <FaGithub />
                </SocialMedia>
              </li>
              <li>
                <SocialMedia
                  href="https://www.instagram.com/syahridhoa_/"
                  ariaLabel="instagram"
                >
                  <FaInstagram />
                </SocialMedia>
              </li>
              <li>
                <SocialMedia
                  href="https://t.me/syahridhoo"
                  ariaLabel="telegram"
                >
                  <FaTelegram />
                </SocialMedia>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
