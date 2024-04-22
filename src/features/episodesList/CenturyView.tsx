import React from 'react';
import { groupEpisodesByCentury } from '../../lib/helpers';
import { EpisodeType } from '../../lib/types';
import { EpisodeCard } from './EpisodeCard';
import { EpisodesWithoutYear } from './EpisodesWithoutYear';

type CenturyViewProps = {
  episodes: EpisodeType[];
};

export const CenturyView = (props: CenturyViewProps) => {
  const { episodes } = props;

  const episodesWithYear = episodes.filter(
    (episode) => episode.year && episode['itunes:episodeType'] === 'full'
  );

  return (
    <>
      {groupEpisodesByCentury(episodesWithYear).map((data, n) => {
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
