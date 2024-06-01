import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#151515'
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            mobile: 500,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        }
    }
})