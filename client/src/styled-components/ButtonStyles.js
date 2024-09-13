import {styled} from '@mui/material/styles';
import {theme} from '../components/theme.jsx';
import Button from '@mui/material/Button';

export const RectRadioButton = styled(Button)(({ active }) => ({
    border: active ? `2px solid ${theme.palette.primary.main}` : '2px solid transparent',
    backgroundColor: active ? theme.palette.action.selected : 'inherit',
    color: active ? theme.palette.primary.main : 'inherit',
    '&:hover': {
      backgroundColor: active ? theme.palette.action.selected : theme.palette.action.hover,
    }
}));