<script>

    export let num
    
</script>

<div id="num-{num}" class=" {num>100 ? 'bg-purple-100' : 'bg-red-100'} {parseInt(num) ? 'text-xl sm:text-5xl' : 'text-base sm:text-md'} flex items-center justify-center font-bold p-4 text-center rounded-md cursor-pointer">
    <span>{num}</span>
</div>