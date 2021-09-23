import React, { useState, useEffect } from "react";
import "../../App.css";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  AppBar,
  Drawer,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { SideBar } from "../Sidebar/Sidebar";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import bloodlogo from "../../assets/logos/bloodtracker.png";
import { useHistory, useLocation } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { Self_self } from "../../api/__generated__/Self";
import { LOGIN } from "../../api/mutations";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export interface HeaderProps {
  user?: Self_self;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: "#cc3434",
      minHeight: "65px",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      fontFamily: 'Ubuntu',
      flexGrow: 1,
      marginRight: "200px",
    },
    inputRoot: {
      color: "inherit",
    },
    userInformation: {
      display: "flex",
      marginLeft: "20px",
    },
    flexEnd: {
      justifyContent: "flex-end",
      alignItems: "center",
      display: "flex",
    },
    check:{
      color: '#fff',
      '&:hover': {
        backgroundColor: '#fff',
        color: '#cc3434',
      }
    }
  })
);
export interface Login_login_patient {
  __typename: "Patient";
  id: string;
  name: string;
  gitHub: string;
  imageURI: string;
}

export interface Login_login {
  __typename: "LoginPayload";
  patient: Login_login_patient;
  jwt: string;
}

export interface Login {
  login: Login_login;
}

export interface LoginVariables {
  code: string;
}

const CLIENT_ID = "c42515358e300930ae80";
const REDIRECT_URI = "http://localhost:3000/home";


export const Header: React.FC<HeaderProps> = ({ user }) => {
  const history = useHistory()
  const classes = useStyles();
  const [sideBar, setSideBar] = useState(false);

  const query = useQuery();

  const toggleSideBar = () => {
    setSideBar(!sideBar);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
  }

  const [login] = useMutation<Login>(LOGIN);

  useEffect(() => {
    const loginMethod = async () => {
      const code = query.get("code");
      if (code != null) {
        try {
          const { data } = await login({ variables: { code } });
          if (data != null) {
            localStorage.setItem("token", data.login.jwt)
          }
        } catch (e) {
          console.log(e);
        }
        history.push('/home');
      }
    };
    loginMethod();
  }, []);


  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleSideBar}
          >
            <MenuIcon />
            <Drawer anchor="left" open={sideBar} onClose={toggleSideBar}>
              <SideBar user={user} />
            </Drawer>
          </IconButton>
          <IconButton href="/home">
            <img src={bloodlogo} id="bloodlogo" width="50px" alt="Bloodtracker Logo" />
          </IconButton>
          <Typography className={classes.title} variant="h5" noWrap>
            BloodTracker
          </Typography>
          {user == null ? (
            <Button
            className={classes.check}
              variant="outlined"
              color="inherit"
              href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}
            >
              Login
            </Button>
          ) : (
            <div className={classes.userInformation}>
              <Hidden smDown>
                <Button className={classes.check} color="inherit" variant="outlined" onClick={handleLogout} href="/home">Logout: {user.name}</Button>
              </Hidden>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
