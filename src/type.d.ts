interface Todo {
  id: string;
  status: boolean;
  title: string;
}

interface TodoAction {
  type: string;
  payload: Todo
}

type DispatchType = (args: TodoAction) => TodoAction