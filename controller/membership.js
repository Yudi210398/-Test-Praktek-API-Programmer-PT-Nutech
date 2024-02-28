import { validationResult } from "express-validator";
import shemaMembership from "../model/shemaMembership.js";

//! belum selesai
export const getProfile = async (req, res, next) => {
  try {
    res.status(200).json({
      pesan: "bisa",
    });
  } catch (err) {
    next(err);
  }
};

export const postUser = async (req, res, next) => {
  try {
    const { email } = req.body;
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res
        .status(422)
        .json({ status: 102, message: error.array()[0 ?? 1]?.msg, data: null });
    }
    const userCreate = await new shemaMembership({ email });
    userCreate.save();
    res
      .status(200)
      .json({
        status: 102,
        message: "Registrasi berhasil silahkan login",
        data: null,
      });
  } catch (err) {
    next(err);
  }
};
