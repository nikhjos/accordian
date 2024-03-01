import React, { useState } from "react";

import Question from "./Data";
import Questions from "./Questions";

const App = () => {
  const [questions, setQuestions] = useState(Question);
  const [active, setActive] = useState(1);
  return (
    <main>
      <Questions questions={questions} active={active} setActive={setActive} />
    </main>
  );
};

export default App;
