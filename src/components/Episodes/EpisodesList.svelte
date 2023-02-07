<script lang="ts">
	import type { Shows } from "../../types/shows";

	export let episodes: Shows[];
</script>

<nav>
	<ul>
		{#each episodes as episode}
			<li>
				<a href={`/show/${episode.number}`}>{episode.title}</a>
			</li>
		{/each}
	</ul>
</nav>
