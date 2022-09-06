import { useRef } from "react";
import { useInView } from "framer-motion";
import ui from "../../img/performance.png";
import performance from "../../img/ui.png";

import classes from "./SingleAlert.module.css";

const data = [
  {
    subtitle: "INTERFACE",
    title: "User Experience",
    icon: ui,
    script:
      "I will create a unique user experience that leaves a lasting impression on your potential clients. Through the utilizaiton of white space and subtle animations, together we can an eye-catching site. I will create a site that is simple and easy to navigate, without forfeiting any design features in the process.",
  },
  {
    subtitle: "EFFICIENT",
    title: "Performance",
    icon: performance,
    script:
      "In order to have a good user experience, it is important that your website is usable and performant. Together, we will build a website that has a fast load time and is usable on all device types. Emphasis will be put on improving website speed, as that is an important aspect to having a good user interface.",
  },
];

const SingleAlert = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className={classes.alertBin} ref={ref}>
      {data.map((el, index) => (
        <div
          className={classes.alert}
          key={index}
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 1s ease-in",
          }}
        >
          <img src={el.icon} alt={el.subtitle} className={classes.alertIcon} />
          <h2>{el.subtitle}</h2>
          <h1>{el.title}</h1>
          <p>{el.script}</p>
          {el.img && <img src={el.img} alt={el.subtitle} class="alert-img" />}
        </div>
      ))}
    </div>
  );
};

export default SingleAlert;
