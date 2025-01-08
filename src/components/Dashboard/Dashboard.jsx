import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TestConfiguration from './TestConfiguration';
import Metrics from './Metrics';
import LiveResults from './LiveResults';

const Dashboard = () => {
    return (
        <Grid container spacing={3}>
            {/* Test Configuration Panel */}
            <Grid item xs={12} md={4}>
                <Paper elevation={3} sx={{ padding: 2 }}>
                    <Typography variant="h6" gutterBottom>
                        Test Configuration
                    </Typography>
                    <TestConfiguration />
                </Paper>
            </Grid>

            {/* Metrics Dashboard */}
            <Grid item xs={12} md={8}>
                <Paper elevation={3} sx={{ padding: 2 }}>
                    <Typography variant="h6" gutterBottom>
                        Live Metrics
                    </Typography>
                    <Metrics />
                </Paper>
            </Grid>

            {/* Live Results Section */}
            <Grid item xs={12}>
                <Paper elevation={3} sx={{ padding: 2 }}>
                    <Typography variant="h6" gutterBottom>
                        Test Results
                    </Typography>
                    <LiveResults />
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
