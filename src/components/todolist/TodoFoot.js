import React, { useContext } from "react";
import { TodoContext } from "../../store.js/TodoProvider";

const TodoFoot = () => {
  const { list } = useContext(TodoContext);
  return (
    <div className="text-xs text-[#242424] flex-none mt-6">
      Showing {list.length} of {list.length} entries
    </div>
  );
};

export default TodoFoot;
