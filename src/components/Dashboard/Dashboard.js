import React from 'react';
import { Unstable_Grid2 as Grid } from '@mui/material';
import DashboardSectionContainer from '../DashboardSectionContainer/DashboardSectionContainer';

const Dashboard = () => (
  <Grid container spacing={2} sx={{minHeight: '100vh'}}>
    <Grid xs={4}>
      <DashboardSectionContainer title='Attack Surface' buttonText='View Attack Surface'>
        <div>hey</div>
        <div>there</div>
        <div>sup</div>
      </DashboardSectionContainer>
    </Grid>
    <Grid xs={4}>
      <DashboardSectionContainer title='Origins' buttonText='View Network Overview'>
        <div>hey</div>
        <div>there</div>
        <div>sup</div>
      </DashboardSectionContainer>
    </Grid>
    <Grid xs={4}>
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
