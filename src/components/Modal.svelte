<script>
    import {createEventDispatcher, onMount} from 'svelte'
    import {db} from '../lib/firebase'
    // import { content} from '../lib/store'
    
    export let inputMode = true
    export let openModal = false
    export let numsid
    export let num

    onMount(() => { 
        
        if(numsid) {

            db.collection('nums').doc(numsid).onSnapshot(snapData => {
                floors = [...floors.map((f) => {
                    if (f.value===snapData.data().floor) f.active = true
                    else f.active = false
                    return {id : f.id, active : f.active, value : f.value}
                })]
                num = snapData.data().number
            })
             
            // let data = $content.find(d => d.id === numsid)
            // console.log(data)
            // num = data.number
            

        }
    })
    
    const dispatch = createEventDispatcher()
    let floors = [
        {
            id : 1,
            active : true,
            value : "Lantai 1",
        },
        {
            id:2,
            active : false,
            value : "Lantai 2",
        },
        {
            id:3,
            active : false,
            value : "Lantai 3",
        }
    ]
    
    const selectedFloor = (id) => {
        floors = [...floors.map((f) => {
            if (id===f.id) f.active = true
            else f.active = false
            return {id : f.id, active : f.active, value : f.value}
        })]
        
    }

    const closeModal = () => {
        
        if (!inputMode) {
            // $content.find(f => f.id === numsid).floor = floors.find(floor => floor.active === true).value
            db.collection('nums').doc(numsid).update({floor :floors.find(floor => floor.active === true).value })
            dispatch('data', {
                inputMode : false,
                openModal : false,    
            })
        } else {
            dispatch('data', {
                number : num,
                floor : floors.find(floor => floor.active === true).value,
                inputMode : true,
                openModal : false
            })
        }
        
    }

    const deleteData = () => {
        db.collection("nums").doc(numsid).delete()
        dispatch('data', {
            inputMode : false,
            openModal : false,    
        })
    }
</script>
{#if openModal}
<div class="inset-0 bg-purple-500 absolute z-20 bg-opacity-60 flex items-center justify-center">
    <div class="rounded-lg bg-purple-50 shadow p-4 flex flex-col w-3/4 md:w-1/3 lg:w-1/4 items-center">
        <h6 class="font-semibold text-base text-gray-400">Nomor Meja</h6>
        <h1 class="font-bold text-5xl mb-5">{num}</h1>
        <h6 class="font-semibold text-base text-gray-400 mb-1">Tempat Duduk</h6>
        <div class="flex flex-col space-y-2 md:space-y-0 md:flex-row justify-between w-full mb-5">
            {#each floors as floor}
                <button class="rounded-lg p-4 shadow font-semibold {floor.active ? "bg-purple-500 text-white" : 'bg-purple-100'} transform active:scale-90 duration-150 ease-in-out" on:click={() => selectedFloor(floor.id)}>{floor.value}</button>
            
            {/each}
            
        </div>
        
        <div class="flex {inputMode? 'justify-center' : 'justify-between'} w-full">
            {#if !inputMode}
            <button on:click={() => deleteData()} class="uppercase font-semibold  text-red-500 inline-flex transform active:scale-90 duration-150 ease-in-out space-x-1 items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                  Hapus
                  </button>
            {/if}
            <button on:click={closeModal} class="rounded-lg uppercase font-semibold bg-purple-500 text-white inline-flex justify-center items-center px-4 py-2 transform active:scale-90 duration-150 ease-in-out">
                <svg xmlns="http    ://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  OK
                  </button>
        </div>
    </div>
</div>
{/if}