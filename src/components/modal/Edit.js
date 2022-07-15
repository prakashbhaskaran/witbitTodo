import React, { useContext } from "react";
import { TodoContext } from "../../store/TodoProvider";

const Edit = () => {
  const {
    setOpenModal,
    findResult,
    findGrade,
    findNameError,
    findScoreError,
    findClassError,
    error,
    selected,
    setSelected,
    editTodo,
    editValidation,
  } = useContext(TodoContext);

  return (
    <form className="flex flex-col gap-6 mt-4" onSubmit={editTodo}>
      <div>
        <label
          className="block text-xs font-medium text-[#7F878A]"
          htmlFor="Name"
        >
          STUDENT NAME*
        </label>
        <input
          id="Name"
          type="text"
          defaultValue={selected.sname}
          placeholder="Enter student name"
          onChange={(e) => {
            setSelected({ ...selected, sname: e.target.value });
            findNameError(e.target.value, e.target.id);
          }}
          className="border w-full px-[14px] py-2 rounded-[10px] mt-2"
          required
        />
        <p className="text-[#F24643] text-xs italic">{error.sname}</p>
      </div>
      <div>
        <label
          className="block text-xs font-medium text-[#7F878A]"
          htmlFor="Class"
        >
          CLASS*
        </label>
        <input
          id="Class"
          type="number"
          placeholder="Enter class"
          defaultValue={selected.standard}
          min="1"
          max="12"
          onChange={(e) => {
            setSelected({ ...selected, standard: e.target.value });
            findClassError(e.target.value, e.target.id);
          }}
          className="border w-full px-[14px] py-2 rounded-[10px] mt-2"
          required
        />
        <p className="standard text-[#666A6C] text-xs italic">
          {error.standard}
        </p>
      </div>

      <div>
        <label
          className="block text-xs font-medium text-[#7F878A]"
          htmlFor="Score"
        >
          SCORE*
        </label>
        <input
          id="Score"
          type="number"
          placeholder="Enter score"
          defaultValue={selected.score}
          min="0"
          max="100"
          step=".01"
          onChange={(e) => {
            setSelected({ ...selected, score: e.target.value });
            findScoreError(e.target.value, e.target.id);
          }}
          className="border w-full px-[14px] py-2 rounded-[10px] mt-2"
          required
        />
        <p className="score text-[#666A6C] text-xs italic">{error.score}</p>
      </div>
      <div>
        <p className="text-xs font-medium text-[#7F878A]">RESULT</p>
        <span
          className={` ${
            findResult(selected.score) === "Passed"
              ? "text-white bg-[#2CBF6E] px-2"
              : findResult(selected.score) === "Failed"
              ? "text-white bg-[#F24643] px-2"
              : "text-black bg-white"
          } py-0.5 rounded-2xl font-semibold text-xs flex items-center w-[62px] mt-2`}
        >
          {findResult(selected.score)}
        </span>
      </div>
      <div>
        <p className="text-xs font-medium text-[#7F878A]">GRADE</p>
        <p
          className={`text-sm font-semibold mt-2 ${
            findGrade(selected.score) === "Average"
              ? "text-[#2CA4D8]"
              : findGrade(selected.score) === "Excellent"
              ? "text-[#2CBF6E]"
              : findGrade(selected.score) === "Poor"
              ? "text-[#F24643]"
              : "text-black"
          }`}
        >
          {findGrade(selected.score)}
        </p>
      </div>
      <div>
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
          className={`text-sm text-white text-center border rounded-[10px] font-bold px-4 py-[6px] ${
            editValidation()
              ? "bg-[#2CA4D8] border-[#2CA4D8]"
              : "bg-gray-400 border-gray-400"
          }`}
          disabled={!editValidation()}
        >
          CONFIRM
        </button>
      </div>
    </form>
  );
};

export default Edit;
