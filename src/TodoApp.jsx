import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis/todosApi";

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);

  //   const { data: todos = [], isLoading } = useGetTodosQuery();

  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  const onNextTodo = () => {
    setTodoId(todoId + 1);
  };

  const onPreviousTodo = () => {
    if (todoId === 1) return;
    setTodoId(todoId - 1);
  };

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      {/* <h4>IsLoading... {isLoading ? "True" : "False"}</h4> */}

      <pre>{JSON.stringify(todo)}</pre>

      {/* <ul>
        {todos.map(({ id, title, comleted }) => (
          <li key={id}>
            <strong>{comleted ? "DONE" : "Pending"}</strong> {title}
          </li>
        ))}
      </ul> */}
      <button onClick={onPreviousTodo}>Previous Todo</button>
      <button onClick={onNextTodo}>Next Todo</button>
    </>
  );
};
