<script lang="ts">
  import type { Pokemon } from "pokenode-ts";

  export let pokemon: Pokemon;
</script>

<div class="w-3/4 mx-auto">
  <div class="text-xl font-bold">Other Images</div>
  <div class="grid grid-cols-1 md:grid-cols-4">
    {#if pokemon?.sprites.front_default}
    <img class="mx-auto w-64 hover:scale-125 transition" alt={pokemon?.name + '_image'} src={pokemon?.sprites.front_default}>
    {/if}
    {#if pokemon?.sprites.back_default}
    <img class="mx-auto w-64 hover:scale-125 transition" alt={pokemon?.name + '_image'} src={pokemon?.sprites.back_default}>
    {/if}
    {#if pokemon?.sprites.front_shiny}
    <img class="mx-auto w-64 hover:scale-125 transition" alt={pokemon?.name + '_image'} src={pokemon?.sprites.front_shiny}>
    {/if}
    {#if pokemon?.sprites.back_shiny}
    <img class="mx-auto w-64 hover:scale-125 transition" alt={pokemon?.name + '_image'} src={pokemon?.sprites.back_shiny}>
    {/if}
  </div>
</div>