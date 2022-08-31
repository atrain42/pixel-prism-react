import classes from "./Icons.module.css";

const icons = [
  {
    label: "devicon-react-original-wordmark",
    class: "singleIcon",
  },
  {
    label: "",
    class: "ghost",
  },
  {
    label: "devicon-html5-plain-wordmark",
    class: "singleIcon",
  },
  {
    label: "",
    class: "ghost",
  },
  {
    label: "devicon-css3-plain-wordmark",
    class: "singleIcon",
  },
  {
    label: "",
    class: "ghost",
  },
  {
    label: "",
    class: "ghost",
  },
  {
    label: "devicon-nodejs-plain",
    class: "singleIcon",
  },
  {
    label: "",
    class: "ghost",
  },
  {
    label: "devicon-javascript-plain",
    class: "singleIcon",
  },
  {
    label: "",
    class: "ghost",
  },
  {
    label: "devicon-firebase-plain-wordmark",
    class: "singleIcon",
  },
];

const Icons = () => {
  return (
    <div className={classes.iconBin}>
      {icons.map((el) => (
        <div className={el.class}>
          <i className={el.label} id="icon"></i>
        </div>
      ))}
    </div>
  );
};

export default Icons;
