import {styled} from '@mui/material/styles';
import {theme} from '../components/theme.jsx';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const HeaderLeftBox = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.5em', 
    fontWeight: 'bold',
    textAlign: 'center', 
    fontFamily: 'Arial, sans-serif',
}));

export const HeaderRightBox = styled(Box)(() => ({
    width: 'fit-content',
    right: '1em',
    position: 'absolute'
}));

export const SidebarButton = styled(Button)(() => ({
    zIndex: '1200',
    fontSize: '25px',
    fontWeight: '700',
    color: '#888',
    padding: '0'
}));