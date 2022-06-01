require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const app = express();

const quotesRoute = require("./routes/quotes.route");
const errorMiddleware = require("./middlewares/error");

const { NotFoundError } = require("./utils/errors");
const sequelize = require("./utils/database");

app.use(helmet());
app.use(cors());
app.use(express.json());
if (process.env.NODE_ENV == "development") {
    app.use(require("morgan")("dev"));
}

app.use("/quotes", quotesRoute);

app.use((req, res, next) => {
    next(new NotFoundError());
});

app.use(errorMiddleware);

sequelize
    .sync()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Listening on port ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.error(err);
    });
