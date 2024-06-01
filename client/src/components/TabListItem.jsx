import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';
import { StyledListItemButton } from './theme.jsx';

export default function TabListItem(props) {
    return (
        <ListItem>
            <Link
                href={props.href}
                underline='none'
                color='inherit'
                width='100%'
            >
                <StyledListItemButton selected={window.location.pathname === props.href}>
                    <ListItemIcon>
                        {props.icon}
                    </ListItemIcon>
                    <ListItemText primary={props.name} sx={{marginLeft: '8px'}}/>
                </StyledListItemButton>
            </Link>
        </ListItem>
    );
}