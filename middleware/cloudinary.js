/* eslint-disable no-undef */
import cloudinary from "cloudinary";
const dataFuncCloudinary = cloudinary.v2;
import dotenv from "dotenv";
dotenv.config();

// Konfigurasi Cloudinary
await dataFuncCloudinary.config({
  cloud_name: "dymv3cmhq",
  api_key: process?.env?.API_KEY_CLOUDINARY,
  api_secret: process?.env?.API_SECRET_CLOUDINARY,
});

export default dataFuncCloudinary;
