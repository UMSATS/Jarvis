/*
RegistrationPage.js

Account registration page component, baseed on the Material-UI example at https://mui.com/getting-started/templates/sign-up/

@Author Hugo Ng <hugo.ng@umsats.ca>

@created data: June 03, 2024
*/
import React from 'react';
import { TextField, Button, Box, Typography, Grid, Avatar, CssBaseline, Container, Link }from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../components/theme.jsx';
import { useNavigate } from 'react-router-dom';


function RegistrationPage() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        if(data.get('firstName') === "" || data.get('lastName') === "" || data.get('email') === "" || data.get('password') === "" || data.get('confirm_password') === ""){
            alert("Please fill out all fields.");
            return;
        }
        if(data.get('password') !== data.get('confirm_password')){
            alert("Please enter the same password in both fields.");
            return;
        }
        // TODO: send post request to the server, need another if else statement
        alert("Welcome to the team, " + data.get('firstName') + "!");
        navigate('/');
      };

    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirm_password"
                  label="Confirm Password"
                  type="password"
                  id="confirm_password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Account
            </Button>
            <Grid container justifyContent="flex-end">
            </Grid>
          </Box>
          <Typography>
                  Already have an account? <Link href="/login">Sign in</Link>
          </Typography>
        </Box>
        <Box mt={8}>
			<Typography variant="body2" color="text.secondary" align="center">
				{'Copyright © UMSATS '}{new Date().getFullYear()}{'.'}
			</Typography>
		</Box>
      </Container>
      </ThemeProvider>
    );
}

export default RegistrationPage;