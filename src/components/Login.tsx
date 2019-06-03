import React, { useState } from "react";
import Admin from "./Admin";
import { Typography, TextField, Button, Theme } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    // margin: theme.spacing(2)
  }
}));

const Login = () => {
  const classes = useStyles();

  const correctPassword = "password";
  const [auth, setAuth] = useState(false);
  const [password, setPassword] = useState("");

  const checkPassword = () => {
    if (correctPassword === password) {
      setAuth(true);
    }
  };

  return (
    <div>
      {auth ? (
        <Admin />
      ) : (
        <form
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <TextField
            label="パスワード"
            type="password"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
            fullWidth
            margin="normal"
          />
          <div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={checkPassword}
            >
              ログイン
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
