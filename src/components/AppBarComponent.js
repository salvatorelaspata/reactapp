import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import { Toolbar, IconButton, Typography } from '@material-ui/core';

function AppBarComponent(title, handleDrawerToggle, classes) {
   return (
      <div>
         <AppBar position='fixed' className={classes.appBar}>
            <Toolbar>
               <IconButton
                  color='inherit'
                  aria-label='open drawer'
                  edge='start'
                  onClick={handleDrawerToggle}
                  className={classes.menuButton}
               >
                  <MenuIcon />
               </IconButton>
               <Typography variant='h6' noWrap>
                  {title}
               </Typography>
            </Toolbar>
         </AppBar>
      </div>
   );
}

export default AppBarComponent;
