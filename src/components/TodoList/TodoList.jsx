import { useSelector } from "react-redux";
import { TodoItem } from "../TodoItem/TodoItem";

export const TodoList = () => {
    const todos = useSelector(state => state.todos.todos);
  return (
    <ul>
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          {...item}
        />
      ))}
    </ul>
  );
};
