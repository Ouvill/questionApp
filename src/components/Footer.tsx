import React from "react";
import { Button, Theme } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { blueGrey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: blueGrey[400],
    color: "#FFFFFF"
  }
}));

interface FooterProps {}
const Footer: React.FC<FooterProps> = props => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Button fullWidth color="inherit" component={Link} to="/">
        TOP
      </Button>
    </footer>
  );
};

export default Footer;
