const express = require("express");
const nunjucks = require("nunjucks");

const app = express();
app.set("view engine", "html");

const port = 80;

nunjucks.configure("views", {
  express: app,
  watch: true,
});

app.use(express.static(__dirname + "/public"));

const eventRouter = require("./routers/event");
const artRouter = require("./routers/art");
const policyRouter = require("./routers/policy");

app.use("/news", eventRouter);
app.use("/art", artRouter);
app.use("/", policyRouter);

app.get("/intro", (req, res) => {
  res.render("portfolio-details");
});

app.get("/notice", (req, res) => {
  res.render("notice");
});

app.listen(port, () => {
  console.log(`서버가 실행되었습니다. 접속주소 : http://localhost: ${port}`);
});
