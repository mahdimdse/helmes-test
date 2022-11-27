import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { store } from '../../store';
import { Box, Stack, Chip, Select, MenuItem } from '@mui/material';
import { boxSx, selectSx, stackSx, emptyBox } from '../../styles/lastSearches';
import { pushSearch, makeSearch } from '../../store/actions/searchAction';

interface StoreProps {
  lastSearchStr: string;
  lastSearches: string[];
}

const LastSearches = (props: StoreProps) => {
  const { lastSearches } = props;
  const [searchNumber, setSearchNumber] = useState(0);

  const handleChange = (e: any) => {
    if (e.target.value) {
      setSearchNumber(e.target.value);
    } else {
      setSearchNumber(0);
    }
  };

  const handleClick = (searchStr: string) => {
    const searchField = (document.getElementById('search-value') as HTMLInputElement);
    searchField.focus();
    store.dispatch(pushSearch(searchStr));
    store.dispatch(makeSearch(searchStr));
  };

  useEffect(()=>{
    setSearchNumber(lastSearches.length);
  }, [lastSearches])

  return lastSearches.length ? (
    <Box component='div' sx={boxSx}>
      <div>
        Last
        <Select
          value={searchNumber || lastSearches.length}
          variant='standard'
          onChange={handleChange}
          sx={selectSx}
        >
          {lastSearches.map((singleSearch, key) => {
            return (
              <MenuItem key={singleSearch + key} value={key + 1}>
                {key + 1}
              </MenuItem>
            );
          })}
        </Select>
        search{searchNumber > 1 ? 'es' : ''}
      </div>
      <Stack direction='row' sx={stackSx} spacing={2}>
        {lastSearches
          .map((singleSearch, key) => {
            return (
              <Chip
                key={key}
                label={singleSearch}
                onClick={() => {
                  handleClick(singleSearch);
                }}
              />
            );
          })
          .reverse()
          .slice(0, searchNumber || lastSearches.length)}
      </Stack>
    </Box>
  ) : (
    <Box component='div' sx={emptyBox}></Box>
  );
};

const mapStateToProps = (state: any) => {
  return {
    lastSearchStr: state.searchReducer.lastSearchStr,
    lastSearches: state.searchReducer.lastSearches,
  };
};
export default connect(mapStateToProps)(LastSearches);
