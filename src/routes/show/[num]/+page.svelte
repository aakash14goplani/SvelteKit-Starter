<script lang="ts">
	export let data: { episode: any };

	$: ({ episode } = data);
</script>

<h1>{episode.title}</h1>

{@html episode.html}
