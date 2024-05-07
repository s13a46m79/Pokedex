<script lang="ts">
  import type { Pokemon } from "pokenode-ts";
  import { goto } from "$app/navigation"

  export let name;
  export let url;


  let data: Pokemon | null = null;

  // fetch pokemon data from the url
  (async () => {
    const response = await fetch(url);
    data = await response.json();
  })()

  const navigate = () => {
    goto(`/pokemon/${data?.id}`)
  }

</script>

<div 
  class="w-full border border-gray-300 rounded p-5 shadow-md hover:scale-110 transition relative"
  role="button"
  tabindex={data?.id}
  on:keyup={navigate}
  on:click={navigate}
>
  <div class="absolute top-0 left-0 px-3 bg-violet-400 text-white rounded">
    {data?.id}
  </div>

  <div class="w-full mx-auto">
    <img alt={name + 'image'} src={data?.sprites.front_default} class="w-full">
  </div>

  <div class="w-full max-auto text-center font-mono">
    {data?.name}
  </div>
</div>