/*
Implements a sidebar and its toggle button into the flow of the website.
Wraps the routes in index.js directly, making each page simpler to implement.
*/

import React, { useState, useContext } from 'react';
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

export const LayoutContext = React.createContext(undefined);
export function useLayoutContext() {
    const context = useContext(LayoutContext);
    if (context === undefined) {
        throw new Error("useLayoutContext is missing a provider or values");
    }
    return context;
}

export default function PageLayout() {
    const mobile = useMediaQuery(theme.breakpoints.down('mobile'));
    const [sidebarOpen, setSidebarOpen] = React.useState(!mobile);
    const [selectedTabName, setSelectedTabName] = useState('UMSATS');

    const toggleSidebar = (newOpen) => () => {
        setSidebarOpen(newOpen);
    }

    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box display='inline'>
            <styles.Sidebar
                open={sidebarOpen}
                mobile={mobile}
                variant={mobile ? 'temporary' : 'persistent'}
                onClose={toggleSidebar(false)}
            >
                <Box display='flex' flexDirection='column'>
                    <img src={bannerImage} alt='banner'
                         style={{margin: '12px', borderRadius: '8px'}}/>
                    <LayoutContext.Provider value={{setSelectedTabName, setSidebarOpen, mobile}}>
                        <TabList />
                    </LayoutContext.Provider>
                </Box>
            </styles.Sidebar>
            
            <styles.ContentBox open={sidebarOpen} mobile={mobile}>
                <styles.SidebarButton
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    disableTouchRipple
                >
                    ☰
                </styles.SidebarButton>
                <Box display='flex' flexDirection='column'>
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