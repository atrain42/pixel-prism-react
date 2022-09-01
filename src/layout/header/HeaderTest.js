import classes from "./HeaderTest.module.css";
import logo from "../../img/prism.png";

const HeaderTest = () => {
  return (
    <header className={classes.headerTest}>
      <div className={classes.testContent}>
        <h1>Pixel Prism</h1>
        <h2>Web Development</h2>
        <p>
          Together, we will construct the perfect user interface that leaves a
          lasting impression on users. As a designer and developer, I will
          combine art and technology in order to create a breathtaking user
          experience.
        </p>
      </div>
      <img src={logo} alt="prism" />
      <button>see more &#x25BC;</button>
    </header>
  );
};

export default HeaderTest;
