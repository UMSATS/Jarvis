import React from "react";
import * as styles from "../styled-components/HeaderStyles.js";
import { useLayoutContext } from './PageLayout.jsx';
import AppBar  from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

export default function Header(){
    const Context = useLayoutContext();

    return(
        <AppBar position='sticky'>
            <Toolbar disableGutters>
                <styles.HeaderLeftBox>
                    <styles.SidebarButton
                        onClick={() => Context.setSidebarOpen(!Context.sidebarOpen)}
                        disableTouchRipple
                    >
                        ☰
                    </styles.SidebarButton>
                    {Context.selectedTabName}
                </styles.HeaderLeftBox>
                <styles.HeaderRightBox>
                    <Button
                        sx={{
                            color: 'white',
                            bgcolor: 'black',
                        }}
                    >
                        Login
                    </Button>
                </styles.HeaderRightBox>
            </Toolbar>
        </AppBar>
    )
}