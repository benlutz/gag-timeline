import { styled } from '../../stitches.config';

export const StyledButton = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  paddingHorizontal: '2em',
  paddingVertical: '0.8em',

  border: 'solid',
  borderColor: '$primary',
  color: '$primary',
  minWidth: '1rem',
  fontSize: '0.8rem',

  borderRadius: 25,
  marginHorizontal: '0.3em',
  marginVertical: '0.3em',

  variants: {
    active: {
      true: {
        background: '$primary',
        color: 'White',
        border: 'solid',
        borderColor: '$primary',
      },
    },
  },
});
