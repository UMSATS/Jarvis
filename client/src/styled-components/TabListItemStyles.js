import {styled} from '@mui/material/styles';
import {theme} from '../components/theme.jsx';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export const StyledListItem = styled(ListItem)(() => ({
    padding: '0 12px 8px'
}));

export const StyledListItemButton = styled(ListItemButton)(() => ({
    padding: '10px 18px',
    borderRadius: '15px',
    height: 'auto',
    '&.Mui-selected': {
        backgroundColor: theme.palette.greys.light,
        ':hover': {
            backgroundColor: theme.palette.greys.medium
        }
    }
}));

export const StyledListItemText = styled(ListItemText)(() => ({
    marginLeft: '24px'
}));