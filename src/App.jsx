import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/TodoSlice";
import "./index.css";
import { TodoList } from "./components/TodoList/TodoList";
import { InputField } from "./components/InputField/InputField";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({text}))
    setText('');
  };


  return (
    <div className="App">
      <InputField text={text} setText={setText} addTodo={addTask} />
      <TodoList/>
    </div>
  );
}

export default App;
