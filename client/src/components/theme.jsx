import { createTheme, styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';

export const Sidebar = styled(Drawer)(() => ({
    ".MuiPaper-root": {
        backgroundColor: theme.palette.background.sidebar
    }
}));

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