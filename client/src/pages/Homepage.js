import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

class HomePage extends React.Component {
  render() {
    return (
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
      >
        <Typography>
          Lets develop jarvis!!
        </Typography>
      </Box>
    );
  }
}

export default HomePage;
