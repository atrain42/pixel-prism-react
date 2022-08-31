import { useRef } from "react";
import { useInView } from "framer-motion";
import classes from "./Footer.module.css";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className={classes.footer}>
      <div className={classes.footerText} ref={ref}>
        <h2
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 1s ease-in",
          }}
        >
          What's next?
        </h2>
        <h3
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.1s ease-in",
          }}
        >
          Get in touch
        </h3>
        <p
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 1s ease-in",
          }}
        >
          Please feel free to contact me about any opportunities. Together, we
          can take your business to the next level.
        </p>
        <a
          href="mailto:pixelprism42@gmail.com"
          className={classes.contactBtn}
          style={{
            transform: isInView ? "none" : "translateY(20px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.25s ease-in 1s",
          }}
        >
          contact
        </a>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f5f5f5"
          fillOpacity="1"
          d="M0,288L48,293.3C96,299,192,309,288,293.3C384,277,480,235,576,192C672,149,768,107,864,128C960,149,1056,235,1152,240C1248,245,1344,171,1392,133.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <h3 className={classes.email}>pixelprism42@gmail.com</h3>
    </section>
  );
};

export default Footer;
