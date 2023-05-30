import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import  Helmet from 'react-helmet';
import './App.css';
import { Provider } from './context/provider';

import AppRouter from './Shared/AppRouter';
import theme from './Shared/themes/theme';
import React, { useState } from "react";
import { I18nextProvider } from 'react-i18next';
import i18n from './Utils/i18n';
// import { AppContext } from './context/provider';
// import { useMediaQuery } from '@mui/material';
import { ColorModeContext } from './Shared/themes/colorcontext';



function App() {
  //const [state, setState] = useContext(AppContext);
  //const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  //const colorMode = useContext(ColorModeContext);
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  return (
    <ColorModeContext.Provider value={colorMode}> 
      <ThemeProvider theme={theme(mode)}>

      <CssBaseline />
      <div className="App">        
        <Provider>
        <I18nextProvider i18n={i18n}>
        <Helmet>
          <title>Hivensis</title>
          <link rel="shortcut icon" href={'./favicon.ico'} />
        </Helmet>
         <AppRouter/>
        </I18nextProvider >
        </Provider>
      </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;