import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: (themeParam) => `
                body {
                    background-color: ${themeParam.palette.background.page};
                }`
        }
    },
    palette: {
        mode: 'dark',
        background: {
            page: '#151515',
            sidebar: '#303030'
        },
        greys: {
            light: '#4d4d4d',
            medium: '#444444'
        },
        purples: {
            medium: '#9b73f9'
        },
        text: {
            light: '#DDD',
            medium: '#BBB'
        }
    },
    typography: {
		fontFamily: 'Poppins',
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            mobile: 700,
            md: 900,
            lg: 1200,
            xl: 1536,
        }
    }
})