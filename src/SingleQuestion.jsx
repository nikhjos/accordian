import React, { useState } from "react";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";

const SingleQuestion = ({ id, title, info, active, setActive }) => {
  const isActive = id === active;

  const toggleInfo = (id) => {
    const newActiveId = id === active ? null : id;
    setActive(newActiveId);
  };

  console.log(active);

  return (
    <div className="singleQuestion">
      <header>
        <h2 className="title">{title} </h2>
        <button type="button" onClick={() => toggleInfo(id)}>
          {isActive ? <FaMinusSquare /> : <FaPlusSquare />}
        </button>
      </header>

      <p className="info">{isActive && info} </p>
    </div>
  );
};

export default SingleQuestion;
