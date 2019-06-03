import React, { useEffect, useState, createElement, useRef } from "react";
import { Counter, loadCounter, clearCounter } from "../utils/localStorage";
import { QuestionArray } from "../constants";
import {
  List,
  ListItem,
  Divider,
  Button,
  Theme,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogActions
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  listItem: {
    textAlign: "center"
  }
}));

interface AdminProps {}
const Admin: React.FC<AdminProps> = props => {
  const classes = useStyles();

  const [counter, setCounter] = useState<Counter>({});
  const [dialogOpen, setDialogOpen] = useState(false);
  const closeDialog = () => {
    setDialogOpen(false);
  };

  const load = () => {
    setCounter(loadCounter());
  };

  useEffect(() => {
    load();
  }, []);

  const resetHandlar = () => {
    clearCounter();
    load();
  };

  const exportCsv = () => {
    const head = QuestionArray.join(",");
    const values = Object.keys(counter).map(key => {
      return counter[key];
    });
    const valueJoin = values.join(",");
    console.log(head);
    console.log(valueJoin);

    const csv = `${head}\n${valueJoin}`;
    const blob = new Blob([csv], { type: "text/csv" });
    // setDownloadUrl(URL.createObjectURL(blob));

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "result.csv";
    link.click();
  };

  return (
    <>
      <h1>集計情報</h1>
      <List>
        {QuestionArray.map((question, index) => (
          <ListItem key={index} className={classes.listItem}>
            <ListItemText
              primary={`${question} : ${counter ? counter[index] : "undefine"}`}
            />
          </ListItem>
        ))}
      </List>

      <Button
        variant="contained"
        onClick={() => {
          setDialogOpen(true);
        }}
      >
        データのリセット
      </Button>
      <Dialog open={dialogOpen} onClose={closeDialog}>
        <DialogTitle>本当にリセットしますか？</DialogTitle>
        <DialogActions>
          <Button onClick={closeDialog}>キャンセル</Button>
          <Button
            onClick={() => {
              resetHandlar();
              closeDialog();
            }}
          >
            データのリセット
          </Button>
        </DialogActions>
      </Dialog>
      <Button variant="contained" onClick={exportCsv}>
        CSVデータの出力
      </Button>
    </>
  );
};

export default Admin;
