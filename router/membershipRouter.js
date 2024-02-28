import { body } from "express-validator";

import express from "express";
import { getProfile, postUser } from "../controller/membership.js";

const routerMembership = express.Router();

routerMembership.get(
  "/registration",
  [
    body("email")
      .notEmpty()
      .isEmail()
      .normalizeEmail()
      .withMessage("Paramter email tidak sesuai format")
      .toLowerCase()
      .trim(),
    body("first_name")
      .notEmpty()
      .withMessage("Paramter email tidak sesuai format")
      .toLowerCase()
      .trim(),
  ],
  postUser
);

export default routerMembership;
