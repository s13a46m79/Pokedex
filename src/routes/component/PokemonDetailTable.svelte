<script lang="ts">
  import type { Pokemon } from "pokenode-ts";
  import { formatName } from "../../utils/utils";

  export let pokemon: Pokemon;
</script>

<div>
  <div class="mt-5 w-full md:mt-32 md:w-full text-bold text-3xl font-mono">
    {pokemon ? pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) : ''}
  </div>
  <table class="bg-blue-500 w-full h-fit rounded-tr-lg rounded-bl-lg text-white font-mono">
    <tr>
      <td>Id</td>
      <td>{pokemon?.id}</td>
    </tr>
    <tr>
      <td>Height </td>
      <td>{pokemon?.height}</td>
    </tr>
    <tr>
      <td>Weight </td>
      <td>{pokemon?.weight}</td>
    </tr>
    {#if pokemon?.types}
      {#await pokemon?.types}
        <p>Loading...</p>
      {:then pokemonTypes}
      <tr>
        <td>Type </td>
        <td>
        {#each pokemonTypes as type}
          <img alt={type.type.name + "_image"} src={`https://veekun.com/dex/media/types/en/${type.type.name.toLocaleLowerCase()}.png`}>
        {/each}
        </td>
      </tr>
      {/await}
    {:else}
      <p>No types available</p>
    {/if}
    {#if pokemon?.abilities}
      {#await pokemon?.abilities}
        <p>Loading...</p>
      {:then pokemonAbilities}
      <tr>
        <td>Ability </td>
        <td>
        {#each pokemonAbilities as ability}
            <p class="px-3 my-2 bg-blue-400 rounded text-white w-fit">
                {formatName(ability.ability.name)}
            </p>
        {/each}
        </td>
      </tr>
      {/await}
    {:else}
      <p>No types available</p>
    {/if}
  </table>
</div>

<style>
  td {
    padding-right: 10px;
    padding-left: 10px;
  }
</style>