import React from "react";
import TodoFoot from "./TodoFoot";
import TodoHead from "./TodoHead";
import TodoTable from "./TodoTable";

const TodoList = () => {
  return (
    <div className="w-full pl-6 lg:pl-[19rem] pt-10 pb-4 pr-6 ">
      <TodoHead />
      <TodoTable />
      <TodoFoot />
    </div>
  );
};

export default TodoList;
