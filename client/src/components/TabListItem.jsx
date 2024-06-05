import React from 'react';
import Link from '@mui/material/Link';
import * as styles from '../styled-components/TabListItem.js';

export default function TabListItem(props) {
    const selected = window.location.pathname === props.href;
    return (
        <styles.StyledListItem>
            <Link
                href={props.href}
                underline='none'
                color='inherit'
                width='100%'
            >
                <styles.StyledListItemButton selected={selected} disableRipple>
                    {props.icon}
                    <styles.StyledListItemText 
                        primary={props.name}
                        primaryTypographyProps={{
                            variant: 'tabListItem',
                            fontWeight: selected ? '700' : ''
                        }}
                    />
                </styles.StyledListItemButton>
            </Link>
        </styles.StyledListItem>
    );
}