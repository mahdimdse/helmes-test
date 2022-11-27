import React, { useState } from 'react';
import { useParams } from 'react-router';
import {
  Box,
  Typography,
  CardMedia,
  Grid,
  Divider,
} from '@mui/material';
import { users } from '../../data/users';
import { useEffect } from 'react';

import { userType } from '../../data/users';
import BackButton from './backButton';
import logoSquare from '../../assets/logo-square.png';
import NameContainer from './NameContainer';
import UserRepos from './UserRepos';
import UserOrganizations from './UserOrganizations';

const UserDetails = () => {
  const params = useParams();
  const id: string | undefined = params.id;
  const [userInfo, setUserInfo] = useState<userType>();
  const getUserInfo = (id: string) => {
    return users.filter((user) => {
      return user.id === parseInt(id);
    });
  };
  useEffect(() => {
    if (id) {
      const user: userType[] = getUserInfo(id);
      if (user.length) {
        setUserInfo(user[0]);
      }
    }
  }, [id]);

  return (
    <Box component='div' sx={{ mt: '4em' }}>
      <BackButton />
      {userInfo ? (
        <Box>
          <Typography variant='h5' sx={{py: 1}}>
            {userInfo.userName}
          </Typography>
          <Divider />
          <Grid container spacing={2} sx={{py: 1}}>
            <Grid item xs={4}>
            <CardMedia
              component='img'
              sx={{ minWidth: '100%' }}
              image={logoSquare}
              alt={userInfo.userName}
            />
            </Grid>
            <Grid item xs={8}>
                <NameContainer user={userInfo} textOrientation={'left'} />
                <Box component={'div'} sx={{mt: 3}}></Box>
                <UserRepos repos={userInfo.repositories ? userInfo.repositories : []}/>
                <UserOrganizations organizations={userInfo.organizations ? userInfo.organizations : []} />
            </Grid>
          </Grid>
        </Box>
      ) : (
        ''
      )}
    </Box>
  );
};

export default UserDetails;
