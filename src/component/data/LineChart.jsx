// import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { LineChart } from '@mui/x-charts';

const revenueData = [
    { date: '2024-09-01', revenue: 400 },
    { date: '2024-09-02', revenue: 300 },
    { date: '2024-09-03', revenue: 500 },
    { date: '2024-09-04', revenue: 700 },
    { date: '2024-09-05', revenue: 600 },
    { date: '2024-09-06', revenue: 800 },
    { date: '2024-09-07', revenue: 900 },
];

const dates = revenueData.map(item => item.date);
const revenues = revenueData.map(item => item.revenue);
const RevenueChart = () => {
    const theme = useTheme();

    return (
        <Box sx={{ padding: '20px', backgroundColor: theme.palette.background.paper, borderRadius: '8px' }}>
            <Typography variant="h6" gutterBottom>
                Revenue Over Time
            </Typography>
            <LineChart
                xAxis={[{ data: dates }]}
                series={[
                    {
                        data: revenues,
                    },
                ]}
            />
        </Box>
    );
};

export default RevenueChart;
