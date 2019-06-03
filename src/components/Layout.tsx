import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import Header from "./Header";
import Footer from "./Footer";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
    width: "100%",
    height: "auto",
    minHeight: "100vh"
  }
}));

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
