import React from "react";
import * as styles from "../styled-components/HeaderStyles.js";
import { useLayoutContext } from './PageLayout.jsx';
import { useTimeContext } from "./TimeRangeContext.jsx";
import AppBar  from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from 'react-router-dom';

export default function Header(){
    const LayoutContext = useLayoutContext();
    const TimeContext = useTimeContext();

    return(
        <AppBar position='sticky'>
            <Toolbar disableGutters>
                <styles.HeaderLeftBox>
                    <styles.SidebarButton
                        onClick={() => LayoutContext.setSidebarOpen(!LayoutContext.sidebarOpen)}
                        disableTouchRipple
                    >
                        ☰
                    </styles.SidebarButton>
                    {LayoutContext.selectedTabName}
                </styles.HeaderLeftBox>
                <styles.HeaderRightBox>
                    <Box>
                        <input type="datetime-local" 
                            value={new Date(TimeContext.timeRange.start).toISOString().slice(0, 16)}
                            onChange={(e) => TimeContext.setStart(e.target.value)}
                        />
                        <input type="datetime-local" 
                            value={new Date(TimeContext.timeRange.end).toISOString().slice(0, 16)}
                            onChange={(e) => TimeContext.setEnd(e.target.value)}
                        />
                    </Box>
					<Link to="/login" style={{ textDecoration: 'none'}}>
						<Button
							sx={{
								color: 'white',
								bgcolor: 'black',
							}}
						>
							Login
						</Button>
					</Link>
                </styles.HeaderRightBox>
            </Toolbar>
        </AppBar>
    )
}