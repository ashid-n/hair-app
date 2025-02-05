import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Box, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom"; // Ensure react-router-dom is installed

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const menuItems = [
        { text: "Home", path: "/" },
        { text: "Pre-Booking", path: "/booking" },
        { text: "Face Customization", path: "/face-customization" },
    ];

    return (
        <>
            {/* Full-width Navbar */}
            <AppBar position="fixed" sx={{ width: "100%", top: 0, left: 0, bgcolor: "primary.main" }}>
                <Toolbar sx={{ maxWidth: "1280px", width: "100%", mx: "auto" }}>
                    {/* Mobile Menu Button */}
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, display: { xs: "block", md: "none" } }}
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>

                    {/* Logo / Brand Name */}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Urban King
                    </Typography>

                    {/* Desktop Menu */}
                    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
                        {menuItems.map((item) => (
                            <Button key={item.text} color="inherit" component={Link} to={item.path}>
                                {item.text}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Push content down so it doesn't get hidden behind the navbar */}
            <Toolbar />

            {/* Mobile Drawer */}
            <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
                <List sx={{ width: 250 }}>
                    {menuItems.map((item) => (
                        <ListItem button key={item.text} component={Link} to={item.path} onClick={handleDrawerToggle}>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
};

export default Navbar;
