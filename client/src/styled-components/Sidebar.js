import {styled} from '@mui/material/styles';
import {theme} from '../components/theme.jsx';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

export const Sidebar = styled(Drawer)(() => ({
    '.MuiPaper-root': {
        backgroundColor: theme.palette.background.sidebar,
        borderRight: 0
    },
}));

export const StyledButton = styled(Button)(() => ({
    position: 'fixed',
    zIndex: '1200',
    fontSize: '20px'
}));