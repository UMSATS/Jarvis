import { createTheme, styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export const Sidebar = styled(Drawer)(() => ({
    '.MuiPaper-root': {
        backgroundColor: theme.palette.background.sidebar
    }
}));

export const StyledListItemButton = styled(ListItemButton)(() => ({
    paddingLeft: '2px',
    paddingRight: '8px',
    borderRadius: '8px',
    height: '64px',
    '&.Mui-selected': {
        backgroundColor: theme.palette.greys.light,
        ':hover': {
            backgroundColor: theme.palette.greys.medium
        }
    }
}));

export const StyledListItemText = styled(ListItemText)(() => ({
    marginLeft: '8px',
}));

export const listItemTypography = {
    fontFamily: 'Arial'
}

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