import { Button, Paper, Typography } from '@mui/material';
import React from 'react';

const DashboardCardWidget = ({
  number,
  label,
  icon,
  buttonText = 'Yay!',
  buttonColor = 'green',
}) => (
  <Paper>
    <Typography>{number}</Typography>
    <Typography>{label}</Typography>
    <Button>{buttonText}</Button>
  </Paper>
);

export default DashboardCardWidget;
