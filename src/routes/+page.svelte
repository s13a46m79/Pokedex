<script lang="ts">
  import PokedexCard from "./component/PokedexCard.svelte";
  import { PokemonClient } from "pokenode-ts";
  import _ from "lodash";


  let result: Record<string, any>;
  let pokedexs: Record<string, any>[] = [];
  let searchValue: string;
  let origData: Record<string, any>[] = [];

  (async () => {
    const api = new PokemonClient();
    result = await api.listPokemons();
    pokedexs = result.results
    origData = result.results
  })();

  const loadMore = async () => {
    pokedexs = origData
    await fetch(result.next)
      .then(data => data.json())
      .then(data => {
        result = data
        origData = [...origData, ...data.results]
        pokedexs = [...pokedexs, ...data.results]
      });
  }

  function search() {
    if (!searchValue) {
      pokedexs = origData
      return
    }
    else {
      pokedexs = _.filter(origData, (o) => {
        return o.name.includes(searchValue) || o.url.includes(searchValue)
      })
    }

    console.log(pokedexs)
  }
  
  function sortId() {
    pokedexs = _.sortBy(pokedexs, (item) => {
      return parseInt(item.url.split('/').slice(-2, -1)[0]);
    })
  }

  function sortByName() {
    pokedexs = _.sortBy(pokedexs, (item) => {
      return item.name
    })
  }

</script>

<div class="my-5 ml-5 flex gap-3">
  <input 
    bind:value={searchValue}
    on:change={search} 
    class="border border-gray-400 rounded px-3" 
    placeholder="Pokemon Id / Name"/>

  <button class="bg-blue-500 px-3 text-white rounded" on:click={sortId}>Sort By Id</button>
  <button class="bg-blue-500 px-3 text-white rounded" on:click={sortByName}>Sort By Name</button>
</div>
<!-- Displaying Cards -->
<div class="grid grid-cols-1 gap-4 mx-5 md:grid-cols-5 sm:grid-cols-2 lg:grid-cols-7">
  {#each pokedexs as pokedex (pokedex.url)}
    <PokedexCard name={pokedex.name} url={pokedex.url}/>
  {/each}
  {#if pokedexs.length === 0}
    <div class="text-center">No data found</div>
  {/if}
</div>

<!-- Load More Button -->
<div class="mt-5 w-full flex justify-center">
  <button class="px-5 bg-blue-500 text-white rounded" on:click={loadMore}>Load more</button>
</div>
