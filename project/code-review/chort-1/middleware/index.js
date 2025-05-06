const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());

app.use(express.json());

app.post("/health-checkup", (req, res) => {
  const kidney = req.body.kidneyId;
  const response = schema.safeParse(kidney);

  res.send({
    response,
  });
});

app.listen(3000, () => console.log("server is working"));
