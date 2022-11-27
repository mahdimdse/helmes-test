import React from 'react';
import SearchBar from '../searchBar';
import LastSearches from '../lastSearches';
import ListTitleView from '../listTitleView';
import UserContainer from '../userContainer';

const UserList = () => {
  return (
    <>
      <SearchBar />
      <LastSearches />
      <ListTitleView />
      <UserContainer />
    </>
  );
};

export default UserList;
