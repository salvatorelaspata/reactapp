import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
//ICON
import AppsIcon from '@material-ui/icons/Apps';
import MeetingRoomOutlinedIcon from '@material-ui/icons/MeetingRoomOutlined';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
function DrawerComponent(listMenu, classes) {
   return (
      <div>
         <div className={classes.toolbar} />
         <Divider />
         <List>
            {listMenu.map(({ id, title, path }) => (
               <ListItem
                  key={id}
                  component={Link}
                  to={'/' + path}
                  //selected={true}
               >
                  <ListItemIcon>
                     {id === 1 ? (
                        <AppsIcon />
                     ) : id === 2 ? (
                        <MeetingRoomOutlinedIcon />
                     ) : (
                        <LiveHelpIcon />
                     )}
                  </ListItemIcon>
                  <ListItemText primary={title} />
               </ListItem>
            ))}
         </List>
      </div>
   );
}
export default DrawerComponent;
