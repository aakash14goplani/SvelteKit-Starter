<script lang="ts">
	import EpisodesList from '../components/Episodes/EpisodesList.svelte';
	import Footer from '../components/Footer/Footer.svelte';
	import Header from '../components/Header/Header.svelte';
  import type { Shows } from '../types/shows';
	import './styles.css';

	export let data: { allEpisodes: Shows[] };
	$: ({ allEpisodes } = data);
</script>

<Header />

<main>
	<div class="main">
		<slot />
	</div>
	<aside>
		<EpisodesList episodes={allEpisodes} />
	</aside>
</main>

<Footer />

<style>
	main {
		display: grid;
		grid-template-columns: 300px 1fr;
		gap: 20px;
	}

	aside {
		order: -1;
	}
</style>
