import React from 'react';
import { Container, CssBaseline, Avatar, Typography, TextField, Button, Grid, Box, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../components/theme.jsx';

function LoginPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
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
					Sign in
				</Typography>
				<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
				<TextField
					margin="normal"
					variant="outlined"
					required
					fullWidth
					id="email"
					label="Email Address"
					name="email"
					autoComplete="email"
					autoFocus
				/>
				<TextField
					margin="normal"
					variant="outlined"
					required
					fullWidth
					name="password"
					label="Password"
					type="password"
					id="password"
					autoComplete="current-password"
				/>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					sx={{ mt: 3, mb: 2 }}
					href="/"
				>
					Sign In
				</Button>
				</Box>
				<Typography>
					Don't have an account? <Link href='/signup'>Create an account</Link>.
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

export default LoginPage;