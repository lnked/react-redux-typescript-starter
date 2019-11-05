const commonStyles = {
  fontFamily:
    `-apple-system,BlinkMacSystemFont,Segoe UI,` +
    `Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,Icons16,sans-serif`,
};

export const Theme = {
  dark: {
    ...commonStyles,
    whiteColor: false,
  },
  light: {
    ...commonStyles,
    whiteColor: true,
  },
};

export default Theme;
