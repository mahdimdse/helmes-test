import React from 'react';
import { Typography, Box } from '@mui/material';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import { noUserSx } from '../../styles/utils';

const NoUsers = () => {
  return (
    <Box sx={noUserSx}>
      <SentimentDissatisfiedIcon fontSize='large' color='primary' />
      <Typography variant='h6' color='text.secondary' component='div'>
        No Users Found
      </Typography>
    </Box>
  );
};

export default NoUsers;
