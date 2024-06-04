import React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import Link from '@mui/material/Link';
import * as styles from '../styled-components/TabListItem.js';

export default function TabListItem(props) {
    return (
        <styles.StyledListItem>
            <Link
                href={props.href}
                underline='none'
                color='inherit'
                width='100%'
            >
                <styles.StyledListItemButton selected={window.location.pathname === props.href} disableRipple>
                    <ListItemIcon>
                        {props.icon}
                    </ListItemIcon>
                    <styles.StyledListItemText primary={props.name} primaryTypographyProps={styles.listItemTypography}/>
                </styles.StyledListItemButton>
            </Link>
        </styles.StyledListItem>
    );
}