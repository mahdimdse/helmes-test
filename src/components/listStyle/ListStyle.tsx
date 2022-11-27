import React from 'react';
import { CardContent, Card, Typography, CardMedia, Grid, Link } from '@mui/material';
import logoSquare from '../../assets/logo-square.png';
import UserRepos from '../userDetails/UserRepos';
import NoUsers from '../noUsers/NoUsers';
import NameContainer from '../userDetails/NameContainer';

const ListStyle = (props: any) => {
  const { users }: any = props;
  return users.length ? (
    users.map((user: any, key: number) => {
      return (
        <Grid key={key} item xs={12} marginTop={'10px'}>
          <Card sx={{ display: 'flex' }}>
            <CardMedia
              component='img'
              sx={{ width: 150 }}
              image={logoSquare}
              alt={user.firstName}
            />
            <CardContent sx={{ width: '100%' }}>
              <Grid container spacing={2} width={'100%'}>
                <Grid item xs={7}>
                  <NameContainer user={user} textOrientation = {'left'} />
                </Grid>
                <Grid item xs={5}>
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

export default ListStyle;
