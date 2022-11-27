import React from 'react';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ClearIcon from '@mui/icons-material/Clear';
import { Typography, Box, Link } from '@mui/material';
import { iconPositioned, iconPositionedNoData } from '../../styles/userRepos';

const UserOrganizations = ({ organizations }: any) => {
  return (
    <Box sx={{mt: 4}}>
      <Typography component='div' variant='h6'>
        <ApartmentIcon sx={iconPositioned} /> User Organizations
      </Typography>
      {organizations.length ? (
        organizations.map((org: any, key: number) => {
          return (
            <Typography key={key} variant='body2' color='primary' component='p'>
              <Link href={org.url} color='inherit'>
                {org.name}
              </Link>
            </Typography>
          );
        })
      ) : (
        <Typography variant='body2' color='text.primary' component='p'>
          <ClearIcon sx={iconPositionedNoData} /> No organizations to display
        </Typography>
      )}
    </Box>
  );
};

export default UserOrganizations;
