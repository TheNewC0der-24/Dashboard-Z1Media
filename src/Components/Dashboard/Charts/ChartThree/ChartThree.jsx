import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Button
} from '@mui/material';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
    },
};

const data = {
    labels: ['Balance : 31,430', 'Total'],
    datasets: [
        {
            data: [48, 100],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

function ChartThree() {
    return (
        <>
            <Box mt={3}>
                <Card style={{ backgroundColor: "#f9faff" }}>
                    <CardContent>
                        <Typography mb={5} variant='h5'>
                            % of Expenses Budget
                        </Typography>

                        <Doughnut data={data} options={options} />
                        <Box mt={2}>
                            <Button fullWidth>View Full Report</Button>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}

export default ChartThree;