import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import gradientStyle from './gradientStyle';

const DashboardSectionContainer = ({ title, buttonText, children }) => (
  <Card>
    <CardContent
      sx={Object.assign(gradientStyle, {
        borderRadius: '8px',
      })}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant='h5' gutterBottom sx={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Button>{buttonText}</Button>
      </Box>
      {children}
    </CardContent>
  </Card>
);

export default DashboardSectionContainer;
