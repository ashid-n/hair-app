import React from "react";
import { Box, Grid, Typography, IconButton, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: "primary.main",
                color: "white",
                py: 4,
                mt: 5,
                width: "100%",   // ✅ Ensures full width
                minWidth: "100%", // ✅ Ensures no cut-off
                position: "static" // ✅ Fixes layout issue
            }}
        >

            <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: "1280px", mx: "auto", px: 2 }}>
                {/* About Section */}
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" fontWeight="bold">
                        About Us
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                        Experience luxury hair care with our expert stylists. From haircuts to styling, we bring out the best in you.
                    </Typography>
                </Grid>

                {/* Quick Links */}
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" fontWeight="bold">
                        Quick Links
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", mt: 1 }}>
                        <Link href="/" color="inherit" underline="hover">Home</Link>
                        <Link href="/services" color="inherit" underline="hover">Services</Link>
                        <Link href="/about" color="inherit" underline="hover">About Us</Link>
                        <Link href="/contact" color="inherit" underline="hover">Contact</Link>
                    </Box>
                </Grid>

                {/* Social Media Links */}
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" fontWeight="bold">
                        Follow Us
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                        <IconButton color="inherit" component="a" href="https://facebook.com" target="_blank">
                            <FacebookIcon />
                        </IconButton>
                        <IconButton color="inherit" component="a" href="https://instagram.com" target="_blank">
                            <InstagramIcon />
                        </IconButton>
                        <IconButton color="inherit" component="a" href="https://twitter.com" target="_blank">
                            <TwitterIcon />
                        </IconButton>
                        <IconButton color="inherit" component="a" href="https://linkedin.com" target="_blank">
                            <LinkedInIcon />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>

            {/* Copyright */}
            <Box sx={{ textAlign: "center", mt: 3, pt: 2, borderTop: "1px solid rgba(255,255,255,0.2)" }}>
                <Typography variant="body2">
                    © {new Date().getFullYear()} Urban King Hair Salon. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
