import { groupEpisodesByYear } from '../../lib/helpers';
import { EpisodeType } from '../../lib/types';
import { EpisodeCard } from './EpisodeCard';

type YearViewProps = {
  episodes: EpisodeType[];
};

export const YearView = (props: YearViewProps) => {
  const { episodes } = props;

  return (
    <>
      {groupEpisodesByYear(episodes).map((data, n) => {
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
    </>
  );
};
