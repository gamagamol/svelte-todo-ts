<script lang="ts">
import type ITodo from "../interfaces/todo";
import Cards from './cards.svelte';
export let TodoList :ITodo[];
</script>
<main>
{#each TodoList as todo(todo.id) }
   <Cards {todo} on:delete-todo />
{/each}
</main>

