import React from "react";

const TodoList = (props) => {
  return (
    <li
      onClick={() => {
        props.lochecked(props.id);
      }}
    >
      {props.name}
    </li>
  );
};

export default TodoList;
