import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const mockData = [
    { time: '0s', responseTime: 200, rps: 50, errors: 0, activeUsers: 10 },
    { time: '10s', responseTime: 220, rps: 60, errors: 1, activeUsers: 15 },
    { time: '20s', responseTime: 180, rps: 65, errors: 0, activeUsers: 20 },
];

const Metrics = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                <Card>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Response Time (ms)
                        </Typography>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={mockData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="time" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="responseTime" stroke="#8884d8" />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Requests Per Second (RPS)
                        </Typography>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={mockData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="time" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="rps" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Metrics;
