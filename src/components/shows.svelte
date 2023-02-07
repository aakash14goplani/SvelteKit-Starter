<script lang="ts">
	import type { Shows } from "../types/shows";

  export let shows: Array<Shows> = [];
</script>

{#if shows.length > 0}
  <table border={1} cellpadding={5}>
    <thead>
      <tr>
        <th>Sr. No.</th>
        <th>Title</th>
        <th>Date</th>
        <th>Summary</th>
        <th>Description</th>
        <th>URL</th>
      </tr>
    </thead>
    <tbody>
      {#each shows as show}
        <tr>
          <td>{show.number}</td>
          <td>{show.title}</td>
          <td>{show.displayDate}</td>
          <td>{show.notesFile}</td>
          <td>{@html show.html}</td>
          <td><a href={`#/episodes/${show.slug}`}>URL</a></td>
        </tr>
      {/each}
    </tbody>
  </table>

  {:else}
    <p>No shows to display!</p>
{/if}