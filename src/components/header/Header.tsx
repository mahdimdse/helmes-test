import React from 'react';
import { Link, Toolbar, AppBar } from '@mui/material';
import logo from '../../assets/logo.png';
import { headerSx, toolbarSx } from '../../styles/header';
import './styles.css';

const Header = () => {
  return (
    <Link href={'/users'}>
      <AppBar position='relative' color='transparent' sx={headerSx}>
        <Toolbar sx={toolbarSx}>
          <img className='company-logo' src={logo} />
        </Toolbar>
      </AppBar>
    </Link>
  );
};

export default Header;
