import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';
//custom component
import DrawerComponent from './components/DrawerComponent';
import AppBarComponent from './components/AppBarComponent';
//screen
import AvernaDesign from './screen/AvernaDesign';
import Home from './screen/Home';
import World from './screen/World';
//style
import './App.css';

function App(props) {
   const { container } = props;
   const classes = useStyles();

   const theme = useTheme();
   const [mobileOpen, setMobileOpen] = React.useState(false);

   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
   };

   const listMenu = [
      { id: 1, title: 'Home', path: 'home', render: <Home /> },
      {
         id: 2,
         title: 'Averna Design',
         path: 'averna-design',
         render: <AvernaDesign />,
      },
      {
         id: 3,
         title: 'World',
         path: 'world',
         render: <World />,
      },
   ];
   const drawer = DrawerComponent(listMenu, classes);

   const appBar = AppBarComponent(
      'salvatorelaspata.altervista.org >',
      handleDrawerToggle,
      classes
   );
   return (
      <div className={classes.root}>
         <CssBaseline />
         {appBar}
         <BrowserRouter>
            <nav className={classes.drawer} aria-label='mailbox folders'>
               {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
               <Hidden smUp implementation='css'>
                  <Drawer
                     container={container}
                     variant='temporary'
                     anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                     open={mobileOpen}
                     onClose={handleDrawerToggle}
                     classes={{
                        paper: classes.drawerPaper,
                     }}
                     ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                     }}
                  >
                     {drawer}
                  </Drawer>
               </Hidden>
               <Hidden xsDown implementation='css'>
                  <Drawer
                     classes={{
                        paper: classes.drawerPaper,
                     }}
                     variant='permanent'
                     open
                  >
                     {drawer}
                  </Drawer>
               </Hidden>
            </nav>

            <main className={classes.content}>
               <div className={classes.toolbar} />
               <Switch>
                  <Route exact path='/' render={() => <div>Home Page</div>} />
                  {listMenu.map(({ id, path, render }) => (
                     <Route
                        key={`route-${id}`}
                        path={`/${path}`}
                        render={() => render}
                     />
                  ))}
               </Switch>
            </main>
         </BrowserRouter>
      </div>
   );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
   },
   drawer: {
      [theme.breakpoints.up('sm')]: {
         width: drawerWidth,
         flexShrink: 0,
      },
   },
   appBar: {
      marginLeft: drawerWidth,
      [theme.breakpoints.up('sm')]: {
         width: `calc(100% - ${drawerWidth}px)`,
      },
   },
   menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
         display: 'none',
      },
   },
   toolbar: theme.mixins.toolbar,
   drawerPaper: {
      width: drawerWidth,
   },
   content: {
      flexGrow: 1,
      padding: theme.spacing(3),
   },
}));

App.propTypes = {
   /**
    * Injected by the documentation to work in an iframe.
    * You won't need it on your project.
    */
   container: PropTypes.instanceOf(
      typeof Element === 'undefined' ? Object : Element
   ),
};

export default App;
