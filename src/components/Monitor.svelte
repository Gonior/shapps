<script>
  import NumberComp from "./NumberComp.svelte";
  import {db} from "../lib/firebase";
  import {modeStore} from "../lib/store"
  let keyword = ""
  
  let numsList = []
  let tempArr
  db.collection("nums").orderBy("pos", "asc").onSnapshot(snapdata => {
      numsList = snapdata.docs
      tempArr = snapdata.docs
  })
  

  const searching = () => {

    
    if (keyword === "") {
      numsList = tempArr

    } else {
      numsList = numsList.filter(n => n.data().number.match(keyword))
    }
    
  }
  
</script>



<div class="sm:h-screen p-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
  <div class="sm:col-span-2 justify-between flex ">
      <div class="relative items-center flex w-full sm:w-1/3">
        <input on:keyup={searching} type="text" class="w-full px-4 pl-9 py-2 rounded-lg border focus:ring-2 focus:ring-offset-2 focus:ring-purple-400 focus:outline-none" bind:value={keyword}/>
          
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 absolute left-0 top-0 mt-2 sm:mt-3 ml-2 text-gray-400">
          <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd" />
        </svg> 
        <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          
        </svg> -->
        
        
      </div>
      <button on:click={() => $modeStore = 'welcome'} class="text-purple-600 rounded-md font-bold px-4 py-2 flex items-center justify-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
              <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clip-rule="evenodd" />
          </svg>
          Kembali
      </button>
    
  </div>
  <div class="border rounded-lg px-2 py-2 sm:py-0 overflow-y-auto">
    <h1 class="bg-white sticky top-0 font-bold py-2 text-gray-600 text-xl">Lantai 1</h1>
    <div class="grid grid-cols-3 sm:grid-cols-6 gap-2">
      
      {#each numsList.filter(n => n.data().floor === "Lantai 1") as n}
          
        <NumberComp num={n.data().number} />
          
      {/each}
      
    </div>
    
  </div>
  <div class="">
    <div class="border rounded-lg px-2 py-2 sm:py-0 overflow-y-auto sm:h-[52vh] mb-2">
      <h1 class="bg-white sticky top-0 font-bold py-2 text-gray-600 text-xl">Lantai 2</h1>
      <div class="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {#each numsList.filter(n => n.data().floor === "Lantai 2") as n}
            <NumberComp num={n.data().number} />
          {/each}
      

      </div>
    </div>
    <div class="border rounded-lg px-2 py-2 sm:py-0 overflow-y-auto sm:h-[37vh]">
      <h1 class="bg-white sticky top-0 font-bold py-2 text-gray-600 text-xl">Lantai 3</h1>
      <div class="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {#each numsList.filter(n => n.data().floor === "Lantai 3") as n}
            <NumberComp num={n.data().number} />
          {/each}
      </div>
    </div>
  </div>
</div>






