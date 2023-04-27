import React from "react";
import "../css/addTodo.css";

// For adding the Plus(+) button at the bottom
function AddTodo() {
  return (
    <>
      <div className="button-position-relative">
        <div className="button-position-absolute">
          <button className="btn btn-success add-button">+</button>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
