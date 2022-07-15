import React, { createContext, useEffect, useRef, useState } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [student, setStudent] = useState({
    sname: "",
    standard: null,
    score: null,
    id: Date.now(),
  });
  const [selected, setSelected] = useState({});
  const [index, setIndex] = useState(null);
  const [error, setError] = useState({
    sname: "",
    standard: "Please input values between 1 & 12",
    score: "Please input values between 0 & 100",
  });
  const [openModal, setOpenModal] = useState({ modalName: "", active: false });
  const nameRef = useRef();
  const classRef = useRef();
  const scoreRef = useRef();

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("todo")) || [];
    setList(data);
  }, []);

  function findResult(value) {
    if (value === null || value === "") {
      return "-";
    } else if (value >= 0 && value <= 30) return "Failed";
    else if ((value >= 31 && value <= 75) || (value >= 76 && value <= 100))
      return "Passed";
  }
  function findGrade(value) {
    if (value === null || value === "") {
      return "-";
    } else if (value >= 0 && value <= 30) return "Poor";
    else if (value >= 31 && value <= 75) return "Average";
    else if (value >= 76 && value <= 100) return "Excellent";
  }

  function validation() {
    if (
      student.sname !== "" &&
      student.score !== "" &&
      student.score !== null &&
      student.score >= 0 &&
      student.score <= 100 &&
      student.standard > 0 &&
      student.standard < 13 &&
      student.standard !== null &&
      student.standard !== "" &&
      student.id !== undefined
    ) {
      return true;
    }
    return false;
  }
  function editValidation() {
    if (
      selected.sname !== "" &&
      selected.score !== null &&
      selected.score !== "" &&
      selected.score >= 0 &&
      selected.score <= 100 &&
      selected.standard > 0 &&
      selected.standard < 13 &&
      selected.standard !== "" &&
      selected.standard !== null &&
      selected.id !== undefined &&
      index >= 0
    ) {
      return true;
    }
    return false;
  }

  function addToList(e) {
    e.preventDefault();
    if (validation()) {
      let item = [];

      item = JSON.parse(sessionStorage.getItem("todo")) || [];

      item.push(student);

      sessionStorage.setItem("todo", JSON.stringify(item));

      setList([...list, student]);

      setStudent({ sname: "", score: null, standard: null, id: Date.now() });

      setOpenModal({
        modalName: "",
        active: false,
      });
    }
  }
  function classFinder(value) {
    switch (Number(value)) {
      case 1:
        return "1st";
      case 2:
        return "2nd";
      case 3:
        return "3rd";
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
        return `${value}th`;
      default:
        return null;
    }
  }

  function removeFromTodo(id) {
    let items = JSON.parse(sessionStorage.getItem("todo"));

    let filteredItem = items.filter((e) => e.id !== id);

    sessionStorage.setItem("todo", JSON.stringify(filteredItem));

    setList(filteredItem);
    setOpenModal({ modalName: "", active: false });
  }

  function editTodo(e) {
    e.preventDefault();
    if (editValidation()) {
      let items = JSON.parse(sessionStorage.getItem("todo"));

      items.splice(index, 1, selected);

      sessionStorage.setItem("todo", JSON.stringify(items));
      setList(JSON.parse(sessionStorage.getItem("todo")));
      setSelected({});
      setOpenModal({ modalName: "", active: false });
    }
  }

  function findNameError(value) {
    if (value === "") {
      nameRef.current.classList.add("border-red-500", "focus:outline-red-500");
      setError({
        ...error,
        sname: `Error: ${nameRef.current.name} field cannot be left blank`,
      });
    } else {
      nameRef.current.classList.remove(
        "border-red-500",
        "focus:outline-red-500"
      );
      setError({ ...error, sname: "" });
    }
  }

  function findClassError(value) {
    if (value === "") {
      classRef.current.classList.add("border-red-500", "focus:outline-red-500");
      classRef.current.nextSibling.classList.remove("text-[#666A6C]");
      classRef.current.nextSibling.classList.add("text-red-500");

      setError({
        ...error,
        standard: `Error: ${classRef.current.name} field cannot be left blank`,
      });
    } else if (value < 1 || value > 12) {
      classRef.current.classList.add("border-red-500", "focus:outline-red-500");
      classRef.current.nextSibling.classList.remove("text-[#666A6C]");
      classRef.current.nextSibling.classList.add("text-red-500");
    } else {
      classRef.current.classList.remove(
        "border-red-500",
        "focus:outline-red-500"
      );
      classRef.current.nextSibling.classList.remove("text-red-500");
      classRef.current.nextSibling.classList.add("text-[#666A6C]");
      setError({
        ...error,
        standard: `Please input values between 1 & 12`,
      });
    }
  }

  function findScoreError(value) {
    if (value === "") {
      scoreRef.current.classList.add("border-red-500", "focus:outline-red-500");
      scoreRef.current.nextSibling.classList.remove("text-[#666A6C]");
      scoreRef.current.nextSibling.classList.add("text-red-500");

      setError({
        ...error,
        score: `Error: ${scoreRef.current.name} field cannot be left blank`,
      });
    } else if (value > 100 || value < 0) {
      scoreRef.current.classList.add("border-red-500", "focus:outline-red-500");
      scoreRef.current.nextSibling.classList.remove("text-[#666A6C]");
      scoreRef.current.nextSibling.classList.add("text-red-500");
      setError({
        ...error,
        score: `Error: Please input values from 0 to 100`,
      });
    } else {
      scoreRef.current.classList.remove(
        "border-red-500",
        "focus:outline-red-500"
      );
      scoreRef.current.nextSibling.classList.remove("text-red-500");
      scoreRef.current.nextSibling.classList.add("text-[#666A6C]");
      setError({ ...error, score: "Please input values between 0 & 100" });
    }
  }

  const value = {
    list,
    findResult,
    findGrade,
    openModal,
    setOpenModal,
    student,
    setStudent,
    addToList,
    findNameError,
    findScoreError,
    findClassError,
    error,
    setError,
    removeFromTodo,
    editTodo,
    selected,
    setSelected,
    setIndex,
    classFinder,
    validation,
    editValidation,
    nameRef,
    classRef,
    scoreRef,
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
