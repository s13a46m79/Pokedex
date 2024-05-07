<script lang="ts">
  import type { Pokemon } from "pokenode-ts";
  import _ from "lodash";
  import { formatName } from "../../utils/utils";

  export let pokemon: Pokemon;
</script>

<div class="w-full lg:w-52">
  <div class="md:mt-32 text-bold text-3xl font-mono">
    Stats
  </div>
  <table class="w-full h-fit">
      {#if pokemon?.stats}
      {#await pokemon?.stats}
        <p>Loading...</p>
      {:then pokemonStats}
        {#each pokemonStats as stat}
            <tr>
              <td>{formatName(stat.stat.name)}</td>
              <td>{stat.base_stat}</td>
            </tr>
        {/each}
      {/await}
    {:else}
      <p>No Stat available</p>
    {/if}
  </table>
</div>

<style>
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
</style>