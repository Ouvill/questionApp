import React, { useEffect, useState, createElement, useRef } from "react";
import { Counter, loadCounter, clearCounter } from "../utils/localStorage";
import { QuestionArray } from "../constants";
import { List, ListItem, Divider, Button } from "@material-ui/core";

interface AdminProps {}
const Admin: React.FC<AdminProps> = props => {
  const [counter, setCounter] = useState<Counter>({});
  const [downloadUrl, setDownloadUrl] = useState("");

  const aRef = useRef<HTMLAnchorElement>(null);

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
          <ListItem key={index}>
            {question} : {counter ? counter[index] : "undefined"}
          </ListItem>
        ))}
      </List>

      <Button variant="contained" onClick={resetHandlar}>
        データのリセット
      </Button>
      <Button variant="contained" onClick={exportCsv}>
        CSVデータの出力
      </Button>
    </>
  );
};

export default Admin;
