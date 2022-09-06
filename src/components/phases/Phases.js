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
    info: "First, we will start by researching similar businesses and taking note how their websites are structured. This gives us a good starting point in understanding how to structure your website.",
    img: img1,
  },
  {
    id: 2,
    title: "Design",
    info: "In the design phase, I will begin building the user interface of your website. Through the utilization of white space and subtle animations, together, we will leave a lasting impression on potential customers.",
    img: img2,
  },
  {
    id: 3,
    title: "Develop",
    info: "During the develop phase, I will maximize the performance of your site. I will make sure your site is has a fast load time, is accessible on all device types, and is free of potential bugs.",
    img: img3,
  },
  {
    id: 4,
    title: "Deploy",
    info: "After any issues with the site are resolved, it is time to deploy your site! I will deploy your site to the Netlify servers and potential customers now have access to your site.",
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
