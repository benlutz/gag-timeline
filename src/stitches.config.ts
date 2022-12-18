import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primary: '#D19000',
    },
  },
  media: {
    bp1: '(min-width: 480px)',
  },
  utils: {
    marginHorizontal: (value: number | string) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginVertical: (value: number | string) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingHorizontal: (value: number | string) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingVertical: (value: number | string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});

export const globalStyles = globalCss({
  a: {
    all: 'unset',
    cursor: 'pointer',
  },
  h2: {
    marginTop: 50,
  },
});
