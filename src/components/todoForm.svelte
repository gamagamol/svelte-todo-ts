<!-- @format -->
<script lang="ts">
  let title: string;
  let description: string;

  let priorityActive: string | undefined;
  let currentPriority: number = 0;

  import { createEventDispatcher } from 'svelte';
  import type ITodo from '../interfaces/todo';
  const dispatch = createEventDispatcher();

  const handleClickSend = () => {
    let isError: boolean = false;
    if (title == undefined) {
      isError = true;
      let error_title = document.getElementById('error-title');
      if (error_title) {
        error_title.hidden = false;
      }
    } else {
      isError = false;
      let error_title = document.getElementById('error-title');
      if (error_title) {
        error_title.hidden = true;
      }
    }

    if (description == undefined) {
      isError = true;
      let error_description = document.getElementById('error-description');
      if (error_description) {
        error_description.hidden = false;
      }
    } else {
      isError = false;
      let error_description = document.getElementById('error-description');
      if (error_description) {
        error_description.hidden = true;
      }
    }

    if (!isError) {
      let todo: ITodo = {
        title: title,
        description: description,
        priority: currentPriority == 0 ? 1 : currentPriority,
      };

      if (priorityActive != undefined) {
        let priorityActiveElement = document.getElementById(priorityActive);

        priorityActiveElement?.classList.add('bg-red-200');
        priorityActiveElement?.classList.add('text-gray-500');
        priorityActiveElement?.classList.remove('bg-red-500');
        priorityActiveElement?.classList.remove('text-white');

        let todo_form: HTMLFormElement | undefined;

        todo_form = document.getElementById('todo-form') as HTMLFormElement; // Type assertion

        if (todo_form?.reset) {
          // Optional chaining
          todo_form.reset();
        }

        priorityActive = undefined;
      }

      dispatch('insert-todo', todo);
    }
  };

  const priorityClick = (priority: string, priorityVal: string) => {
    let priorityEvent = document.getElementById(priority);
    priorityEvent?.classList.remove('bg-red-200');
    priorityEvent?.classList.remove('text-gray-500');
    priorityEvent?.classList.add('bg-red-500');
    priorityEvent?.classList.add('text-white');

    let priorityInput = document.getElementById(priorityVal) as HTMLInputElement;

    let priorityValue = priorityInput.value;

    // check priority active

    if (priorityActive != undefined) {
      let priorityEventActive = document.getElementById(priorityActive);
      priorityEventActive?.classList.add('bg-red-200');
      priorityEventActive?.classList.add('text-gray-500');
      priorityEventActive?.classList.remove('bg-red-500');
      priorityEventActive?.classList.remove('text-white');
    }
    priorityActive = priority;
    currentPriority = parseInt(priorityValue);
  };
</script>

<div class=" w-full max-w-2xl bg-white rounded-lg shadow-md my-10 size-40 h-full p-10">
  <h1 class="text-2xl font-bold text-gray-800 text-center">Plan Your Activity</h1>

  <div class="flex flex-row space-x-20 mt-5">
    <button
      id="priority1"
      class="px-2 py-2 text-center bg-red-200 rounded-full w-10 h-10 text-gray-500 mr-2"
      on:click={() => {
        priorityClick('priority1', 'priorityValue1');
      }}
    >
      1
      <input type="hidden" value="1" id="priorityValue1" />
    </button>
    <button
      class="px-2 py-2 text-center bg-red-200 rounded-full w-10 h-10 text-gray-500 mr-2"
      id="priority2"
      on:click={() => {
        priorityClick('priority2', 'priorityValue2');
      }}
    >
      2
      <input type="hidden" value="2" id="priorityValue2" />
    </button>
    <button
      class="px-2 py-2 text-center bg-red-200 rounded-full w-10 h-10 text-gray-500 mr-2"
      id="priority3"
      on:click={() => {
        priorityClick('priority3', 'priorityValue3');
      }}
    >
      3
      <input type="hidden" value="3" id="priorityValue3" />
    </button>
    <button
      class="px-2 py-2 text-center bg-red-200 rounded-full w-10 h-10 text-gray-500 mr-2"
      id="priority4"
      on:click={() => {
        priorityClick('priority4', 'priorityValue4');
      }}
    >
      4
      <input type="hidden" value="4" id="priorityValue4" />
    </button>
    <button
      class="px-2 py-2 text-center bg-red-200 rounded-full w-10 h-10 text-gray-500 mr-2"
      id="priority5"
      on:click={() => {
        priorityClick('priority5', 'priorityValue5');
      }}
    >
      5
      <input type="hidden" value="5" id="priorityValue5" />
    </button>
  </div>

  <form action="" id="todo-form">
    <div class="flex flex-col w-full">
      <div class="flex flex-col w-full">
        <div class="flex flex-row w-full">
          <input type="text" class="border shadow rounded-lg text-center mt-5 w-full mr-3" placeholder="Title" bind:value={title} />
        </div>
        <div class="mt-2" id="error-title" hidden>
          <p class="text-red-500">Please fill in the title</p>
        </div>
      </div>
      <textarea id="description" cols="30" rows="5" class="border shadow rounded-lg w-full mt-5" placeholder="Description" bind:value={description}></textarea>
      <div class="mt-2" id="error-description" hidden>
        <p class="text-red-500">Please fill in the description</p>
      </div>
      <button class="border rounded-lg bg-green-500 mt-5 px-10 text-center self-end text-white" on:click={handleClickSend} type="button">Send</button>
    </div>
  </form>
</div>
