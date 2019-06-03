import React from "react";
import { Button, makeStyles, Theme, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100%"
  },
  item: {
    margin: theme.spacing(2)
  }
}));

export const Root: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item className={classes.item}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/admin"
        >
          管理画面
        </Button>
      </Grid>
      <Grid item className={classes.item}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to={"/question"}
        >
          アンケート画面
        </Button>
      </Grid>
    </Grid>
  );
};
