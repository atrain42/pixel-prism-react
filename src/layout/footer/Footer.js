import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={classes.footer}>
      <div className={classes.footerText}>
        <h2>What's next?</h2>
        <h3>Get in touch</h3>
        <p>
          Please feel free to contact me about any opportunities. Together, we
          can take your business to the next level.
        </p>
        <a href="mailto:maxheimer4211@gmail.com" className={classes.contactBtn}>
          contact
        </a>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#b7e3e4"
          fillOpacity="0.3"
          d="M0,288L48,293.3C96,299,192,309,288,293.3C384,277,480,235,576,192C672,149,768,107,864,128C960,149,1056,235,1152,240C1248,245,1344,171,1392,133.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </section>
  );
};

export default Footer;
