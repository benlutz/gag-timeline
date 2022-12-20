import { styled } from '../../stitches.config';

export const StyledButton = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  paddingHorizontal: '2rem',
  paddingVertical: '1rem',

  border: 'solid',
  borderColor: '$primary',
  color: '$primary',
  minWidth: '3rem',

  variants: {
    position: {
      left: {
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        borderRight: 0,
        paddingRight: 15,
      },
      right: {
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        borderLeft: 0,
      },
    },
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
