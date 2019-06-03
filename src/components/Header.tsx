import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Theme
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
  link: {
    color: "inherit",
    textDecoration: "none"
  }
}));

interface HeaderProps {}
const Header: React.FC<HeaderProps> = props => {
  const classes = useStyles();

  return (
    <header>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            <Link to="/" className={classes.link}>
              アンケート
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
