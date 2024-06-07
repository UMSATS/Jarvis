import {styled} from '@mui/material/styles';
import {theme} from '../components/theme.jsx';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

const sidebarWidth = '400px';

export const Sidebar = styled(Drawer)((props) => ({
    width: props.mobile ? '100%' : sidebarWidth,
    '.MuiDrawer-paper': {
        width: props.mobile ? '100%' : sidebarWidth
    },
    '.MuiPaper-root': {
        backgroundColor: theme.palette.background.sidebar,
        borderRight: 0
    },
}));

export const SidebarButton = styled(Button)(() => ({
    zIndex: '1200',
    position: 'fixed',
    fontSize: '25px',
    fontWeight: '700',
    color: '#888',
    padding: '0',
    height: '64px'
}));

export const ContentBox = styled(Box)((props) => ({
    transition: 'margin-left 225ms cubic-bezier(0, 0, 0.2, 1)',
    marginLeft: props.open ? sidebarWidth : '0px'
}));

export const PageContent = styled(Box)((props) => ({
    margin: props.mobile ? '0 20px' : '0 60px'
}));

export const Header = styled(Box)(() => ({
    height: '50px',
    backgroundColor: theme.palette.background.page,
    position: 'sticky',
    top: '0',
    width: '100%'
}));