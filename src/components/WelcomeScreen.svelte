<script>
  // import {createEventDispatcher} from 'svelte'
  import {modeStore} from "../lib/store"
  // const dispatch = createEventDispatcher()

  const handleMode = (data) => {
    $modeStore = data
  }
</script>
<div class="h-screen flex justify-center items-center">
    <div class="w-1/2">
      <h1 class="text-center mb-4 font-semibold text-xl">Pilih mode yang akan digunakan</h1>
      <div class="flex justify-center space-x-2">
        <button on:click={() => handleMode("input")} class="rounded-lg h-52 w-52 bg-blue-500 flex flex-col p-4 text-purple-50 justify-center items-center cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-16 h-16">
            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
          </svg>
          <h1 class="text-white">Input Mode</h1>
        </button>
        <button on:click={() => handleMode("monitor")} class="rounded-lg h-52 w-52 bg-purple-500 flex flex-col p-4 text-purple-50 justify-center items-center cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-20 h-20">
            <path fill-rule="evenodd" d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z" clip-rule="evenodd" />
          </svg>
          <h1 class="text-white">Monitor Mode</h1>
        </button>
      </div>
      
    </div>
  </div>