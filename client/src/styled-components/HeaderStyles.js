import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const HeaderLeftBox = styled(Box)(() => ({
    display: 'flex',
    fontSize: '1.5em', 
    fontWeight: 'bold',
    textAlign: 'center', 
    fontFamily: 'Arial, sans-serif',
}));

export const HeaderRightBox = styled(Box)(() => ({
    display: 'flex',
    width: 'fit-content',
    right: '1em',
    position: 'absolute'
}));

export const SidebarButton = styled(Button)(() => ({
    zIndex: '1200',
    margin: '0 8px',
    padding: '0',
    '&.MuiButton-root': {
        lineHeight: '0'
    },
    fontSize: '25px',
    fontWeight: '700',
    color: '#888',
}));