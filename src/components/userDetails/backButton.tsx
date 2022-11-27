import React from 'react';
import { Link, Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const BackButton = () => {
  return (
    <Link href={`/users/`} variant='button'>
      <Button
        color='primary'
        variant='contained'
        startIcon={<KeyboardArrowLeftIcon />}
      >
        Back
      </Button>
    </Link>
  );
};

export default BackButton;
