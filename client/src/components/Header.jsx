import React from "react";
import * as styles from "../styled-components/HeaderStyles.js";
import { useLayoutContext } from './PageLayout.jsx';
import AppBar  from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import TimeRangePicker from "./TimeRangePicker.jsx";
import HelpDialog from "./HelpDialog.jsx";
 
export default function Header(){
    const LayoutContext = useLayoutContext();
    const [helpOpen, setHelpOpen] = React.useState(false);
 
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
                    <TimeRangePicker />
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
                    <HelpDialog open={helpOpen} onClose={() => setHelpOpen(false)} />
                    <Button onClick={() => setHelpOpen(true)} 
                        sx={{
                            color: 'white',
                            bgcolor: 'black',
                        }}
                    >
                        Help
                    </Button>
                </styles.HeaderRightBox>
            </Toolbar>
        </AppBar>
    )
}