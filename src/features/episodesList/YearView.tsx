import { groupEpisodesByYear } from '../../lib/helpers';
import { EpisodeType } from '../../lib/types';

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
              {data.year} ({data.episodes.length})
            </h2>
            <ul>
              {data.episodes.map((episode, i) => {
                return (
                  <div key={i}>
                    <li>
                      {episode.year} - {episode.title}
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
};
