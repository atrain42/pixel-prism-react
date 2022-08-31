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
      "I will create a unique user experience that leaves a lasting impression on your potential clients. Through the utilizaiton of white space and subtle animations, together we can take your business to the next level.",
  },
  {
    subtitle: "EFFICIENT",
    title: "Performance",
    icon: performance,
    script:
      "In order to have a good user experience, it is important that your website is usable and performant. Together, we will build a website that has a fast load time and is usable on all device types.",
  },
];

const SingleAlert = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className={classes.alertBin}>
      {data.map((el, index) => (
        <div
          className={classes.alert}
          key={index}
          ref={ref}
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#98ddd4c9"
          fillOpacity="1"
          d="M0,0L48,5.3C96,11,192,21,288,42.7C384,64,480,96,576,112C672,128,768,128,864,112C960,96,1056,64,1152,90.7C1248,117,1344,203,1392,245.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default SingleAlert;
