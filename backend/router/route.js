import { Router } from "express";
import multer from "multer";
import {
  registerUser,
  updateUser,
  getAllPdf,
  addPdf,
  deleteResume,
  getHtmlOutput,
  uploadimage
} from "../controller/userController.js";

const router = Router();
const upload = multer({ dest: "uploads/" }); // Temporary upload path

router.route("/register").post(upload.none(), registerUser);
router.route("/updateuser").post(upload.none(),updateUser);
router.route("/getallresume").post(upload.none(),getAllPdf);
router.route("/addresume").post(upload.single("pdf"), addPdf); // Handle file upload
router.route("/deleteresume").post(upload.none(),deleteResume);
router.route("/gethtmloutput").post(upload.none(),getHtmlOutput);
router.route('/uploadimage').post(upload.single('image'), uploadimage)

export default router;
