/*
RegistrationPage.js

Account registration page component

@Author Hugo Ng <hugo.ng@umsats.ca>

@created data: June 03, 2024
*/
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';

class RegistrationPage extends React.Component {    
    render() {
        const registerHandler = () => {
            console.log('Registering user...');
        }
        return (
            <div>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div style={{ display: 'flex'}}>
                        <FormControl>
                            <TextField
                                required
                                id="outlined-required"
                                label="First Name"
                                variant="outlined"
                            />
                        </FormControl>
                        <FormControl>
                            <TextField
                                required
                                id="outlined-required"
                                label="Last Name"
                                variant="outlined"
                            />
                        </FormControl>
                    </div>
                    <div style={{ display: 'flex'}}>
                        <FormControl>
                            <FormHelperText>Enter a valid email address with domain @umsats.ca</FormHelperText>
                            <TextField
                                required
                                id="outlined-required"
                                label="Email"
                                variant="outlined"
                            />
                        </FormControl>
                    </div>
                    <div style={{ display: 'flex'}}>
                        <FormControl>
                            <FormHelperText>Enter a valid UMSATS username</FormHelperText>
                            <TextField
                                required
                                id="outlined-required"
                                label="Username"
                                variant="outlined"
                            />
                        </FormControl>
                    </div>
                    <div style={{ display: 'flex'}}>
                        <FormControl>
                            <FormHelperText>Enter a password with at least 8 characters</FormHelperText>
                            <TextField
                                required
                                id="outlined-required"
                                label="Password"
                                variant="outlined"
                            />
                        </FormControl>
                    </div>
                    <div style={{ display: 'flex'}}>
                        <FormControl>
                            <TextField
                                required
                                id="outlined-required"
                                label="Confirm Password"
                                variant="outlined"
                            />
                        </FormControl>
                    </div>
                </Box>
                
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh'
                    }}
                >
                    <Button variant="contained">Register</Button>
                </Box>
            </div>
        );
    }
}

export default RegistrationPage;