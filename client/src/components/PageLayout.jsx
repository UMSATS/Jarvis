/*
Implements a sidebar and its toggle button into the flow of the website.
Wraps the routes in index.js directly, making each page simpler to implement.
*/

import './PageLayout.css';
import React from 'react';
import { Outlet  } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import TabList from './TabList.jsx';
import banner from '../assets/jarvis_banner.png';

export default function PageLayout() {
    const mobile = useMediaQuery(useTheme().breakpoints.down('sm'));
    const [sidebarOpen, setSidebarOpen] = React.useState(!mobile);

    function mobileResponsive(className) {
        return mobile ? className.concat(' mobile') : className;
    }

    return (
        <Box>
            <Drawer
                className={mobileResponsive('sidebar')}
                open={sidebarOpen}
                variant='persistent'
            >
                <Box display='flex' flexDirection='column'>
                    <img src={banner} alt='banner' className='sidebar-banner-image'/>
                    <TabList />
                </Box>
            </Drawer>
            
            <Box className={sidebarOpen ? 'content-transition open' : 'content-transition closed'}>
                <Button 
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    // Replacing this with a css class changes some Material styling
                    // and also stops it from being in a fixed position
                    sx={{
                        position: 'fixed',
                        zIndex: '1200',
                        right: mobile && sidebarOpen ? '0' : '',
                        fontSize: '20px',
                    }}
                >
                    ☰
                </Button>
                
                <Box display='flex' flexDirection='column'
                    // Without disabling the content, when the sidebar is open on mobile,
                    // it has a pseudo min-width of about 440px for some reason. Also,
                    // scrolling the page is possible while the sidebar is open.
                    sx={{display: mobile && sidebarOpen ? 'none' : 'flex'}} 
                >
                    <Box className={mobileResponsive('header')} />
                    <Box className={mobileResponsive('content')}>
                        <Outlet/> {/* For the scrolling issue, maybe something like style={{mobile && sidebarOpen ? overflow-y = 'disable'}}} */}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}