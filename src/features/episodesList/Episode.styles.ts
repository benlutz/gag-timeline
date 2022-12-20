import { styled } from '../../stitches.config';

export const StyledEpisodeCard = styled('div', {
  // border: 'solid',
  borderRadius: 25,
  // borderColor: 'LightGrey',
  overflow: 'hidden',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',

  display: 'flex',
  marginVertical: 10,
  minHeight: 100,
});

export const StyledEpisodeCardContent = styled('div', {
  padding: '0.8rem',
});

export const StyledImageContainer = styled('div', {
  minWidth: 100,
  maxWidth: 100,
  minHeight: 100,
  display: 'flex',
  background: 'grey',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  fontSize: 10,
  margin: 10,
  borderRadius: 15,
});
