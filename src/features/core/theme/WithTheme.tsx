import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import buildTheme from './buildTheme';

const theme = buildTheme();

const WithTheme: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default WithTheme;
