const express = require("express");
const requestRouter = require("./request/requestRouter");
const dictionaryRouter = require("./dictionary/dictionaryRouter");

const app = express();

app.use(express.json());

app.use("/reg_service/api/v1", requestRouter);
app.use("/reg_service/api/v1", dictionaryRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server started on PORT: ${PORT}`);
});
