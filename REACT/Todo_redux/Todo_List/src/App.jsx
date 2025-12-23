import { useState } from "react";

import {
  taskadd,
  deletetask,
  updatetask,
  taskcomplete,
  taskIncomplete,
} from "./taskSlice";
import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { FaCheckCircle } from "react-icons/fa";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [btn, setBtn] = useState(true);
  const [editid, setEditid] = useState("");

  const dispatch = useDispatch();
  const mytask = useSelector((state) => state.mytask.task);

  const edittask = (work, id) => {
    setTask(work);
    setBtn(false);
    setEditid(id);
  };

  const updateMytask = () => {
    dispatch(updatetask({ id: editid, work: task }));
    setBtn(true);
    setTask("");
  };

  return (
    <div className="container">
      <h1>Todo List</h1>

      {/* Input Section */}
      <div className="input-group">
        <input
          type="text"
          value={task}
          placeholder="Enter task..."
          onChange={(e) => setTask(e.target.value)}
        />

        {btn ? (
          <button
            onClick={() =>
              dispatch(
                taskadd({
                  id: Date.now(),
                  work: task,
                  status: "incomplete",
                })
              )
            }
          >
            Add Task
          </button>
        ) : (
          <button className="update-btn" onClick={updateMytask}>
            Update Task
          </button>
        )}
      </div>

      {/* Task Table */}
      <table>
        <thead>
          <tr>
            <th>Your Task</th>
            <th>Done</th>
            <th>Undo</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>

        <tbody>
          {mytask.map((key) => (
            <tr key={key.id}>
              <td>
                {key.status === "complete" ? (
                  <span className="task-complete">{key.work}</span>
                ) : (
                  key.work
                )}
              </td>

              <td>
                <button
                  className="icon-btn"
                  onClick={() => dispatch(taskcomplete({ id: key.id }))}
                >
                  <FaCheckCircle />
                </button>
              </td>

              <td>
                <button
                  className="icon-btn"
                  onClick={() => dispatch(taskIncomplete({ id: key.id }))}
                >
                  <ImCross />
                </button>
              </td>

              <td>
                <button
                  className="icon-btn"
                  onClick={() => dispatch(deletetask({ id: key.id }))}
                >
                  <MdDelete />
                </button>
              </td>

              <td>
                <button
                  className="edit-btn"
                  onClick={() => edittask(key.work, key.id)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
