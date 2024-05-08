<script lang="ts">
import { PokemonClient } from "pokenode-ts"
import type { Pokemon, Type } from "pokenode-ts";
import _ from "lodash";

export let pokemon: Pokemon;

const api = new PokemonClient();
let weakness: string[] = [];

$: {
  (async () => {
    if(pokemon) {
      console.log(2)
      await Promise.all(pokemon.types.map(async (type) => {
              const res = await api.getTypeByName(type.type.name);
              getWeakness(res);
          }));
      // delete weakness that is the same as the pokemon type
      deleteWeakness();
    }
  })()
}

function getWeakness(res: Type) {
  res.damage_relations.double_damage_from.map(weak => {
    weakness.push(weak.name)
  })
}

function deleteWeakness() {
  pokemon.types.map(type => {
    weakness = weakness.filter((item) => item !== type.type.name);
    weakness = _.uniq(weakness)
  })
}
</script>

<div>
  <p class="font-bold">Weakness</p>
  <div class="flex gap-3 flex-wrap">
    {#if weakness}
      {#await weakness}
        <p>Loading...</p>
      {:then weakness}
        {#each weakness as weak}
            <img width="50" alt={weakness + "_image"} src={`https://veekun.com/dex/media/types/en/${weak.toLocaleLowerCase()}.png`}>
        {/each}
      {/await}
    {:else}
      <p>No types available</p>
    {/if}
  </div>
</div>

