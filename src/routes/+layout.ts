import type { Shows } from "../types/shows";

export async function load({ fetch }) {
  const allEpisodes = await fetch('https://syntax.fm/api/shows');
  const allEpisodesData: Array<Shows> = await allEpisodes.json();

  return {
    allEpisodes: allEpisodesData
  };
}
