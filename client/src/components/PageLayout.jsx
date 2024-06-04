/*
Implements a sidebar and its toggle button into the flow of the website.
Wraps the routes in index.js directly, making each page simpler to implement.
*/

import './PageLayout.css';
import React from 'react';
import { Outlet  } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme.jsx';
import { Sidebar, StyledButton } from '../styled-components/Sidebar.js';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import TabList from './TabList.jsx';
import banner from '../assets/jarvis_banner.png';
import CssBaseline from '@mui/material/CssBaseline';

export default function PageLayout() {
    const mobile = useMediaQuery(theme.breakpoints.down('mobile'));
    const [sidebarOpen, setSidebarOpen] = React.useState(!mobile);

    function mobileResponsive(className) {
        return mobile ? className + ' mobile' : className;
    }

    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box>
            <Sidebar
                className={mobileResponsive('sidebar')}
                open={sidebarOpen}
                variant='persistent'
            >
                <Box display='flex' flexDirection='column'>
                    <img src={banner} alt='banner' className='sidebar-banner-image'/>
                    <TabList />
                </Box>
            </Sidebar>
            
            <Box className={'content-transition' + (sidebarOpen ? ' open' : ' closed')}>
                <StyledButton 
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    sx={{right: mobile && sidebarOpen ? '0' : ''}}
                    disableTouchRipple>
                    ☰
                </StyledButton>
                
                <Box display='flex' flexDirection='column'
                    // Without disabling the content, when the sidebar is open on mobile,
                    // it has a pseudo min-width of about 440px for some reason. Also,
                    // scrolling the page is possible while the sidebar is open.
                    sx={{display: mobile && sidebarOpen ? 'none' : 'flex'}} 
                >
                    <Box className={mobileResponsive('header')} backgroundColor='background.page'/>
                    <Box className={mobileResponsive('content')}>
                        <Outlet/> {/* For the scrolling issue, maybe something like style={{mobile && sidebarOpen ? overflow-y = 'disable'}}} */}
                    </Box>
                </Box>
            </Box>
        </Box>
        </ThemeProvider>
    );
}