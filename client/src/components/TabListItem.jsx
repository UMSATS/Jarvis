import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Link from '@mui/material/Link';
import { StyledListItemButton, StyledListItemText, listItemTypography } from './theme.jsx';

export default function TabListItem(props) {
    return (
        <ListItem sx={{padding: '4px 8px'}}>
            <Link
                href={props.href}
                underline='none'
                color='inherit'
                width='100%'
            >
                <StyledListItemButton selected={window.location.pathname === props.href} disableRipple>
                    <ListItemIcon>
                        {props.icon}
                    </ListItemIcon>
                    <StyledListItemText primary={props.name} primaryTypographyProps={listItemTypography}/>
                </StyledListItemButton>
            </Link>
        </ListItem>
    );
}