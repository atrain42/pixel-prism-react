import SingleQuestion from "./SingleQuestion";
import { useState } from "react";
import classes from "./Question.module.css";

const questions = [
  {
    id: 1,
    title: "Step 1",
    info: "paragraph 1 text",
  },
  {
    id: 2,
    title: "Step 2",
    info: "paragraph 2 text",
  },
  {
    id: 3,
    title: "Step 3",
    info: "paragraph 3 text",
  },
  {
    id: 4,
    title: "Step 4",
    info: "paragraph 4 text",
  },
];

const Questions = () => {
  // const initial = questions[0].info;
  const [selectedId, setSelectedId] = useState(1);

  return (
    <main>
      <div className={classes.container}>
        {questions.map((question) => {
          return (
            <SingleQuestion
              key={question.id}
              isSelected={question.id === selectedId}
              setSelectedId={setSelectedId}
              {...question}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Questions;
