// import { Link } from "react-router-dom";
import { useRef } from "react";
import { useInView } from "framer-motion";

import classes from "./Phases.module.css";
// import ArrowButton from "../ArrowButton/ArrowButton";

const SinglePhase = ({ title, info, img }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className={classes.phaseContainer}>
      <img src={img} alt={title} />
      <div className={classes.phaseInfo} ref={ref}>
        <h1
          style={{
            transform: isInView ? "none" : "translateX(40px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            transform: isInView ? "none" : "translateX(40px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s",
          }}
        >
          {info}
        </p>
        <a href="mailto:pixelprism42@gmail.com">Get started &#8594;</a>
      </div>
    </div>
  );
};

export default SinglePhase;
