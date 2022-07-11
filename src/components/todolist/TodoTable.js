import React, { useContext } from "react";
import { TodoContext } from "../../store.js/TodoProvider";

const TodoTable = () => {
  const {
    list,
    findResult,
    findGrade,

    setOpenModal,
    setSelected,
    setIndex,
    classFinder,
  } = useContext(TodoContext);
  return (
    <div className="mt-4 border rounded-xl overflow-y-auto h-[80vh]">
      <table className="lg:w-full w-[1000px] font-montserrat">
        <thead align="left">
          <tr className="bg-[#E5E5E5]">
            <th className="text-sm font-medium pl-4 pt-2 pb-2">No.</th>
            <th className="text-sm font-medium">Student Name</th>
            <th className="text-sm font-medium">Class</th>
            <th className="text-sm font-medium">Result</th>
            <th className="text-sm font-medium">Score</th>
            <th className="text-sm font-medium">Grade</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => {
            return (
              <tr
                className="border-b-[0.5px] hover:bg-[#F1F4F8] cursor-pointer relative group"
                key={item.id}
              >
                <td className="text-sm pl-6 py-4 w-[8%]">{index + 1}</td>
                <td className="text-sm w-[20%]">{item.sname}</td>
                <td className="text-sm w-[18%]">
                  {classFinder(item.standard)}
                </td>
                <td className="w-[18%]">
                  <span
                    className={`text-white ${
                      findResult(item.score) === "Passed"
                        ? "bg-[#2CBF6E]"
                        : findResult(item.score) === "Failed"
                        ? "bg-[#F24643]"
                        : "bg-white"
                    } py-0.5 px-2 rounded-2xl font-semibold text-xs flex items-center w-[62px] justify-center`}
                  >
                    {findResult(item.score)}
                  </span>
                </td>
                <td className="text-sm w-[18%]">{item.score}/100</td>
                <td
                  className={`text-sm font-semibold w-[18%] ${
                    findGrade(item.score) === "Average"
                      ? "text-[#2CA4D8]"
                      : findGrade(item.score) === "Excellent"
                      ? "text-[#2CBF6E]"
                      : findGrade(item.score) === "Poor"
                      ? "text-[#F24643]"
                      : "text-black"
                  }`}
                >
                  {findGrade(item.score)}
                </td>
                <td className="absolute right-[17.5px] top-2/4 translate-y-[-50%] hidden group-hover:block">
                  <div className="flex gap-[18.6px]">
                    <button
                      type="button"
                      onClick={() => {
                        setOpenModal({ modalName: "Edit", active: true });
                        setSelected(item);
                        setIndex(index);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M1.75 14.25H2.66667L12.7708 4.14584L12.3125 3.6875L11.8542 3.22917L1.75 13.3333V14.25ZM0.5 15.5V12.8333L12.75 0.583336C12.9861 0.347225 13.2812 0.232642 13.6354 0.239586C13.9896 0.24653 14.2847 0.368058 14.5208 0.604169L15.4167 1.5C15.6528 1.73611 15.7708 2.02778 15.7708 2.375C15.7708 2.72222 15.6528 3.01389 15.4167 3.25L3.16667 15.5H0.5ZM14.4583 2.35417L13.6042 1.5L14.4583 2.35417ZM12.7708 4.14584L12.3125 3.6875L11.8542 3.22917L12.7708 4.14584Z"
                          fill="#2CA4D8"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setOpenModal({ modalName: "Remove", active: true });
                        setSelected(item);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="16"
                        viewBox="0 0 12 16"
                        fill="none"
                      >
                        <path
                          d="M2.25 14.25H9.75V4.25H2.25V14.25ZM0.375 2.58333V1.33333H3.16667L4 0.5H8L8.83333 1.33333H11.625V2.58333H0.375ZM2.25 15.5C1.91667 15.5 1.625 15.375 1.375 15.125C1.125 14.875 1 14.5833 1 14.25V3H11V14.25C11 14.5833 10.875 14.875 10.625 15.125C10.375 15.375 10.0833 15.5 9.75 15.5H2.25ZM2.25 14.25H9.75H2.25Z"
                          fill="#2CA4D8"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {list.length === 0 && (
        <div className="text-center mt-4 text-xl font-montserrat font-medium text-gray-400">
          Empty list
        </div>
      )}
    </div>
  );
};

export default TodoTable;
