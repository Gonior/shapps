<script>

    export let num
    export let area
    
</script>

<div id="num-{num}" class=" {num>100 ? 'bg-purple-100' : 'bg-red-100'} {parseInt(num) ? 'text-xl md:text-2xl lg:text-4xl' : 'text-base sm:text-md'} flex items-center justify-center font-bold p-4 text-center rounded-md cursor-pointer flex-col">
    <span>{num}</span>
    {#if area ? area !== "None" : false}
        <span class="text-lg text-gray-700">{area}</span>
    {/if}
</div>