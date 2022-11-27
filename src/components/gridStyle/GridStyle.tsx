import React from 'react';
import { CardContent, Card, CardMedia, Grid } from '@mui/material';
import logoSquare from '../../assets/logo-square.png';
import UserRepos from '../userDetails/UserRepos';
import NoUsers from '../noUsers/NoUsers';
import NameContainer from '../userDetails/NameContainer';

const GridStyle = (props: any) => {
  const { users }: any = props;
  return users.length ? (
    users.map((user: any, key: number) => {
      return (
        <Grid key={key} item xs={6} marginTop={'10px'}>
          <Card sx={{minHeight: 400}}>
            <CardMedia
              component='img'
              sx={{ width: 150, margin: '20px auto' }}
              image={logoSquare}
              alt={user.firstName}
            />
            <CardContent sx={{ width: '100%' }}>
              <Grid container spacing={2} width={'100%'}>
                <Grid item xs={12} textAlign='center'>
                  <NameContainer user = {user} textOrientation = {'center'} />
                </Grid>
                <Grid item xs={12}>
                  <UserRepos repos={user.repositories || []} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      );
    })
  ) : (
    <NoUsers />
  );
};

export default GridStyle;
