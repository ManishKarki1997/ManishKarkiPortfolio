import React from "react";
import gsap from "gsap/dist/gsap";

const HamburgerMenu = ({ navExpanded, handleNavToggle }) => {
  const timelineRef = React.useRef(null);

  React.useEffect(() => {
    timelineRef.current = gsap.timeline({
      paused: true,
    });

    timelineRef.current.to(".line-top", {
      duration: 0.5,
      transform: "rotateZ(45deg)",
      transformOrigin: "top center",
    });
    timelineRef.current.to(
      ".line-bottom",
      {
        duration: 0.5,
        transform: "rotateZ(-45deg)",
        transformOrigin: "top top",
      },
      "=-.5"
    );
  }, []);

  const onClickHamburgerIcon = () => {
    handleNavToggle();
    if (!navExpanded) {
      timelineRef.current.play();
    } else {
      timelineRef.current.reverse();
    }
  };

  return (
    <button onClick={onClickHamburgerIcon} className="text-primary">
      <span className="block w-5 h-1 mb-1 rounded bg-primaryOpposite line-top"></span>
      <span className="block w-5 h-1 rounded bg-primaryOpposite line-bottom "></span>
    </button>
  );
};

export default HamburgerMenu;
