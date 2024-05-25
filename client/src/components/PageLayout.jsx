import React from 'react';
import PageList from './PageList.jsx'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

export default function PageLayout({children}) {
    const contentMarginX = '50px';
    const sidebarWidth = '240px';

    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    const classes = {
        root: {},
        content: {
            marginLeft: sidebarOpen ? sidebarWidth : 0,
            transition: 'margin-left 300ms'
        },
        drawer: {
            width: sidebarWidth,
            ".MuiDrawer-paper": {
              width: sidebarWidth,
            },
        }
    };

    return (
        <Box sx={classes.root}>
            <Drawer
                open={sidebarOpen}
                sx={classes.drawer}
                anchor='left'
                variant='persistent'
            >
                
                <PageList />
            </Drawer>

            <Box sx={classes.content}>
                <Button 
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    sx={{
                        position: 'fixed',
                        fontSize: '20px',
                    }}
                >
                    ☰
                </Button>
                
                <Box 
                    sx={{
                        marginX: contentMarginX,
                    }}
                >
                    {children}
                </Box>
            </Box>
        </Box>
    );
}