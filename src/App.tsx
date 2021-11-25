import React from 'react';
import { ThemeProvider } from 'styled-components';


import light from './styles/light'
import dark from './styles/dark'

import GlobalStyle  from './styles/global';
import Header from './components/Header/index';
import usePersistedState from './utils/usePersistedState';





function App() {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
