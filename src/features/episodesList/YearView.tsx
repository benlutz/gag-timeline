import { groupEpisodesByYear } from '../../lib/helpers';
import { EpisodeType } from '../../lib/types';
import { EpisodeCard } from './EpisodeCard';
import { EpisodesWithoutYear } from './EpisodesWithoutYear';

type YearViewProps = {
  episodes: EpisodeType[];
};

export const YearView = (props: YearViewProps) => {
  const { episodes } = props;

  const episodesWithYear = episodes.filter(
    (episode) => episode.year && episode.itunes_episodeType === 'full'
  );

  return (
    <>
      {groupEpisodesByYear(episodesWithYear).map((data, n) => {
        return (
          <div key={n}>
            <h2>
              {data.year > 0
                ? data.year
                : `${data.year * -1} vor der Zeitenwende`}{' '}
              <span style={{ fontSize: 15 }}>
                ({data.episodes.length} Episode
                {data.episodes.length > 1 && 'n'})
              </span>
            </h2>
            {data.episodes.map((episode, i) => {
              return <EpisodeCard episode={episode} key={i} />;
            })}
          </div>
        );
      })}

      <EpisodesWithoutYear episodes={episodes} />
    </>
  );
};
