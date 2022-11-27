import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import ClearIcon from '@mui/icons-material/Clear';
import { Typography, Box, Link } from '@mui/material';
import { iconPositioned, iconPositionedNoData } from '../../styles/userRepos';

const UserRepos = ({ repos }: any) => {
  return (
    <Box>
      <Typography component='div' variant='h6'>
        <GitHubIcon sx={iconPositioned} /> User Repos
      </Typography>
      {repos.length ? (
        repos.map((repo: any, key: number) => {
          return (
            <Typography key={key} variant='body2' color='primary' component='p'>
              <Link href={repo.url} color='inherit'>
                {repo.name}
              </Link>
            </Typography>
          );
        })
      ) : (
        <Typography variant='body2' color='text.primary' component='p'>
          <ClearIcon sx={iconPositionedNoData} /> No repos to display
        </Typography>
      )}
    </Box>
  );
};

export default UserRepos;
