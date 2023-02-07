<script lang="ts">
	import type { Shows } from "../types/shows";

  export let data: { latestEpisode: Shows };

  $: ({ latestEpisode } = data);
</script>

<h3>{latestEpisode.title}</h3>
