import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            paper: '#ffffff',
            default: '#f7f7f7',
        },
        text: {
            primary: '#000000',
            secondary: '#333333',
        },
    },
    typography: {
        fontFamily: 'Sofia Pro, Arial, sans-serif',
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            paper: '#424242',
            default: '#303030',
        },
        text: {
            primary: '#ffffff',
            secondary: '#cccccc',
        },
    },
    typography: {
        fontFamily: 'Sofia Pro, Arial, sans-serif',
    },
});

export { lightTheme, darkTheme };
