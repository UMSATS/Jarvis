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
        return (
            <div>
                <Box
                    component="form"
                    sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <FormControl>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="First Name"
                                    variant="outlined"
                                />
                            </FormControl>
                        </div>
                        <div>
                            <TextField
                                required
                                id="outlined-required"
                                label="Last Name"
                                defaultValue="Last Name"
                                variant="outlined"
                            />
                        </div>
                    </div>
                    <div>
                        // Text field for email
                        <TextField
                            required
                            id="outlined-required"
                            label="Email"
                            defaultValue="Email"
                            variant="outlined"
                        />
                    </div>
                    <div>
                        // Text field for password
                        <TextField
                            required
                            id="outlined-required"
                            label="Password"
                            defaultValue="Password"
                            variant="outlined"
                        />
                    </div>
                    <div>
                        // Text field for confirm password
                        <TextField
                            required
                            id="outlined-required"
                            label="Confirm Password"
                            defaultValue="Confirm Password"
                            variant="outlined"
                        />
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