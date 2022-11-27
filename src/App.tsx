import React from 'react';
import MainRouter from './MainRouter';
import { Container, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { containerSx } from './styles/container';
import './App.css';
import Header from './components/header';
import { themePalette } from './styles/theme';

const theme = createTheme({
  palette: themePalette,
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container fixed={true} sx={containerSx}>
        <Header />
        <MainRouter />
      </Container>
    </ThemeProvider>
  );
};

export default App;
