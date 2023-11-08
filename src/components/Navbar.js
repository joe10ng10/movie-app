import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';


const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                <div>Movie<span style={{ color: '#fdc000' }}>Saver.</span></div>
            </Typography>
            <Button color="inherit">Home</Button>
            <Button color="inherit">My List</Button>
        </Toolbar>
      </Container>
    </AppBar>
  
);
}

export default Navbar
