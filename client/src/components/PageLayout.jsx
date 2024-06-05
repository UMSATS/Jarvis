/*
Implements a sidebar and its toggle button into the flow of the website.
Wraps the routes in index.js directly, making each page simpler to implement.
*/

import React from 'react';
import { Outlet  } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme.jsx';
import * as styles from '../styled-components/PageLayoutStyles.js';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import TabList from './TabList.jsx';
import bannerImage from '../assets/jarvis_banner.png';
import CssBaseline from '@mui/material/CssBaseline';

export default function PageLayout() {
    const mobile = useMediaQuery(theme.breakpoints.down('mobile'));
    const [sidebarOpen, setSidebarOpen] = React.useState(!mobile);

    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box>
            <styles.Sidebar
                open={sidebarOpen}
                mobile={mobile}
                variant='persistent'
            >
                <Box display='flex' flexDirection='column'>
                    <img src={bannerImage} alt='banner'
                         style={{margin: '12px', borderRadius: '8px'}}/>
                    <TabList />
                </Box>
            </styles.Sidebar>
            
            <styles.ContentBox open={sidebarOpen}>
                <styles.SidebarButton
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    sx={{right: mobile && sidebarOpen ? '0' : ''}}
                    disableTouchRipple>
                    ☰
                </styles.SidebarButton>
                
                <Box display='flex' flexDirection='column'
                    // Without disabling the content, when the sidebar is open on mobile,
                    // it has a pseudo min-width of about 440px for some reason. Also,
                    // scrolling the page is possible while the sidebar is open.
                    sx={{display: mobile && sidebarOpen ? 'none' : 'flex'}} 
                >
                    <styles.Header/>
                    <styles.PageContent mobile={mobile}>
                        <Outlet/> {/* For the scrolling issue, maybe something like style={{mobile && sidebarOpen ? overflow-y = 'disable'}}} */}
                    </styles.PageContent>
                </Box>
            </styles.ContentBox>
        </Box>
        </ThemeProvider>
    );
}