import mongoose, { Document, Schema } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
interface IPassport extends Document {
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  date_of_birth: Date;
  passport_number: string;
  address: {
    city: string;
    state: string;
    country: string;
  };
}

// 2. Create a Mongoose schema for the User model.
const passportSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      trim: true,
    },
    gender: {
      type: String,
      required: [true, "Please enter your gender"],
    },
    date_of_birth: {
      type: Date,
      required: [true, "Please enter your date of birth"],
      format: "MM-DD-YYYY",
    },
    passport_number: {
      type: String,
      required: [true, "Please enter your passport number"],
    },
    address: {
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true, versionKey: false }
);

// 3. Create a Mongoose model for the User.
const Passport = mongoose.model<IPassport>("Passport", passportSchema);

export default Passport;
