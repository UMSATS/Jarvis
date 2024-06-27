import {styled} from '@mui/material/styles';
import {theme} from '../components/theme.jsx';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

const sidebarWidth = '400px';
const sidebarWidthMobile = '75vw';

export const Sidebar = styled(Drawer)((props) => ({
    width: props.mobile ? sidebarWidthMobile : sidebarWidth,
    '.MuiDrawer-paper': {
        width: props.mobile ? sidebarWidthMobile : sidebarWidth
    },
    '.MuiPaper-root': {
        backgroundColor: !props.mobile ? theme.palette.background.sidebar : '',
        borderRight: 0
    },
}));

export const ContentBox = styled(Box)((props) => ({
    transition: 'margin-left 225ms cubic-bezier(0, 0, 0.2, 1)',
    marginLeft: props.open && !props.mobile ? sidebarWidth : '0'
}));

export const PageContent = styled(Box)((props) => ({
    margin: props.mobile ? '0 20px' : '0 60px'
}));