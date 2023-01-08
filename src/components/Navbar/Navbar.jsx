import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { NavLink } from 'react-router-dom';
import "./Navbar.css"
import navLogo from "./images/nav.svg";


const Navbar = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" elevation={0}>
                    <Toolbar className='navbar'>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <NavLink to="/"><img src={navLogo} alt='img' /></NavLink>
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <NavLink className={({ isActive }) => (isActive ? "nav-link" : "")} style={{ marginRight: 40 }} to="/about">About</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "nav-link" : "")} style={{ marginRight: 40 }} to="/portfolio">Portfolio</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "nav-link" : "")} style={{ marginRight: 40 }} to="/services">Services</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "nav-link" : "")} to="/blog">Blog</NavLink>
                        </Typography>
                        <NavLink to="/contact" className='nav-btn'><Button className='nav-btn' color="inherit">Contact</Button></NavLink>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar