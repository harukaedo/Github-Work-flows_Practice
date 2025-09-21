interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const todos: Todo[] = [];

function addTodo(title: string) {
  const todo: Todo = {
    id: todos.length + 1,
    title,
    completed: false,
  };
  todos.push(todo);
}
