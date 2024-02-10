<!-- @format -->
<script lang="ts">
  import './app.css';
  import List from './components/list.svelte';
  import Form from './components/todoForm.svelte';
  import type ITodo from './interfaces/todo';
  let TodoList: ITodo[] = [
    {
      id: 1,
      title: 'Breakfast',
      priority: 1,
      description: 'Eating at the morning',
    },
  ];

  const deleteTodo = (e: Event) => {
    let todoId: number;
    if (e instanceof CustomEvent) {
      todoId = e.detail;
    }
    TodoList = TodoList.filter((TodoList) => TodoList.id != todoId);
  };

  const insertTodo = (e: Event) => {
    let newTodo: ITodo | undefined; 
    if (e instanceof CustomEvent) {
      let newTodoId = TodoList.length + 1;
      e.detail.id = newTodoId;
      newTodo = e.detail;

      console.log(newTodo);
    }
    if (newTodo !== undefined) {
   
      TodoList = [newTodo, ...TodoList];
    }
  };
</script>

<main class="bg-indigo-500 min-h-screen">
  <div class="flex flex-col justify-center items-center bg-indigo-500">
    <h1 class="text-2xl font-bold text-center text-white">Todo List App</h1>
    <Form on:insert-todo={insertTodo} />
    <List {TodoList} on:delete-todo={deleteTodo} />
  </div>
</main>

