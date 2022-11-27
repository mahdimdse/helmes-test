import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import { Box, Stack, TextField, Button } from '@mui/material';
import { searchBarSx, boxSx } from '../../styles/searchBar';
import { store } from '../../store';
import { pushSearch, makeSearch } from '../../store/actions/searchAction';

interface StoreProps {
    lastSearchStr: string;
    lastSearches: string[];
  }

const SearchBar = (props: StoreProps) => {
    const { lastSearchStr } = props;
    const [loading, setLoading] = useState(false);
    const [searchString, setSearchString] = useState(lastSearchStr || '');

    const addSearchingHistory = (str:string) => {
        store.dispatch(pushSearch(str));
        store.dispatch(makeSearch(str));
      }

    const searchUser = () => {
        if(searchString.length){
            setLoading(true);
            addSearchingHistory(searchString);
            setTimeout(()=>{
                setLoading(false);
            }, 2000)
        }
        else {
            store.dispatch(makeSearch(''));
        }
    }

    const submitForm = (e:any) => {
        e.preventDefault();
        searchUser();
    }

    const changeHandler = (e:any) => {
        if(e.target.value){
            setSearchString(e.target.value)
        }
        else {
            setSearchString('');
            store.dispatch(makeSearch(''));
        }
    }

    useEffect(() => {
        const searchField = (document.getElementById('search-value') as HTMLInputElement);
        searchField.focus();
        searchField.value = lastSearchStr;
        setSearchString(lastSearchStr)
    }, [lastSearchStr]);

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={boxSx}
      onSubmit={submitForm}
    >
        <Stack direction="row" spacing={2}>
            <TextField id='search-value' label="Search user from GitHub" variant="standard" defaultValue={searchString} sx={searchBarSx} onChange={changeHandler}/>
            <Button variant="contained" endIcon={loading ? <HourglassBottomIcon /> : <SearchIcon />} disabled={loading} onClick={()=>{searchUser()}}>
                {
                    loading ? 'Finding' : 'Find'
                }
            </Button>
        </Stack>
    </Box>
  );
};

const mapStateToProps = (state: any) => {
    return {
      lastSearchStr: state.searchReducer.lastSearchStr,
      lastSearches: state.searchReducer.lastSearches,
    };
  };

export { SearchBar };
export default connect(mapStateToProps)(SearchBar);
