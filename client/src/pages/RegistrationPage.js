/*
RegistrationPage.js

Account registration page component

@Author Hugo Ng <hugo.ng@umsats.ca>

@created data: June 03, 2024
*/
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

class RegistrationPage extends React.Component {
    registerHandler = () => {
        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
    }

    render() {
        return (
            <div>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                    component="form"
                    noValidate
                    onSubmit={this.registerHandler}
                    maxWidth="xs"
                >
                    <Typography component="h1" variant="h5">Sign up</Typography>
                    <div style={{ display: 'flex', marginTop: '1rem'}} >
                        <FormControl>
                            <TextField
                                required
                                id="firstName"
                                label="First Name"
                                variant="outlined"
                            />
                        </FormControl>
                        <FormControl>
                            <TextField
                                required
                                id="lastName"
                                label="Last Name"
                                variant="outlined"
                            />
                        </FormControl>
                    </div>
                    <div style={{ display: 'flex', marginTop: '1rem'}}>
                        <FormControl>
                            <TextField
                                required
                                id="email"
                                label="Email"
                                variant="outlined"
                                fullWidth
                            />
                        </FormControl>
                    </div>
                    <div style={{ display: 'flex', marginTop: '1rem'}}>
                        <FormControl>
                            <TextField
                                required
                                id="password"
                                label="Password"
                                variant="outlined"
                                fullWidth
                            />
                        </FormControl>
                    </div>
                    <div style={{ display: 'flex', marginTop: '1rem'}}>
                        <FormControl>
                            <TextField
                                required
                                id="confirm_password"
                                label="Confirm Password"
                                variant="outlined"
                                fullWidth
                            />
                        </FormControl>
                    </div>
                    <Button type='submit'
                        variant="contained"
                        color="primary"
                        style={{ marginTop: '1rem' }}
                    >
                        Sign Up
                    </Button>
                    <div style={{ display: 'flex', marginTop: '1rem'}}>
                        <Link 
                        href="/" variant="body2" 
                        >
                            Already have an account? Sign in
                        </Link>
                    </div>
                </Box>
            </div>
        );
    }
}

export default RegistrationPage;