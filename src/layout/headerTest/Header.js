import { useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-scroll";
import classes from "./Header.module.css";
import Image from "../../img/t1.svg";

const Header = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className={classes.header} ref={ref}>
      <div className={classes.headerText}>
        <h1
          style={{
            transform: isInView ? "none" : "translateY(40px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s linear 1s",
          }}
        >
          Pixel Prism
        </h1>
        <h1
          style={{
            transform: isInView ? "none" : "translateY(40px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s linear 1.5s",
          }}
        >
          Web Development
        </h1>
        <p
          style={{
            transform: isInView ? "none" : "translateY(40px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s linear 2s",
          }}
        >
          Together, we will construct the perfect user interface that leaves a
          lasting impression on users. As a designer and developer, I will
          combine art and technology in order to create a breathtaking user
          experience.
        </p>
      </div>
      <img
        src={Image}
        alt=""
        className={classes.headerSvg}
        style={{
          transform: isInView ? "none" : "scale(1.25)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s ease-in 2.5s",
        }}
      />

      <Link to="about" spy={true} smooth={true} offset={0} duration={500}>
        <button className={classes.seeMore}>see more &#x25BC;</button>
      </Link>
    </section>
  );
};

export default Header;
