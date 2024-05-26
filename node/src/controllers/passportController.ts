import { Request, Response } from "express";
import Passport from "../models/passportModelv2";

const getAllPassports = async (
  req: Request,
  res: Response,
  next: Function
) => {
  try {
    const passports = await Passport.find();
    res.status(200).json({
      status: "success",
      results: passports.length,
      data: {
        passports,
      },
    });
  } catch (error) {
    res.status(500).json({ status: "fail" });
  }
};

const getOnePassport = async (
  req: Request,
  res: Response,
  next: Function
) => {
  try {
    const passport = await Passport.findById({ _id: req.params.id });
    res.status(200).json({
      status: "success",
      data: {
        passport,
      },
    });
  } catch (error) {
    res.status(500).json({ status: "fail" });
  }
};

const createPassport = async (
  req: Request,
  res: Response,
  next: Function
) => {
  try {
    const passport = await Passport.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        passport,
      },
    });
  } catch (error) {
    res.status(500).json({ status: "epic fail" });
  }
};

const updatePassport = async (
  req: Request,
  res: Response,
  next: Function
) => {
  try {
    const passport = await Passport.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({
      status: "success",
      data: {
        passport,
      },
    });
  } catch (error) {
    res.status(500).json({ status: "fail" });
  }
};

const deletePassport = async (
  req: Request,
  res: Response,
  next: Function
) => {
  try {
    const passport = await Passport.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({
      status: "success",
    });
  } catch (error) {
    res.status(500).json({ status: "fail" });
  }
};

export const passportController = {
  getAllPassports,
  getOnePassport,
  createPassport,
  updatePassport,
  deletePassport,
};


