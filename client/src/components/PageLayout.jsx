import React from 'react';
import PageList from './PageList.jsx'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

export default function PageLayout({children}) {
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
                        position: 'absolute',
                        fontSize: '20px',
                    }}
                >
                    ☰
                </Button>
                
                <Box 
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh'
                    }}
                >
                    {children}
                </Box>
            </Box>
        </Box>
    );
}