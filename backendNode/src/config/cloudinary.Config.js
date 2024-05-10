import { v2 as cloudinary } from "cloudinary";
import fileUpload from "express-fileupload";
import util from "util";
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_NAME,
  CLOUDINARY_API_SECRET,
} from "../config/config.js";
cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});
export const cloudinaryConfig = async function (app) {
  try {
    app.use(
      fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
      })
    );
    console.log("Cloudinary Config - Success");
  } catch (error) {
    console.log("Cloudinary Config - Error");
  }
};

const uploader = util.promisify(cloudinary.uploader.upload);
export async function uploaderFunction(img_path) {
  return (await uploader(img_path)).public_id;
}

export function get_URL_Img(data) {
  return ` https://res.cloudinary.com/${CLOUDINARY_NAME}/image/upload/${data.img_id}.jpg`;
}
