import { groupEpisodesByCentury } from '../../lib/helpers';
import { EpisodeType } from '../../lib/types';
import { EpisodeCard } from './EpisodeCard';

type CenturyViewProps = {
  episodes: EpisodeType[];
};

export const CenturyView = (props: CenturyViewProps) => {
  const { episodes } = props;

  return (
    <>
      {groupEpisodesByCentury(episodes).map((data, n) => {
        return (
          <div key={n}>
            <h2>
              {data.century > 0
                ? `${data.century}. Jahrhundert`
                : `Vor der Zeitenwende`}{' '}
              <span style={{ fontSize: 15 }}>
                ({data.episodes.length} Episoden)
              </span>
            </h2>
            {data.episodes.map((episode, i) => {
              return (
                <EpisodeCard episode={episode} key={i}></EpisodeCard>
                //   <div key={i}>
                //     <li>
                //       {episode.year} - {episode.title}
                //     </li>
                //   </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};
