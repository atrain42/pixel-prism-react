import classes from "./SliderButtons.module.css";

const SliderButtons = () => {
  const clickHandler = () => [console.log("texting")];

  return (
    <ul className={classes.SliderButtons}>
      <li onClick={clickHandler}>hi</li>
      <li>bye</li>
    </ul>
  );
};

export default SliderButtons;
