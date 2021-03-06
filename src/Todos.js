import { useState } from "react";
import { Row, Col } from "antd";
import { Button } from "antd";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { AiOutlineFileDone } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import { useStoreState, useStoreActions } from "easy-peasy";

const done = {
  textDecoration: "line-through",
  color: "#ff0000!important",
};

const undone = {
  textDecoration: "none",
};

const Todos = () => {
  const [task, setTask] = useState("");
  const [editMode, seteditMode] = useState(false);
  const [updateId, setupdateId] = useState("");
  const [updateTask, setupdateTask] = useState("");
  const todos = useStoreState((state) => state.todos);
  const addTodo = useStoreActions((actions) => actions.add);
  const removeTodo = useStoreActions((actions) => actions.remove);
  const toggleTodo = useStoreActions((actions) => actions.toggle);
  const updateTodo = useStoreActions((actions) => actions.update);

  function handleSubmit(e) {
    e.preventDefault();
    addTodo({ id: uuidv4(), task });
    setTask("");
  }

  function handleEditMode(e) {
    seteditMode(true);
  }

  function handleEdit(e) {
    e.preventDefault();
    updateTodo({ updateId, updateTask });
    seteditMode(false);
    setupdateTask("");
  }

  const editForm = () => {
    if (editMode) {
      return (
        <Row justify="center" className="margin-bottom">
          <Col span={10}>
            <form onSubmit={handleEdit}>
              <p>
                <input
                  type="text"
                  name="task"
                  className="add-task"
                  onChange={(e) => {
                    setupdateTask(e.target.value);
                  }}
                  autoComplete="off"
                  value={updateTask}
                  placeholder="Update a task"
                  required
                />
                <button className="baseButton add" type="submit">
                  Update
                </button>
              </p>
            </form>
          </Col>
        </Row>
      );
    }
  };

  return (
    <div className="heightA">
      <Row justify="center" className="margin-bottom">
        <Col span={10}>
          <form onSubmit={handleSubmit}>
            <p>
              <input
                type="text"
                name="task"
                className="add-task"
                onChange={(e) => {
                  setTask(e.target.value);
                }}
                autoComplete="off"
                value={task}
                placeholder="Add a task"
              />
              <button className="baseButton add" type="submit">
                Add
              </button>
            </p>
          </form>
        </Col>
      </Row>
      <ul>
        {todos &&
          todos.map((todo) => (
            <Row justify="center" className="margin-bottom">
              <Col span={12}>
                <li key={todo.id} style={{ listStyleType: "none" }}>
                  <Button className="buttonA margin-right">
                    <span style={todo.complete ? done : undone}>
                      <h4> {todo.task}</h4>
                    </span>
                  </Button>
                  <Button
                    type="danger"
                    className="margin-right"
                    onClick={() => removeTodo(todo.id)}
                  >
                    <AiFillDelete />
                    DELETE
                  </Button>
                  <Button
                    type="primary"
                    className="margin-right"
                    onClick={() => {
                      setupdateId(todo.id);
                      handleEditMode();
                    }}
                  >
                    <AiFillEdit />
                    UPDATE
                  </Button>
                  <Button
                    type="primary"
                    className="margin-right widthA"
                    onClick={() => toggleTodo(todo.id)}
                  >
                    <AiOutlineFileDone />
                    {todo.complete ? (
                      <p className="fontsizeA">CLEAR</p>
                    ) : (
                      <p className="fontsizeA">DONE</p>
                    )}
                  </Button>
                </li>
              </Col>
            </Row>
          ))}
      </ul>
      {editForm()}
    </div>
  );
};

export default Todos;
