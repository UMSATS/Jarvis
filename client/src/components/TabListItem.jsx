import React from 'react';
import Link from '@mui/material/Link';
import * as styles from '../styled-components/TabListItemStyles.js';
import { useNavigate } from 'react-router-dom';

export default function TabListItem({ href, icon, name, setSelectedTabName }) {
    const selected = window.location.pathname === href;
    const navigate = useNavigate();

    const handleClick = (event) => {
        event.preventDefault();
        setSelectedTabName(name);
        navigate(href);
    };

    return (
        <styles.StyledListItem>
            <Link
                href={href}
                underline='none'
                color='inherit'
                width='100%'
            >
                <styles.StyledListItemButton selected={selected} 
                                             onClick={handleClick}
                                             disableRipple
                >
                    {icon}
                    <styles.StyledListItemText 
                        primary={name}
                        primaryTypographyProps={{
                            variant: 'tabListItem',
                            fontWeight: selected ? '700' : '',
                            color: selected ? 'text.light' : 'text.medium'
                        }}
                    />
                </styles.StyledListItemButton>
            </Link>
        </styles.StyledListItem>
    );
}