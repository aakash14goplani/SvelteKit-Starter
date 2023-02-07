import type { Shows } from "../types/shows";

export async function load({ fetch }) {
  const latestEpisode = await fetch('https://syntax.fm/api/shows/latest');
  const latestEpisodeData: Shows = await latestEpisode.json();

  return {
    latestEpisode: latestEpisodeData
  };
}
