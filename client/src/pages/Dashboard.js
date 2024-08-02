import { Box, Typography } from '@mui/material';
import React from 'react';

class Dashboard extends React.Component {
  render() {
    return <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'top',
        height: '100vh'
      }}
      >
		<Typography>Hello World!</Typography>
	  </Box>;
  }
}

export default Dashboard;