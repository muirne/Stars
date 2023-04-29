import express from "express";
import { Application, Request, Response, NextFunction } from 'express';
import bodyParser from "body-parser";

class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

}
export default new App().app;

// import express from "express";

// const app = express();

// app.listen(3000, function() {
//   console.log("server start running");
// });

// export default app;