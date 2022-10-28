import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography
} from '@mui/material';

import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
    },
};

const labels = ['Jan 01', "Jan 03", "Jan 05", "Jan 07", "Jan 09", "Jan 11"];

const data = {
    labels,
    datasets: [
        {
            type: 'line',
            label: 'AP',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
            fill: false,
            data: [50, 54, 74, 63, 70, 76, 63, 70, 76, 63, 70, 76],
        },
        {
            type: 'bar',
            label: 'AR',
            backgroundColor: 'rgb(75, 192, 192)',
            data: [67, 54, 80, 81, 56, 55, 40, 30, 20, 10, 75, 14],
            borderColor: 'white',
            borderWidth: 2,
        },
    ],
};

function ChartOne() {
    return (
        <>
            <Box mt={3}>
                <Card style={{ backgroundColor: "#f9faff" }}>
                    <CardContent>
                        <Typography mb={5} variant='h5'>
                            AP and AR Balance
                        </Typography>

                        <Chart type='bar' data={data} options={options} />
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}

export default ChartOne;