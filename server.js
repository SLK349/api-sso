const express = require("express");
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const authRouter = require("./router/authRoutes");
app.use("/api", authRouter);

const companyRouter = require("./router/companyRoutes");
app.use("/company", companyRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
});
