import { EpisodeType } from '../../lib/types';
import {
  StyledEpisodeCard,
  StyledEpisodeCardContent,
  StyledImageContainer,
} from './Episode.styles';

type EpisodeCardProps = {
  episode: EpisodeType;
};

export const EpisodeCard = (props: EpisodeCardProps) => {
  const { episode } = props;

  return (
    <a href={episode.link} target="_blank" rel="noreferrer">
      <StyledEpisodeCard>
        <StyledImageContainer>
          {episode.itunes_image?.href ? (
            <img
              src={episode.itunes_image?.href}
              alt=""
              style={{
                maxWidth: 100,
                maxHeight: 100,
                aspectRatio: 1,
                borderRadius: 15,
              }}
            />
          ) : (
            <span>
              Kein Bild <br />
              verfügbar
            </span>
          )}
        </StyledImageContainer>
        <StyledEpisodeCardContent>
          <p style={{ margin: 0, fontSize: 14 }}>
            {episode.year} - {episode.id}
          </p>
          <h3 style={{ marginTop: 0, marginBottom: 0, fontSize: 16 }}>
            {episode.titleShort}
          </h3>
        </StyledEpisodeCardContent>
      </StyledEpisodeCard>
    </a>
  );
};
