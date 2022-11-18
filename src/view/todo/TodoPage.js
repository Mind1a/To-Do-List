import { useNavigate } from "react-router-dom";
import { useAuth } from "../../components/Login/auth";
import { useImg } from "../../components/PhotoUpload/PhotoUpload";
import React, { useState, useEffect } from "react";
import Popup from "../../modal/Popup";
// Import Styled components

import {
  Todo,
  TodoHeader,
  HeaderTitle,
  HeaderUserDiv,
  HeaderName,
  HeaderImgDiv,
  HeaderImg,
  TodoBody,
  TodoTitle,
  TodoSetDiv,
  TodoSetInpuDiv,
  TodoSetBtnDiv,
  TodoUpdateDiv,
  TodoList,
  TodoText,
  TodoSpan,
  TodoIcons,
  TodoDoneImg,
  TodoEditImg,
  TodoRemoveImg,
} from "./TodoPage.styled";

//
// get todos from local storage
const getTodosFromLS = () => {
  const data = localStorage.getItem("Todos");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

//
// Authorization Navigate
export const TodoPage = () => {
  // import from Photo Upload
  const imgUp = useImg();
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
    imgUp.setImage(null);
  };

  // todo List
  const [toDo, setTodo] = useState(getTodosFromLS());

  //Local Storage Todo list
  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(toDo));
  }, [toDo]);

  // Temp state
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  // Add task function

  const addTask = () => {
    //
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setTodo([...toDo, newEntry]);
      setNewTask("");
    }
  };

  // Delete Task
  const deleteTask = (id) => {
    let newTask = toDo.filter((task) => task.id !== id);
    setTodo(newTask);
  };

  // Completed Tasks

  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }

      return task;
    });
    setTodo(newTask);
    //
  };

  // Cancel update
  const cancelUpdate = () => {
    setUpdateData("");
  };

  // Change Task
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  // Update Task

  const updateTask = () => {
    if (updateData.id) {
      let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
      let updatedObject = [...filterRecords, updateData];
      setTodo(updatedObject);
      setUpdateData("");
    }
  };

  // Pop up

  const [modal, setModal] = useState(false);

  // Open popup
  const openModal = () => {
    setModal(true);
  };

  // Close popup
  const closeModal = () => {
    setModal(!modal);
  };

  // TODO Icon Home page
  const handleHomePage = () => {
    navigate("/");
  };

  return (
    <Todo>
      <TodoHeader>
        <HeaderTitle onClick={handleHomePage}> TO DO </HeaderTitle>
        <HeaderUserDiv onClick={openModal}>
          <HeaderName> {auth.profileUsername} </HeaderName>
          <HeaderImgDiv>
            <HeaderImg src={auth.profileImg} />
          </HeaderImgDiv>
        </HeaderUserDiv>
        <Popup
          logOut={() => handleLogout()}
          userName={auth.profileUsername}
          userImg={auth.profileImg}
          totalTask={toDo.length}
          modal={modal}
          closeModal={() => closeModal()}
        />
      </TodoHeader>
      <TodoBody>
        <TodoTitle> Add Your Daily Tasks </TodoTitle>
        <div>
          {updateData && updateData ? (
            <TodoSetDiv>
              <TodoSetInpuDiv
                value={updateData && updateData.title}
                onChange={(e) => changeTask(e)}
              />
              <TodoUpdateDiv color="#5EFC8D" onClick={updateTask}>
                Update
              </TodoUpdateDiv>
              <TodoUpdateDiv onClick={cancelUpdate}>Cancel</TodoUpdateDiv>
            </TodoSetDiv>
          ) : (
            <TodoSetDiv>
              <TodoSetInpuDiv
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="my task"
              />
              <TodoSetBtnDiv onClick={addTask}>Add</TodoSetBtnDiv>
            </TodoSetDiv>
          )}
        </div>
        {/*  */}
        {toDo && toDo.length ? "" : <TodoTitle> Create New Task :) </TodoTitle>}
        {toDo &&
          toDo
            .sort((a, b) => (a.id > b.id ? 1 : -1))
            .map((task, index) => {
              return (
                <React.Fragment key={task.id}>
                  <TodoList color={task.status ? "silver" : "black"}>
                    <TodoText>
                      <TodoSpan> {index + 1} </TodoSpan>
                      <TodoSpan> {task.title}</TodoSpan>
                    </TodoText>
                    <TodoIcons>
                      {task.status ? null : (
                        <TodoSpan
                          title="Edit"
                          onClick={() =>
                            setUpdateData({
                              id: task.id,
                              title: task.title,
                              status: task.status ? true : false,
                            })
                          }
                        >
                          <TodoEditImg />
                        </TodoSpan>
                      )}
                      <TodoSpan
                        title="Done/not Done"
                        onClick={(e) => markDone(task.id)}
                      >
                        <TodoDoneImg />
                      </TodoSpan>
                      <TodoSpan
                        title="Remove"
                        onClick={() => deleteTask(task.id)}
                      >
                        <TodoRemoveImg />
                      </TodoSpan>
                    </TodoIcons>
                  </TodoList>
                </React.Fragment>
              );
            })}
      </TodoBody>
    </Todo>
  );
};
