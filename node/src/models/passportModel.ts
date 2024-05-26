import mongoose from "mongoose";
import { format, formatWithOptions } from "util";

const passportSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: [true, "Please enter your id"],
      trim: true,
    },
    first_name: {
      type: String,
      required: [true, "Please enter your first name"],
      trim: true,
    },
    last_name: {
      type: String,
      required: [true, "Please enter your last name"],
      trim: true,
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
    Address: {
      City: {
        type: String,
        required: false,
      },
      State: {
        type: String,
        required: false,
      },
      Country: {
        type: String,
        required: false,
      }
    },
  },
  { timestamps: true,
    versionKey: false   }
);

// const addressSchema = new mongoose.Schema(
//   {
//   City: {
//     type: String,
//     required: false,
//   },
//   State: {
//     type: String,
//     required: false,
//   },
//   Country: {
//     type: String,
//     required: false,
//   },
// },
// { timestamps: true,
//   versionKey: false   }
// );
// export default mongoose.model("Address", addressSchema);
export default mongoose.model("Passport", passportSchema);

