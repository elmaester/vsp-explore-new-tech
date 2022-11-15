import React from 'react';
import { Unstable_Grid2 as Grid } from '@mui/material';
import DashboardSectionContainer from '../DashboardSectionContainer/DashboardSectionContainer';
import DashboardCardWidget from '../DashboardCardWidget/DashboardCardWidget';

const Dashboard = () => (
  <Grid container spacing={2} sx={{ minHeight: '100vh' }}>
    <Grid xs={6}>
      <DashboardSectionContainer
        title='Attack Surface'
        buttonText='View Attack Surface'
      >
        <Grid container spacing={2}>
          <Grid xs={4}>
            <DashboardCardWidget number={1000} label='Subdomains' />
          </Grid>
          <Grid xs={4}>
            <DashboardCardWidget number={10000} label='Devices' />
          </Grid>
          <Grid xs={4}>
            <DashboardCardWidget number={100} label='Personal Devices' />
          </Grid>
        </Grid>
      </DashboardSectionContainer>
    </Grid>
    <Grid xs={3}>
      <DashboardSectionContainer
        title='Origins'
        buttonText='View Network Overview'
      >
        <div>hey</div>
        <div>there</div>
        <div>sup</div>
      </DashboardSectionContainer>
    </Grid>
    <Grid xs={3}>
      <DashboardSectionContainer
        title='Remediation Progression'
        buttonText='View Solutions'
      >
        <div>hey</div>
        <div>there</div>
        <div>sup</div>
      </DashboardSectionContainer>
    </Grid>
  </Grid>
);

export default Dashboard;
