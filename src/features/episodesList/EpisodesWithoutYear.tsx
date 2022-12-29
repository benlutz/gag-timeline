import { EpisodeType } from '../../lib/types';

type EpisodesWithoutYearProps = {
  episodes: EpisodeType[];
};

export const EpisodesWithoutYear = (props: EpisodesWithoutYearProps) => {
  const { episodes } = props;

  const episodesWithoutYear = episodes.filter(
    (episode) => !episode.year && episode.itunes_episodeType === 'full'
  );

  return (
    <div>
      <h2>Ohne Zuordnung</h2>
      <ul>
        {episodesWithoutYear.map((episode, i) => {
          return (
            <li key={i}>
              <a href={episode.link} target="_blank" rel="noreferrer">
                {episode.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
