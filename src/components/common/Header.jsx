import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="static" sx={{ zIndex: 1300 }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Load Testing Framework
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
