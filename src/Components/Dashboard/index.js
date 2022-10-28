import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Avatar,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Divider
} from '@mui/material';

import styles from './Dashboard.module.css';

import { Icon } from '@iconify/react';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PaymentsIcon from '@mui/icons-material/Payments';

// import dashboard from '../../assets/dashboard.svg';
import dashboard from '../../assets/dashboard.png';

import Moment from 'moment';

import { useNavigate } from 'react-router-dom';

// import count up from count up library
import CountUp from 'react-countup';
import ChartOne from './Charts/ChartOne/ChartOne';
import ChartTwo from './Charts/ChartTwo/ChartTwo';
import ChartThree from './Charts/ChartThree/ChartThree';



const Dashboard = () => {

  const date = Moment().format("Do MMM YYYY");

  const weekday = Moment().format("dddd");

  const navigate = useNavigate();

  return (
    <>
      <Box>
        <Box className={styles.header}>
          <Typography className={styles.heading} variant='h5'>
            <Avatar variant="rounded" className={styles.avatar}>
              <Icon icon="ic:sharp-dashboard-customize" className={styles.dashboardIcon} />
            </Avatar>
            Dashboard
          </Typography>
          <Typography sx={{ fontWeight: "bold" }} color="secondary" variant='h6'>
            {date}, {weekday}
          </Typography>
        </Box>

        <Box mt={3}>
          <Card className={styles.welcomeCard}>
            <div className={styles.display}>
              <CardContent className={styles.cardContent}>
                <Typography className={styles.welcomeText} variant='h5'>
                  Welcome!
                </Typography>
                <Typography variant='subtitle1'>
                  Get familiar with the dashboard, here are some ways to get started.
                </Typography>
              </CardContent>
              <CardMedia
                className={styles.welcomeImage}
                component="img"
                image={dashboard}
                alt="dashboard"
              />
            </div>
          </Card>
        </Box>

        <Box mt={3}>
          <Grid container spacing={2}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Card className={styles.cardOne} elevation={3}>
                <CardActionArea>
                  <CardContent>
                    <Typography className={styles.cardHeading} variant='h5'>
                      <Avatar className={styles.incomeAvatar}>
                        <AccountBalanceWalletIcon />
                      </Avatar>
                      Total Income
                    </Typography>
                    <Typography className={styles.cardNumber} variant='h3'>
                      <Icon icon="fa-solid:rupee-sign" className={styles.icon} /><CountUp end={597000} />
                    </Typography>
                    <Typography className={styles.cardNumber} variant='h5'>
                      Saved 25%
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <Divider />
              </Card>
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Card className={styles.cardTwo} elevation={3}>
                <CardActionArea>
                  <CardContent>
                    <Typography className={styles.cardHeading} variant='h5'>
                      <Avatar className={styles.expensesAvatar}>
                        <Icon icon="uil:transaction" />
                      </Avatar>
                      Total Expenses
                    </Typography>
                    <Typography className={styles.cardNumber} variant='h3'>
                      <Icon icon="fa-solid:rupee-sign" className={styles.icon} /><CountUp end={79000} />
                    </Typography>
                    <Typography className={styles.cardNumber} variant='h5'>
                      Saved 25%
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <Divider />
              </Card>
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Card className={styles.cardThree} elevation={3}>
                <CardActionArea>
                  <CardContent>
                    <Typography className={styles.cardHeading} variant='h5'>
                      <Avatar className={styles.cashAvatar}>
                        <CurrencyRupeeIcon />
                      </Avatar>
                      Cash on Hand
                    </Typography>
                    <Typography className={styles.cardNumber} variant='h3'>
                      <Icon icon="fa-solid:rupee-sign" className={styles.icon} /><CountUp end={92000} />
                    </Typography>
                    <Typography className={styles.cardNumber} variant='h5'>
                      Saved 25%
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <Divider />
              </Card>
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Card className={styles.cardFour} elevation={3}>
                <CardActionArea>
                  <CardContent>
                    <Typography className={styles.cardHeading} variant='h5'>
                      <Avatar className={styles.profitAvatar}>
                        <Icon icon="game-icons:profit" />
                      </Avatar>
                      Net Profit Margin
                    </Typography>
                    <Typography className={styles.cardNumber} variant='h3'>
                      <Icon icon="fa-solid:rupee-sign" className={styles.icon} /><CountUp end={179000} />
                    </Typography>
                    <Typography className={styles.cardNumber} variant='h5'>
                      Saved 65%
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <Divider />
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Grid container spacing={2}>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <ChartOne />
          </Grid>
          <Grid item lg={3} md={6} sm={12} xs={12}>
            <ChartTwo />
          </Grid>
          <Grid item lg={3} md={6} sm={12} xs={12}>
            <ChartThree />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Dashboard;