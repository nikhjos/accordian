import React from "react";
import SingleQuestion from "./SingleQuestion";

const Questions = ({ questions, active, setActive }) => {
  return (
    <div className="questions">
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            active={active}
            setActive={setActive}
          />
        );
      })}
    </div>
  );
};

export default Questions;
