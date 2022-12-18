import { styled } from '../../stitches.config';

export const StyledHeader = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: 15,
  alignItems: 'center',
  backgroundColor: '$primary',
  zIndex: 9999,
  variants: {
    variant: {
      static: {
        position: 'static',
      },
      sticky: {
        top: 0,
        right: 0,
        left: 0,
        position: 'sticky',
      },
    },
  },

  defaultVariants: {
    variant: 'static',
  },
});

export const FullScreenMenu = styled('div', {
  position: 'fixed',
  backgroundColor: '$background',
  top: 0,
  right: 0,
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transform: 'translateX(100%)',
  transitionProperty: 'transform',
  transitionDuration: '250ms',

  variants: {
    isShown: {
      true: {
        transform: 'translateX(0px)',
      },
    },
  },
});

export const HamburgerButton = styled('button', {
  all: 'unset',
  padding: 5,
  textAlign: 'center',
  cursor: 'pointer',
});

export const HamburgerMenuItem = styled('li', {
  listStyle: 'none',
  listStylePosition: 'inside',
  textAlign: 'center',
  fontSize: 48,
});
