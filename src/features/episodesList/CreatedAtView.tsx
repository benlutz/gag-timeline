import { EpisodeType } from '../../lib/types';
import { EpisodeCard } from './EpisodeCard';

type CreatedAtViewProps = {
  episodes: EpisodeType[];
};

export const CreatedAtView = (props: CreatedAtViewProps) => {
  const { episodes } = props;

  return (
    <>
      <h2>Nach Erscheinungsdatum</h2>
      {episodes.map((episode, i) => {
        return <EpisodeCard episode={episode} key={i} />;
      })}
    </>
  );
};
