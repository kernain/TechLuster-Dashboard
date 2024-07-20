import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#FC7A1E',
        },
        secondary: {
            main: '#FC7A1E',
        },
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
    overrides: {
        MuiButton: {
            root: {
                '&:hover': {
                    backgroundColor: '#FC7A1E',
                },
            },
        },
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#FC7A1E',
        },
        secondary: {
            main: '#FC7A1E',
        },
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
    overrides: {
        MuiButton: {
            root: {
                '&:hover': {
                    backgroundColor: '#FC7A1E',
                },
            },
        },
    },
});

export { lightTheme, darkTheme };
