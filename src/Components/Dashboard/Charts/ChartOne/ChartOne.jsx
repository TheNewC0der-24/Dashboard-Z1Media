import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography
} from '@mui/material';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },

        // title: {
        //     display: true,
        //     text: 'Chart.js Line Chart',
        // },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const data = {
    labels,
    datasets: [
        {
            label: 'Avg 5,309',
            data: [65, 0, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56],
            borderColor: '#4d4cac',
            backgroundColor: 'rgba(90, 90, 178, 0.5)',
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

                        <Line options={options} data={data} />
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}

export default ChartOne;