import { useRef } from "react";
import { useInView } from "framer-motion";
import classes from "./Service.module.css";
import agile from "../../img/agile.png";
import app from "../../img/app.png";
import cloud from "../../img/cloud.png";
import product from "../../img/product.png";

const data = [
  {
    title: "SEO",
    info: "Good SEO means that Google will recommend your business when people search related content.",
    icon: agile,
  },
  {
    title: "Marketing",
    info: "To inform potential customers of the different aspects of your business and the different services that your business offers.",
    icon: app,
  },
  {
    title: "Promotion",
    info: "Alert customers of any promotions that are occuring within your business. This may propel potential customers to act quicky.",
    icon: product,
  },
  {
    title: "Support",
    info: "We can provide support to potential customers who have questions or need to get in contact with the business owner.",
    icon: cloud,
  },
];

const Service = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className={classes.service} ref={ref}>
      {data.map((el, index) => (
        <div
          className={classes.singleService}
          key={index}
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 1s ease-in",
          }}
        >
          <div className={classes.serviceTitle}>
            <img src={el.icon} alt={el.title} className={classes.icon}></img>
            <h1>{el.title}</h1>
          </div>
          <p>{el.info}</p>
        </div>
      ))}
    </section>
  );
};

export default Service;
