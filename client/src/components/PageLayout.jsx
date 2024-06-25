/*
Implements a sidebar and its toggle button into the flow of the website.
Wraps the routes in index.js directly, making each page simpler to implement.
*/

import React, { useState } from 'react';
import { Outlet  } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme.jsx';
import * as styles from '../styled-components/PageLayoutStyles.js';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import TabList from './TabList.jsx';
import bannerImage from '../assets/jarvis_banner.png';
import Header from './Header.jsx';

export default function PageLayout() {
    const mobile = useMediaQuery(theme.breakpoints.down('mobile'));
    const [sidebarOpen, setSidebarOpen] = React.useState(!mobile);
    const [selectedTabName, setSelectedTabName] = useState('UMSATS');

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
                    <TabList setSelectedTabName={setSelectedTabName}/>
                </Box>
            </styles.Sidebar>
            
            <styles.ContentBox open={sidebarOpen}>
                <styles.SidebarButton
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    sx={{right: mobile && sidebarOpen ? '0' : ''}}
                    disableTouchRipple
                >
                    ☰
                </styles.SidebarButton>
                <Box display='flex' flexDirection='column'
                     sx={{display: mobile && sidebarOpen ? 'none' : 'flex'}} 
                >
                    <Header title={selectedTabName}
                            sidebarOpen={sidebarOpen}
                            setSidebarOpen={setSidebarOpen}
                            mobile={mobile}
                    />
                    <styles.PageContent mobile={mobile}>
                        <Outlet/>
                    </styles.PageContent>
                </Box>
            </styles.ContentBox>
        </Box>
        </ThemeProvider>
    );
}