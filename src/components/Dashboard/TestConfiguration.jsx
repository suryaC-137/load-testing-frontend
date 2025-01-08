import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';

const TestConfiguration = () => {
    const [config, setConfig] = useState({
        virtualUsers: 10,
        duration: 60,
        targetUrl: '',
        requestType: 'GET',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setConfig({ ...config, [name]: value });
    };

    const handleSave = () => {
        console.log('Configuration saved:', config);
        // Here, you can send the configuration to the backend or save it to context.
    };

    return (
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
                label="Number of Virtual Users"
                name="virtualUsers"
                type="number"
                value={config.virtualUsers}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Test Duration (in seconds)"
                name="duration"
                type="number"
                value={config.duration}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Target URL"
                name="targetUrl"
                type="url"
                value={config.targetUrl}
                onChange={handleChange}
                fullWidth
            />
            <FormControl fullWidth>
                <InputLabel>Request Type</InputLabel>
                <Select
                    name="requestType"
                    value={config.requestType}
                    onChange={handleChange}
                >
                    <MenuItem value="GET">GET</MenuItem>
                    <MenuItem value="POST">POST</MenuItem>
                    <MenuItem value="PUT">PUT</MenuItem>
                    <MenuItem value="DELETE">DELETE</MenuItem>
                </Select>
            </FormControl>
            <Button variant="contained" color="primary" onClick={handleSave}>
                Save Configuration
            </Button>
        </Box>
    );
};

export default TestConfiguration;
