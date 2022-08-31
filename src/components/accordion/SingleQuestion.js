import classes from "./Question.module.css";

const SingleQuestion = ({ id, title, info, isSelected, setSelectedId }) => {
  return (
    <section className={classes.elementBin}>
      <button className={classes.hi} onClick={() => setSelectedId(id)}>
        {title}
      </button>
      {isSelected && <p>{info}</p>}
    </section>
  );
};

export default SingleQuestion;
