import React from 'react';
import { Divider, Link, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { HeaderProps } from '../Header/Header';

const useStyles = makeStyles({
  list: {
    width: 250,
    height: '100vh',
    backgroundColor:"#cc3434",
  },
  listText: {
    color: "floralwhite",
  },
  fullList: {
    width: 'auto',
  },
  divider:{
    backgroundColor: 'floralwhite'
  },
});

const CLIENT_ID = "c42515358e300930ae80";
const REDIRECT_URI = "https://bloodtracker.azurewebsites.net/home";

export const SideBar: React.FC<HeaderProps> = ({ user }) => {
  const classes = useStyles();
  const handleLogout = () => {
    localStorage.removeItem("token");
  }
  return (
    <div className={classes.list}>
      <List>
        <ListItem button href="/" component={Link}>
          <ListItemIcon><HomeIcon className={classes.listText} /></ListItemIcon>
          <ListItemText className={classes.listText} primary="Home" />
        </ListItem>
        
        <ListItem button href="/addbloodtest" component={Link}>
          <ListItemIcon><ArrowUpwardIcon className={classes.listText} /></ListItemIcon>
          <ListItemText className={classes.listText} primary="Add Bloodtest" />
        </ListItem>
      </List>
      <Divider className={classes.divider} />
      <List>
        {user ?
          <ListItem button href="/home" component={Link} onClick={handleLogout}>
            <ListItemIcon><ExitToAppIcon className={classes.listText} /></ListItemIcon>
            <ListItemText className={classes.listText} primary="Logout" />
          </ListItem> :
          <ListItem button href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`} component={Link}>
            <ListItemIcon><AddBoxIcon className={classes.listText} /></ListItemIcon>
            <ListItemText className={classes.listText} primary="Login" />
          </ListItem>

        }
      </List>
    </div>
  )
}
