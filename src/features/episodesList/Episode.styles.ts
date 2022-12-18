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
  padding: '0.8rem',
});

export const StyledImagePlaceholder = styled('div', {
  minWidth: 100,
  maxWidth: 100,
  display: 'flex',
  background: 'grey',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  fontSize: 10,
});
