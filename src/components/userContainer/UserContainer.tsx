import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Box, Grid } from '@mui/material';
import { LIST_VIEW } from '../../constants/view';
import { users, userType } from '../../data/users';
import ListStyle from '../listStyle/ListStyle';
import GridStyle from '../gridStyle/GridStyle';

interface StoreProps {
  viewType: string;
  searchStr: string;
}

const UserContainer = (props: StoreProps) => {
  const { viewType, searchStr } = props;
  const [filteredUsers, setFilteredUsers] = useState<userType[]>(users || []);

  const getUsers = () => {
    setFilteredUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    if (users.length) {
      const newUser = users.filter((user) => {
        const fName = user.firstName ? user.firstName.toLowerCase() : '';
        const lName = user.lastName ? user.lastName.toLowerCase() : '';
        const uType = user.userType ? user.userType.toLowerCase() : '';
        const repos = user.repositories
          ? JSON.stringify(user.repositories).toLowerCase()
          : '';
        const orgs = user.organizations
          ? JSON.stringify(user.organizations).toLowerCase()
          : '';
        const str = searchStr.toLowerCase();
        return (
          fName.includes(str) ||
          lName.includes(str) ||
          uType.includes(str) ||
          orgs.includes(str) ||
          repos.includes(str)
        );
      });
      setFilteredUsers(newUser);
    }
  }, [searchStr]);

  return (
    <Box component='div' sx={{}}>
      <Grid container spacing={2}>
        {viewType === LIST_VIEW.LIST ? (
          <ListStyle users={filteredUsers} />
        ) : (
          <GridStyle users={filteredUsers} />
        )}
      </Grid>
    </Box>
  );
};

const mapStateToProps = (state: any) => {
  return {
    viewType: state.viewReducer.viewType,
    searchStr: state.searchReducer.lastSearchStr,
  };
};
export default connect(mapStateToProps)(UserContainer);
