import React from 'react';
import { groupEpisodesByCentury } from '../../lib/helpers';
import { EpisodeType } from '../../lib/types';
import { StyledButton } from '../Layout/Button.styles';
import { EpisodeCard } from './EpisodeCard';

type CenturyViewProps = {
  episodes: EpisodeType[];
};

type EpisodesGroupedType = {
  century: number;
  episodes: EpisodeType[];
  episodeCount: number;
};

export const CenturyView = (props: CenturyViewProps) => {
  const { episodes } = props;
  const [episodesGrouped] = React.useState<EpisodesGroupedType[]>(
    groupEpisodesByCentury(episodes)
  );

  const [limit, setLimit] = React.useState(5);

  return (
    <>
      {episodesGrouped.slice(0, limit).map((data: any, n: number) => {
        return (
          <div key={n}>
            <h2 id={data.century.toString()}>
              {data.century > 0
                ? `${data.century}. Jahrhundert`
                : `Vor der Zeitenwende`}{' '}
              <span style={{ fontSize: 15 }}>
                ({data.episodes.length} Episode
                {data.episodes.length > 1 && 'n'})
              </span>
            </h2>

            {data.episodes.map((episode: EpisodeType, i: number) => {
              return <EpisodeCard episode={episode} key={i} />;
            })}
          </div>
        );
      })}
      <StyledButton onClick={() => setLimit(limit + 5)}>Mehr</StyledButton>
    </>
  );
};
