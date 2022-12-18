import { styled } from '../../stitches.config';

export const StyledEpisodeCard = styled('div', {
  border: 'solid',
  borderRadius: 25,
  borderColor: 'LightGrey',
  overflow: 'hidden',

  display: 'flex',
  marginVertical: 10,
  minHeight: 100,
});

export const StyledEpisodeCardContent = styled('div', {
  padding: 5,
});