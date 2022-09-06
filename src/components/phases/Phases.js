import SinglePhase from "./SinglePhase";

import classes from "./Phases.module.css";
import img1 from "../../img/phase01.svg";
import img2 from "../../img/phase02.svg";
import img3 from "../../img/phase03.svg";
import img4 from "../../img/phase04.svg";

const alerts = [
  {
    id: 1,
    title: "Research",
    info: "All of the websites that we create are custom and tailored to your needs and wants. When building your site, we are in constant contact with you so just let us know what info you want on your site and we will include it!",
    img: img1,
  },
  {
    id: 2,
    title: "Design",
    info: "We expect your website to contain private information like addresses, dates, etc. This is why all of the sites we create are password protected. Simply inform your guests of the password, and they will be able to gain access to your site.",
    img: img2,
  },
  {
    id: 3,
    title: "Develop",
    info: "Take a look at some example websites that we have built to get an idea of the different routes we can take when creating your site. Also, you have the chance to see a completed site with password protection and a functional contact form.",
    img: img3,
  },
  {
    id: 4,
    title: "Deploy",
    info: "Take a look at some example websites that we have built to get an idea of the different routes we can take when creating your site. Also, you have the chance to see a completed site with password protection and a functional contact form.",
    img: img4,
  },
];

const Phases = () => {
  return (
    <section className={classes.phase}>
      {alerts.map((phase) => {
        return <SinglePhase key={phase.id} {...phase} />;
      })}
    </section>
  );
};

export default Phases;
