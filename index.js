import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import routerMembership from "./router/membershipRouter.js";
import dotenv from "dotenv";
import { conekDb } from "./init/configurasiMongo.js";

const app = express();
dotenv.config();

(async () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cors());

  app.use(routerMembership);

  conekDb().then(() => {
    app.listen(3001);
  });
})();
