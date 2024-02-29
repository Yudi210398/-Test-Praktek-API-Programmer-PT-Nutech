import { body } from "express-validator";

import express from "express";
import { postUser } from "../controller/membership.js";

const routerMembership = express.Router();

routerMembership.post(
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
      .withMessage("Paramter first name harus diisi")
      .trim(),

    body("last_name")
      .notEmpty()
      .withMessage("Paramter last name harus diisi")
      .trim(),

    body("password")
      .isLength({ min: 8 })
      .withMessage("Panjang Password minimal 8 karakter")
      .trim(),
  ],
  postUser,
);

export default routerMembership;
