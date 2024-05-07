<script lang="ts">
  import type { Pokemon } from "pokenode-ts";

  export let pokemon: Pokemon;
</script>

<div class="w-full mx-10">
  <div class="text-xl font-bold">Other Images</div>
  <div class="grid grid-cols-1 md:grid-cols-4">
    <img class="mx-auto w-96 hover:scale-125 transition" alt={pokemon?.name + '_image'} src={pokemon?.sprites.front_default}>
    <img class="mx-auto w-96 hover:scale-125 transition" alt={pokemon?.name + '_image'} src={pokemon?.sprites.back_default}>
    <img class="mx-auto w-96 hover:scale-125 transition" alt={pokemon?.name + '_image'} src={pokemon?.sprites.front_shiny}>
    <img class="mx-auto w-96 hover:scale-125 transition" alt={pokemon?.name + '_image'} src={pokemon?.sprites.back_shiny}>
  </div>
</div>