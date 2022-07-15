import React, { useContext } from "react";
import { TodoContext } from "../../store/TodoProvider";

const Remove = () => {
  const { setOpenModal, selected, removeFromTodo } = useContext(TodoContext);
  return (
    <div className="mt-4">
      <p className="font-bold">
        Are you sure you want to remove the current user from the list?
      </p>
      <div className="mt-6">
        {" "}
        <p className="block text-xs font-medium text-[#7F878A]">STUDENT NAME</p>
        <p className="mt-2 text-sm">{selected.sname}</p>
      </div>
      <div className="mt-6">
        <p className="block text-xs font-medium text-[#7F878A]">CLASS</p>
        <p className="mt-2 text-sm">{selected.standard}</p>
      </div>
      <div className="py-6">
        <div className="w-full border-t border-gray-300"></div>
      </div>
      <div className="flex justify-end gap-5">
        <button
          type="button"
          className="text-sm text-center border border-[#2CA4D8] rounded-[10px] font-bold px-4 py-[6px] text-[#2CA4D8]"
          onClick={() => setOpenModal({ modalName: "", active: false })}
        >
          CANCEL
        </button>
        <button
          type="submit"
          className="text-sm text-white text-center border border-[#F24643] rounded-[10px] font-bold px-4 py-[6px] bg-[#F24643]"
          onClick={() => removeFromTodo(selected.id)}
        >
          REMOVE
        </button>
      </div>
    </div>
  );
};

export default Remove;
