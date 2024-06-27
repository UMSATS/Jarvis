import React from "react";
import * as styles from "../styled-components/HeaderStyles.js";
import AppBar  from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';


export default function Header({ title }){
    return(
        <AppBar position='sticky'>
            <Toolbar disableGutters>
                <styles.HeaderLeftBox>
                    {title}
                </styles.HeaderLeftBox>
                <styles.HeaderRightBox>
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