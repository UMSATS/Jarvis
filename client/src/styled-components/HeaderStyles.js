import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';

export const HeaderLeftBox = styled(Box)(() => ({
    marginLeft: '2.5em',
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