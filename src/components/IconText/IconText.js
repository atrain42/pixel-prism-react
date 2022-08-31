import classes from "./IconText.module.css";

const IconText = (props) => {
  return (
    <div className={classes.iconText}>
      <div className={classes.textBin}>
        <img src={props.icon} alt={props.title} />
        <h1>{props.title}</h1>
      </div>
      <p>{props.content}</p>
    </div>
  );
};

export default IconText;
