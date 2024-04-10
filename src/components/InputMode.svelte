<script>
    import NumberComp from "./NumberComp.svelte";
    import Modal from "./Modal.svelte";
    import { modeStore} from '../lib/store'
    import {db} from "../lib/firebase";
    import { onMount } from "svelte";
    let openModal = {open : false, input : true, id:""}
    let nums = ""
    let ref = null
    let numsList = []
    let selectedNumber
    db.collection("nums").orderBy("pos", "asc").onSnapshot(snapdata => {
        numsList = snapdata.docs
    })

    onMount(() => {
        ref.focus()
    })
    const handleData = (/** @type {{ detail: { openModal?: any; inputMode?: any; floor?: any; number?: any; }; }} */ e) => {
        openModal.open = e.detail.openModal
        let {floor, number } = e.detail
        nums = ""
        if(e.detail.inputMode) {
            let date = new Date()
            db.collection("nums").add({
                floor:floor,
                number:number,
                pos : date.getTime(),
                area : "None",  
            });
        }
        
        ref.focus()
        
    }

    /**
     * 
     * @param input {boolean}
     * @param id {(string|null)}
     */
    const handleOpenModal = (input, id) => { 
        openModal.open = true,
        openModal.input = input
        openModal.id = id
        ref.blur()
        
    }  
</script>
  

{#if openModal.open}
    <Modal inputMode={openModal.input} num={nums} numsid={openModal.id} openModal={openModal.open} on:data={handleData}></Modal>
{/if}
<div class="sm:h-screen p-2 grid grid-cols-1 md:grid-cols-2 gap-2">
    <div class="sm:col-span-2 justify-between flex ">
        <div class="relative items-center flex w-full sm:w-1/3">
            <form on:submit|preventDefault={() => handleOpenModal(true, null)} class="w-full">
                <input bind:this={ref} type="text" class="w-full px-4 pl-9 py-2 rounded-lg border focus:ring-2 focus:ring-offset-2 focus:ring-purple-400 focus:outline-none" bind:value={nums} required/>
                <!-- <label class="w-full">
                </label> -->
            </form> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 absolute left-0 top-0 mt-2  ml-2 text-gray-400">
                <path fill-rule="evenodd" d="M3 4.875C3 3.839 3.84 3 4.875 3h4.5c1.036 0 1.875.84 1.875 1.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5A1.875 1.875 0 013 9.375v-4.5zM4.875 4.5a.375.375 0 00-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 00.375-.375v-4.5a.375.375 0 00-.375-.375h-4.5zm7.875.375c0-1.036.84-1.875 1.875-1.875h4.5C20.16 3 21 3.84 21 4.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5a1.875 1.875 0 01-1.875-1.875v-4.5zm1.875-.375a.375.375 0 00-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 00.375-.375v-4.5a.375.375 0 00-.375-.375h-4.5zM6 6.75A.75.75 0 016.75 6h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75A.75.75 0 016 7.5v-.75zm9.75 0A.75.75 0 0116.5 6h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zM3 14.625c0-1.036.84-1.875 1.875-1.875h4.5c1.036 0 1.875.84 1.875 1.875v4.5c0 1.035-.84 1.875-1.875 1.875h-4.5A1.875 1.875 0 013 19.125v-4.5zm1.875-.375a.375.375 0 00-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 00.375-.375v-4.5a.375.375 0 00-.375-.375h-4.5zm7.875-.75a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm6 0a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zM6 16.5a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm9.75 0a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm-3 3a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm6 0a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75z" clip-rule="evenodd" />
            </svg> 
        </div>
        <button on:click={() => $modeStore = 'welcome'} class="text-purple-600 rounded-md font-bold px-4 py-2 flex items-center justify-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clip-rule="evenodd" />
            </svg>
            Kembali
        </button>
      
    </div>
    <div class="h-[40vh] sm:h-full border rounded-lg px-2 py-2 sm:py-0 overflow-y-auto">
        <h1 class="bg-white sticky -top-3 sm:top-0 mb-2 font-bold py-2 text-gray-900 text-3xl">Lantai 1</h1>
        <div class="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-2">
            {#each numsList.filter(n => n.data().floor === "Lantai 1") as n}
                <button on:click={() => handleOpenModal(false, n.id)}>
                    <NumberComp num={n.data().number} area={n.data().area} />
                </button>
                {:else}    
                    <h1 class="col-span-3 sm:col-span-6 text-center text-gray-400 font-semibold">Kosong</h1>
            {/each}
        </div>
    </div>
    <div class="">
        <div class="border rounded-lg px-2 py-2 sm:py-0 overflow-y-auto h-[30vh] sm:h-[52vh] mb-2">
            <h1 class="bg-white sticky -top-3 sm:top-0 mb-2 font-bold py-2 text-gray-900 text-3xl">Lantai 2</h1>
            <div class="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {#each numsList.filter(n => n.data().floor === "Lantai 2") as n}
                    <button on:click={() => handleOpenModal(false, n.id)}>
                        <NumberComp num={n.data().number} area="None" />
                    </button>
                    {:else}    
                    <h1 class="col-span-3 sm:col-span-6 text-center text-gray-400 font-semibold">Kosong</h1>
                {/each}
            
    
            </div>
        </div>
        <div class="border rounded-lg px-2 py-2 sm:py-0 overflow-y-auto h-[20vh] sm:h-[37vh]">
            <h1 class="bg-white sticky -top-3 sm:top-0 mb-2 font-bold py-2 text-gray-900 text-3xl">Lantai 3</h1>
            <div class="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {#each numsList.filter(n => n.data().floor === "Lantai 3") as n}
                    <button on:click={() => handleOpenModal(false, n.id)}>
                        <NumberComp num={n.data().number} area="None" />
                    </button>
                {:else}    
                    <h1 class="col-span-3 sm:col-span-6 text-center text-gray-400 font-semibold">Kosong</h1>
                {/each}
            </div>
        </div>
    </div>
</div>


<!-- <div class="h-dvh grid grid-cols-12">
    <div class="col-span-7 bg-red-800">a</div>
    <div class="col-span-4 bg-red-500">b</div>
    <div class="col-span-1  flex flex-col">
        <div class="">lantai 3</div>
        <div class="flex-1 h-[50vh] max-h-[50vh] overflow-y-auto justify-center items-center gap-2">
            {#each numsList.filter(n => n.data().floor === "Lantai 1") as n}
                <button on:click={() => handleOpenModal(false, n.id)}>
                    <NumberComp num={n.data().number} area={n.data().area} />
                </button>
            {:else}    
                <h1 class="text-center text-gray-400 font-semibold">Kosong</h1>
            {/each}
        </div>
    </div>
</div> -->
  
  
  
  
  
  
