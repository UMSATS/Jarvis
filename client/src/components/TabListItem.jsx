import React from 'react';
import Link from '@mui/material/Link';
import * as styles from '../styled-components/TabListItemStyles.js';
import { useLayoutContext } from './PageLayout.jsx';
import { useNavigate } from 'react-router-dom';

export default function TabListItem({ href, icon, name }) {
    const selected = window.location.pathname === href;
    const navigate = useNavigate();
    const Context = useLayoutContext();

    const handleClick = (event) => {
        event.preventDefault();
        Context.setSelectedTabName(name);
        navigate(href);
        if (Context.mobile) {Context.setSidebarOpen(false)};
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
                            fontWeight: selected ? '700' : '500',
                            color: selected ? 'text.light' : 'text.medium'
                        }}
                    />
                </styles.StyledListItemButton>
            </Link>
        </styles.StyledListItem>
    );
}