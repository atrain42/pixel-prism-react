import { useRef } from "react";
import { useInView } from "framer-motion";

import classes from "./HeaderTest.module.css";
import logo from "../../img/prism.png";

const HeaderTest = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <header className={classes.headerTest} ref={ref}>
      <div className={classes.testContent}>
        <h1
          style={{
            transform: isInView ? "none" : "translateY(40px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s linear 0.1",
          }}
        >
          Pixel Prism
        </h1>
        <h2
          style={{
            transform: isInView ? "none" : "translateY(40px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s",
          }}
        >
          Web Development
        </h2>
        <p
          style={{
            transform: isInView ? "none" : "translateY(40px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          Together, we will construct the perfect user interface that leaves a
          lasting impression on users. As a designer and developer, I will
          combine art and technology in order to create a breathtaking user
          experience.
        </p>
      </div>
      <img
        src={logo}
        alt="prism"
        style={{
          transform: isInView ? "none" : "scale(1.5)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.75s",
        }}
      />
      <button>see more &#x25BC;</button>
    </header>
  );
};

export default HeaderTest;
