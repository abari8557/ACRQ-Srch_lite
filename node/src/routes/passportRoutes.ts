import express from "express";
import { passportController } from "../controllers/passportController";

 const passportRouter = express.Router();

passportRouter
  .route("/")
  .get(passportController.getAllPassports)
  .post(passportController.createPassport);

passportRouter
  .route("/:id")
  .get(passportController.getOnePassport)
  .patch(passportController.updatePassport)
  .delete(passportController.deletePassport);

export default passportRouter;
