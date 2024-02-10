
<script lang="ts">
  import type ITodo from "../interfaces/todo";
  export let todo :ITodo;
  import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher()
    
    const HandleDelete = (id:number)=>{
       dispatch("delete-todo",id)
    }

</script>

<div class="relative w-full max-w-md bg-white rounded-lg shadow-md my-10 px-40 py-10">
    <button class="absolute -top-3 -right-6 p-2 text-white bg-red-500 rounded-full size-12 " on:click={()=>HandleDelete(todo.id)}>x</button>
    <p class="absolute -top-1 -left-3 p-2 text-white bg-red-500 text-center rounded-full size-10">{todo.priority}</p>
    <h1 class="text-2xl font-bold text-gray-800">{todo.title}</h1>
    <h3 class="text-gray-600">{todo.description}</h3>
</div>
