import axios from "axios";
import express from "express";
import curlirize from "axios-curlirize";

const app = express();

curlirize(axios);

app.post("/", (req, res) => {
  res.send({ hello: "world!" });
});

app.listen(7500, () => {
  console.log("Dummy server started on port 7500");
  axios
    .post("http://localhost:7500/", { dummy: "data" })
    .then(res => {
      console.log("success", res.data);
    })
    .catch(err => {
      console.log(err);
    });
});
