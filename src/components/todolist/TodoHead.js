import React, { useContext } from "react";
import { TodoContext } from "../../store/TodoProvider";
import Modal from "../modal/Modal";

const TodoHead = () => {
  const { setOpenModal } = useContext(TodoContext);
  return (
    <div className="flex items-center justify-between flex-none">
      <p className="font-bold text-xl font-montserrat text-[#242424]">
        Students
      </p>
      <div>
        <button
          className="bg-[#2CA4D8] text-white text-sm items-center py-2 px-8 gap-2 rounded-[10px] flex font-medium"
          onClick={() => {
            setOpenModal({ modalName: "Add", active: true });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white" />
          </svg>
          ADD
        </button>
      </div>
      <Modal />
    </div>
  );
};

export default TodoHead;
