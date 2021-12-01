import { MdOutlineWavingHand } from "react-icons/md";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="w-full py-32 mx-auto lg:max-w-2xl bodyContainer bg-primary">
      <div className="flex items-center">
        <p>Hi,</p>
        <div className="ml-1 mr-2 text-accent">
          <MdOutlineWavingHand size={24} />
        </div>
        <p>I&apos;m</p>
      </div>
      <h2 className="px-0 mt-2 -ml-1 text-2xl font-black md:text-8xl text-primary">
        Manish Karki
      </h2>

      <p className="text-lg">
        An aspiring fullstack web developer eager for new opportunities
      </p>

      <div className="flex items-center mt-4 space-x-6">
        <a
          className="text-primary hover:text-gray-600"
          href="https://github.com/ManishKarki1997"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub size={24} />
        </a>
        <a
          className=" text-primary hover:text-blue-500"
          href="https://www.linkedin.com/in/manish-karki-179a181b5/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin size={24} />
        </a>
        <a
          className=" text-primary hover:text-blue-500"
          href="https://twitter.com/manishkarki247"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineTwitter size={24} />
        </a>
      </div>
    </div>
  );
};

export default Hero;
