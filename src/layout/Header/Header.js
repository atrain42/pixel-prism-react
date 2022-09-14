import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-scroll";
import classes from "./Header.module.css";
import image from "../../img/moon.png";

const Header = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <section className={classes.header} ref={ref}>
      <img
        src={image}
        alt="moon"
        style={{ transform: `translateY(${offsetY * -0.5}px)` }}
      />
      <div className={classes.headerText}>
        <h1 style={{ transform: `translateY(${offsetY * -0.3}px)` }}>
          Pixel Prism
        </h1>
        <div
          className={classes.linebreak}
          style={{ transform: `translateY(${offsetY * -0.2}px)` }}
        ></div>
        <h2 style={{ transform: `translateY(${offsetY * -0.1}px)` }}>
          Web Design and Development
        </h2>
      </div>
    </section>
  );
};

export default Header;
