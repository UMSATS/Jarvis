import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';

export default function TabListItem(props) {
    return (
        <ListItem>
            <Link
                href={props.href}
                underline='none'
                color='inherit'
                width='100%'
            >
                <ListItemButton selected={window.location.pathname === props.href} 
                                sx={{paddingLeft: '8px', paddingRight: '8px'}}
                >
                    <ListItemIcon>
                        {props.icon}
                    </ListItemIcon>
                    <ListItemText primary={props.name} sx={{marginLeft: '8px'}}/>
                </ListItemButton>
            </Link>
        </ListItem>
    );
}