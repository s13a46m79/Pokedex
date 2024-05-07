<script lang="ts">
import { page } from '$app/stores';  
import { goto } from '$app/navigation';
import { onMount, afterUpdate } from 'svelte';
import { PokemonClient } from 'pokenode-ts';
import type { Pokemon } from 'pokenode-ts';
import PokemonDetailTable from '../../component/PokemonDetailTable.svelte';
import PokemonStatTable from '../../component/PokemonStatTable.svelte';
import { formatNumber } from '../../../utils/utils';
  import PokemonWeakness from '../../component/PokemonWeakness.svelte';
  import PokemonImages from '../../component/PokemonImages.svelte';

const api = new PokemonClient();

let id = parseInt($page.url.pathname.split('/').pop() as string) || 0 ;
let pokemon: Pokemon;

const fetchPokemon = async (newId: number) => {
    if (!newId) return;
    pokemon = await api.getPokemonById(newId);
    id = newId;
  };

onMount(async () => {
  await fetchPokemon(id);
})

const navigate = (id: number) => {
  console.log(id)
  if(id !== 0) {
    goto(`/pokemon/${id}`);
    fetchPokemon(id);
  }
};

</script>

<div>
  <div class="flex gap-5 justify-around flex-wrap">
    <PokemonDetailTable pokemon={pokemon} />
    <!-- Image -->
    <div class="w-full md:w-fit">
      <img class="w-full" alt={pokemon?.name + '_image'} src={`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${formatNumber(id)}.png`}>
    </div>
    <!-- Table -->
    <PokemonStatTable pokemon={pokemon} />
  </div>

  <!-- Weakness -->
  <div class="flex justify-center">
    <PokemonWeakness pokemon={pokemon}/>
  </div>

  <!-- Other Images -->
  <div>
    <PokemonImages pokemon={pokemon}/>
  </div>

  <!-- Button -->
  <div class="mx-5 mt-10 flex justify-between">
    <button 
      class="w-1/4 bg-green-500 rounded px-3 text-white text-xl text-center hover:bg-green-600"
      on:click={() => {
        if(id === 1)
          navigate(1025)
        else
          navigate(id - 1)
      }}
    >
      &#129092; #{parseInt(formatNumber(id - 1)) === 0 ? formatNumber(1025) : formatNumber(id - 1)}
    </button>
    <button
      class="w-1/4 bg-green-500 rounded px-3 text-white text-xl text-center hover:bg-green-600"
      on:click={() => {
        if(id === 1025)
          navigate(1)
        else
          navigate(id + 1)
      }}
    >
      &#129094; #{parseInt(formatNumber(id + 1)) === 1026 ? formatNumber(1) : formatNumber(id + 1)}
    </button>
  </div>
</div>