import { useRef } from "react";
import { useInView } from "framer-motion";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className={classes.navbar}
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(-20px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s linear",
      }}
    >
      <a href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
    </div>
  );
};

export default Navbar;
