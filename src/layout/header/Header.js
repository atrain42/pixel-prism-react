import { useRef } from "react";
import { useInView } from "framer-motion";
import classes from "./Header.module.css";

const Header = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className={classes.header} ref={ref}>
      <div className={classes.headerText}>
        <h1
          style={{
            transform: isInView ? "none" : "translateY(20px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s linear",
          }}
        >
          Pixel Prism
        </h1>
        <hr
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.25s linear 1s",
          }}
        />
        <h2
          style={{
            transform: isInView ? "none" : "translateY(-20px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s linear",
          }}
        >
          Web Development and Designs
        </h2>
      </div>
    </section>
  );
};

export default Header;
