
'use static';

import express, { static } from "express";
import { resolve } from "path";
import { readFile } from "fs";

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  const filePath = resolve(__dirname, "./build", "index.html");
  readFile(filePath, "utf8", (err, data) => {
    if (err) console.log(err);

    data = data
      .replace(/__TITLE__/g, "Home Page")
      .replace(/__DESCRIPTION__/g, "Home page description.");

    res.send(data);
  });
})

app.use(static(resolve(__dirname, "./build")));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})