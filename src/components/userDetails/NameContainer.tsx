import React from 'react';
import { Link, Box, Typography } from '@mui/material';
import { userType } from '../../data/users';


const NameContainer = (props:any) => {
  const{ user, textOrientation} = props;
  
  return (
    <Box sx={{textAlign: textOrientation}}>
      <Typography component='div' variant='h5'>
        <Link href={`/users/${user.id}`} color='primary'>
          {user.firstName ? user.firstName : ''}{' '}
          {user.lastName ? user.lastName : ''}
        </Link>
      </Typography>
      <Typography variant='subtitle1' color='text.secondary' component='div'>
        {user.userType}
      </Typography>
    </Box>
  );
};

export default NameContainer;
