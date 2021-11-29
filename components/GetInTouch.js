import React from "react";
import gsap from "gsap/dist/gsap";
import { useInView } from "react-intersection-observer";

import { MdOutlineWavingHand } from "react-icons/md";

const GetInTouch = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const timeline = React.useRef(null);

  React.useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current.fromTo(
      ".get-in-touch",
      {
        y: 20,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.3,
        stagger: {
          amount: 0.3,
        },
        ease: "sine.inOut",
      }
    );

    return () => timeline.current.kill();
  }, []);

  React.useEffect(() => {
    if (inView) {
      timeline.current.play();
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="container w-full mx-auto mt-56 text-center bg-primary md:w-7/12 get-in-touch"
    >
      <h3 className="section-header">Get In Touch</h3>
      <p className="mt-4 mb-12 text-lg text-tertiary">
        Free to work on a project or do something together. Always ready to
        learn on new tech stack or projects. Let&apos;s get in touch!
      </p>

      <div className="flex items-center justify-center">
        <button className="flex items-center px-16 py-3 space-x-4 transition-colors duration-150 border-2 rounded-md text-accent hover:bg-accent hover:text-white border-primary mail-btn">
          <MdOutlineWavingHand size={20} />
          <span>Say Hi</span>
        </button>
      </div>
    </div>
  );
};

export default GetInTouch;
