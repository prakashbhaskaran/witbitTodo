import React, { useContext } from "react";
import Add from "./Add";
import Remove from "./Remove";
import Edit from "./Edit";
import { TodoContext } from "../../store.js/TodoProvider";
const Modal = () => {
  const { openModal } = useContext(TodoContext);
  return (
    <div
      className={`fixed top-0 ${
        openModal.active ? "" : "hidden"
      } left-0 z-[1055] bg-[rgba(0,0,0,0.6)] w-full h-full outline-none overflow-x-hidden overflow-y-auto`}
    >
      <div
        className="relative w-auto pointer-events-none flex items-center"
        style={{
          height: "calc(100% - 3.5rem)",
          maxWidth: "480px",
          minHeight: "calc(100% - 3.5rem)",
          margin: "1.75rem auto",
        }}
      >
        <div
          className="border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white rounded-[20px] outline-none text-current"
          style={{ maxHeight: "100%", overflow: "hidden" }}
        >
          <p className="text-xl font-semibold mt-6 ml-4">
            {openModal.modalName} student
          </p>
          <div className="pt-6 px-4">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div
            className="modal-body relative p-4"
            style={{ flex: "auto", overflowY: "auto" }}
          >
            {openModal.modalName === "Remove" ? (
              <Remove />
            ) : openModal.modalName === "Add" ? (
              <Add />
            ) : openModal.modalName === "Edit" ? (
              <Edit />
            ) : (
              <p>Error</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
