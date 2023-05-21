
<script>
    import { onMount } from "svelte";

    
  import InputMode from "./components/InputMode.svelte";
  import Monitor from "./components/Monitor.svelte";
  import WelcomeScreen from "./components/WelcomeScreen.svelte";
  import {modeStore} from "./lib/store"
  // onMount(() => {
  // })
  $: handleChoose($modeStore)
  let menus = [
    {
      code : "monitor",
      selected : false,
      components : Monitor
    },
    {
      code : "input",
      selected : false,
      components : InputMode
    },
    {
      code : "welcome",
      selected : true,
      components : WelcomeScreen
    }
  ]
  
  const handleChoose = (data) => {
    
    menus = [...menus.map(menu => {
      if (menu.code === data) menu.selected = true
      else menu.selected = false
      return {code : menu.code, selected : menu.selected, components : menu.components}
    })]
  }
</script>

<div>
  <svelte:component this={menus.find(menu => menu.selected).components} ></svelte:component>
  
</div>

<style global lang="postcss">
  @tailwind utilities;
  @tailwind components;
  @tailwind base;
  @layer base {
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  /* .badge {
    @apply h-1 w-1 border-[1px] border-white p-1 rounded-full bg-red-600 absolute -top-1 -right-1;
  }

  .btn-click-effect {
    @apply transform  ease-in-out duration-100;
  } */
</style>