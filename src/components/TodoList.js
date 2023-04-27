import React, { useState } from "react";
import "../css/todoList.css";

function TodoList() {
  //variable to store the list of items
  const itemList = [
    "Buy new sweatshirt",
    "Begin promotional phase",
    "Read an article",
    "Try not to fall asleep",
    'Watch "Sherlock"',
    "Begin QA for the product",
    "Go for a walk",
  ];
  //used useState hook to handle the checkbox
  const [isChecked, setIsChecked] = useState(itemList.map(() => false));

  const handleCheck = (index) => {
    const newChecked = [...isChecked];
    newChecked[index] = !isChecked[index];
    setIsChecked(newChecked);
  };

  return (
    <div className="container mt-3">
      {/* Display style according to the checkbox whether it is checked or not */}
      {itemList.map((item, index) => {
        const style = {
          color: isChecked[index] ? "lightgrey" : "black",
        };
        return (
          <div className="row p-2" key={index}>
            {/* For displaying the list items */}
            <div className="col-8 d-flex float-start">
              <p style={style} onClick={() => handleCheck(index)}>
                {item}
              </p>
            </div>
            {/* For displaying the checkboxes */}
            <div className="col-4 d-flex justify-content-end">
              <input
                type="checkbox"
                className="checkBox"
                checked={isChecked[index]}
                onChange={() => handleCheck(index)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
