/*
Implements a sidebar and its toggle button into the flow of the website.
Wraps the router in index.js directly, making each page simpler to implement.
*/

import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import TabList from './TabList.jsx';
import banner from '../assets/jarvis_banner.png';

export default function PageLayout({children}) {
    const contentMarginX = '60px';
    const sidebarWidth = '320px';

    const mobile = useMediaQuery(useTheme().breakpoints.down('sm'));
    const [sidebarOpen, setSidebarOpen] = React.useState(!mobile);

    const classes = {
        root: {},
        content: {
            marginLeft: !mobile && sidebarOpen ? sidebarWidth : 0,
            transition: 'margin-left 225ms cubic-bezier(0, 0, 0.2, 1)',
        },
        drawer: {
            width: mobile ? '100%' : sidebarWidth,
            ".MuiDrawer-paper": {
              width: mobile ? '100%' : sidebarWidth,
            },
        }
    };

    return (
        <Box sx={classes.root}>
            <Drawer
                sx={classes.drawer}
                open={sidebarOpen}
                anchor='left'
                variant='persistent'
            >
                <Box display='flex' flexDirection='column'>
                    <img src={banner} alt='banner' />
                    <TabList />
                </Box>
            </Drawer>
            
            <Box sx={classes.content}>
                <Button 
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    sx={{
                        position: 'fixed',
                        zIndex: '1200',
                        right: mobile && sidebarOpen ? '0' : '',
                        fontSize: '20px',
                    }}
                >
                    ☰
                </Button>

                <Box 
                    sx={{
                        display: mobile && sidebarOpen ? 'none' : '', // Prevents scrolling when sidebar is open on mobile, 
                                                                      // but loses scroll position when sidebar is closed
                        marginX: contentMarginX,
                    }}
                >
                    {children} {/* Page Content */}
                </Box>
            </Box>
        </Box>
    );
}