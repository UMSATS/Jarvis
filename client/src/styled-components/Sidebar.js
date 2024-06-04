import {styled} from '@mui/material/styles';
import {theme} from '../components/theme.jsx';
import Drawer from '@mui/material/Drawer';

export const Sidebar = styled(Drawer)(() => ({
    '.MuiPaper-root': {
        backgroundColor: theme.palette.background.sidebar,
        borderRight: 0
    },
}));