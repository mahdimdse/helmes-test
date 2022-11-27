import React from 'react';
import { connect } from 'react-redux';
import { store } from '../../store';
import { Box, Grid, IconButton, ButtonGroup, Typography } from '@mui/material';
import ListIcon from '@mui/icons-material/List';
import GridViewIcon from '@mui/icons-material/GridView';
import { boxSx, containerSx } from '../../styles/listTitleView';
import { setView } from '../../store/actions/viewActions';
import { LIST_VIEW } from '../../constants/view';
import { COOKIES } from '../../constants/cookies';
import { readCookie } from '../../utils';

interface StoreProps {
  viewType: string;
}

const ListTitleView = (props: StoreProps) => {
  const { viewType } = props;

  const setViewType = () => {
    const viewTypeCookie = readCookie(COOKIES.VIEW);
    if(viewTypeCookie){
      store.dispatch(setView(viewTypeCookie));
    }
    else {
      store.dispatch(setView(viewType));
    }
  }
  
  setViewType();

  const viewHandler = (viewtype: string) => {
    store.dispatch(setView(viewtype));
  };

  return (
    <Box component='div' sx={boxSx}>
      <Grid container spacing={2} sx={containerSx}>
        <Grid item xs={8}>
          <Typography component='div' variant='h5'>
            Github most popular users
          </Typography>
        </Grid>
        <Grid item xs={4} textAlign='right'>
          <ButtonGroup variant='outlined' aria-label='outlined button group'>
            <IconButton
              aria-label='listview'
              color={viewType === LIST_VIEW.LIST ? 'primary' : 'default'}
              onClick={() => {
                viewHandler(LIST_VIEW.LIST);
              }}
            >
              <ListIcon />
            </IconButton>
            <IconButton
              aria-label='gridview'
              color={viewType === LIST_VIEW.TILE ? 'primary' : 'default'}
              onClick={() => {
                viewHandler(LIST_VIEW.TILE);
              }}
            >
              <GridViewIcon />
            </IconButton>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Box>
  );
};

const mapStateToProps = (state: any) => {
  return {
    viewType: state.viewReducer.viewType,
  };
};
export default connect(mapStateToProps)(ListTitleView);
