import { createTheme } from '@mui/material/styles';
import { blue, orange, grey } from '@mui/material/colors';

// Define the colors for the light mode
const lightColors = {
  primary: {
    main: '#FF9E44',    
    contrastText: '#fff',
  },
  secondary: {
    main: '#dc004e',
  },
  common: {
    black: "#121212"
  },
  custom: {
    blue: {
      main: blue[500],
      light: blue[200],
      dark: blue[700],
      contrastText: '#fff',
    },
    purple: {
      main: '#B26E2F',
      light: '#f48fb1',
      dark: '#f48fb1',
      contrastText: '#fff',
    }
  },
  background: {
    default: '#FFFFFF',    
    paper: '#FFFFFF',
  },
  text: {
    primary: '#666',
    secondary: '#666',
    dark: '#fff',
  },
  primaryText: "#ffff"
};

// Define the colors for the dark mode
const darkColors = {
  primary: {
    main: '#B26E2F',
  },
  secondary: {
    main: '#f48fb1',
  },
  common: {
    black: "#121212"
  },
  custom: {
    blue: {
      main: blue[500],
      light: blue[200],
      dark: blue[700],
      contrastText: '#fff',
    },
    purple: {
      main: '#B26E2F',
      light: '#f48fb1',
      dark: '#f48fb1',
      contrastText: '#fff',
    }
  },
  background: {
    default: "#121212",
    paper: '#252525',
  },
  text: {
    primary: '#fff',
    secondary: '#666',
    dark: '#fff',
  }
};

// Create the theme object

const theme = (mode: string) => {
  if (mode === "dark"){
    return createTheme({
      palette: {
        mode: 'dark',
        ...darkColors,
      }
    })
  } else{
    return createTheme({
      palette: {
        mode: 'light',
        ...lightColors,
      }
    })
  }
}


export default theme;