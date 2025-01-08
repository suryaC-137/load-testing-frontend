import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'endpoint', headerName: 'Endpoint', width: 200 },
    { field: 'status', headerName: 'Status', width: 120 },
    { field: 'responseTime', headerName: 'Response Time (ms)', width: 180 },
    { field: 'rps', headerName: 'RPS', width: 120 },
];

const rows = [
    { id: 1, endpoint: '/api/v1/test', status: '200 OK', responseTime: 210, rps: 50 },
    { id: 2, endpoint: '/api/v1/test', status: '500 Internal Server Error', responseTime: 0, rps: 0 },
    { id: 3, endpoint: '/api/v1/health', status: '200 OK', responseTime: 180, rps: 30 },
];

const LiveResults = () => {
    return (
        <Paper elevation={3} sx={{ height: 400, width: '100%' }}>
            <Box sx={{ height: '100%', width: '100%' }}>
                <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} />
            </Box>
        </Paper>
    );
};

export default LiveResults;
