import React from "react";
import { incrementCounter, initializeCounter } from "../utils/localStorage";
import { useEffect, useState } from "react";
import { QuestionArray } from "../constants";
import { Link } from "react-router-dom";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Theme,
  Typography,
  Divider
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  listItem: {
    textAlign: "center"
  },

  maxWidthHeight: {
    width: "100%",
    height: "100%"
  },

  center: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center"
  },

  button: {
    width: "auto"
  }
}));

const Question: React.FC = ({ children }) => {
  const classes = useStyles();

  const [thunk, setThunk] = useState(false);
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (thunk) {
      timer = setTimeout(() => {
        setThunk(false);
        console.log("timer run");
      }, 10000);
      console.log("setTimer");
    }
    return () => {
      console.log("clean up");
      clearTimeout(timer);
    };
  }, [thunk]);

  const thunksPageOn = () => {
    setThunk(true);
  };

  const handleClick = (id: number) => {
    setThunk(true);
    incrementCounter(id);
  };

  return (
    <div className={classes.maxWidthHeight}>
      {thunk ? (
        <>
          <div className={classes.center}>
            <Typography> 投票ありがとうございました</Typography>
            <div>
              <Button
                onClick={() => {
                  setThunk(false);
                }}
                variant="contained"
                color="primary"
                className={classes.button}
              >
                戻る
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div>
          <Typography variant="h6">質問</Typography>

          <List>
            <Divider />
            {QuestionArray.map((question, index) => (
              <div key={index}>
                <ListItem
                  button
                  onClick={() => {
                    handleClick(index);
                  }}
                  alignItems="center"
                  className={classes.listItem}
                >
                  <ListItemText primary={question} />
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
        </div>
      )}
    </div>
  );
};

export default Question;
