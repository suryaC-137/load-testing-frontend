import React from 'react';
import { Box, CssBaseline, Container } from '@mui/material';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <CssBaseline />
            <Header />
            <Container sx={{ flexGrow: 1, mt: 3 }}>{children}</Container>
        </Box>
    );
};

export default Layout;
