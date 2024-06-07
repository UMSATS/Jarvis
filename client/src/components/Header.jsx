import React from "react";
import * as styles from "../styled-components/HeaderStyles.js";
import AppBar  from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

export default function Header({ title, sidebarOpen, setSidebarOpen, mobile }){
    return(
        <AppBar position='sticky'>
            <Toolbar disableGutters>
                <styles.HeaderLeftBox>
                    <styles.SidebarButton
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        sx={{right: mobile && sidebarOpen ? '0' : ''}}
                        disableTouchRipple
                    >
                        ☰
                    </styles.SidebarButton>
                    {title}
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