import React from 'react';
import data from '../assets/uitm-theme-cfg.json';
import { ThemeOptions, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

const palette = data.schemes[0].palette;

export const UiTMTheme = createTheme({
  palette: palette
});

