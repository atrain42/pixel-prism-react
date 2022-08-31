import { useRef } from "react";
import { useInView } from "framer-motion";
import classes from "./Navbar.module.css";

import logo from "../../img/logo.png";

const Navbar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className={classes.nav}
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(-20px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s linear 1.25s",
      }}
    >
      <div className={classes.navOverhang}>
        <div className={classes.homeButton}>
          <img src={logo} alt="logo" id="logo"></img>
        </div>
        {/* <Navigation />
        <MobileNavigation /> */}
      </div>
    </div>
  );
};

export default Navbar;
