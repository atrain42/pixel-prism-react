import { useRef } from "react";
import { useInView } from "framer-motion";
import IconText from "../../components/IconText/IconText";
import design from "../../img/design.svg";
import classes from "./Design.module.css";

import sub1 from "../../img/sub1.png";
import sub2 from "../../img/sub2.png";
import sub3 from "../../img/sub3.png";
import sub4 from "../../img/sub4.png";

const Design = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className={classes.designSection} ref={ref}>
      <div
        className={classes.iconContainer}
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 1s ease-in",
        }}
      >
        <IconText
          icon={sub1}
          title="Research"
          content="Let's start by researching competitors and see how they have their website structured."
          num="01"
        />
        <IconText
          icon={sub2}
          title="Design"
          content="Here is where I start creating user interface of your site and making sure it is accessible and eye-catching to users."
          num="02"
        />
        <IconText
          icon={sub3}
          title="Develop"
          content="Next, I optimize your website for speed and performance. I will test to make sure all sections of your site are functional."
          num="03"
        />
        <IconText
          icon={sub4}
          title="Deploy"
          content="Next I deploy your website to the internet. I will then test it to make sure there are no issues that erupt."
          num="04"
          id="last"
        />
      </div>
      <img
        src={design}
        alt="design"
        className={classes.mainImg}
        style={{
          transform: isInView ? "none" : "scale(1.1)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s ease-in",
        }}
      />
    </section>
  );
};

export default Design;
