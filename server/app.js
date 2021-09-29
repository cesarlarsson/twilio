import express from "express";
// import axios from "axios";

const app = express();

/*app.get(
  [
    // ignore; endpoint for easily viewing the default server
    // response on CodeSandbox
    "/"
  ],
  (req, res) => {
    res.status(200).json({ test: "hello world!" });
  }
);*/

app.get("/api/users/:username", async (req, res) => {
  // your code here!
console.log(res)

});

export default app;
