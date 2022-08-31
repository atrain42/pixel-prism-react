import IconText from "../../components/IconText/IconText";
import design from "../../img/design.svg";
import classes from "./Design.module.css";

import sub1 from "../../img/sub1.png";
import sub2 from "../../img/sub2.png";
import sub3 from "../../img/sub3.png";
import sub4 from "../../img/sub4.png";

const Design = () => {
  return (
    <section className={classes.designSection}>
      <div className={classes.iconContainer}>
        <IconText
          icon={sub1}
          title="Research"
          content="Let's start by researching competitors and see how they have their website structured."
        />
        <IconText
          icon={sub2}
          title="Design"
          content="Here is where I start creating user interface of your site and making sure it is accessible and eye-catching to users."
        />
        <IconText
          icon={sub3}
          title="Develop"
          content="Next, I optimize your website for speed and performance. I will test to make sure all sections of your site are functional."
        />
        <IconText
          icon={sub4}
          title="Deploy"
          content="Next I deploy your website to the internet. I will then test it to make sure there are no issues that erupt."
        />
      </div>
      <img src={design} alt="design" className={classes.mainImg} />
    </section>
  );
};

export default Design;
