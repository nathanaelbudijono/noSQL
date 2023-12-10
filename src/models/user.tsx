import mongoose, { Document, Schema } from "mongoose";

export interface userInterface extends Document {
  user: string;
  password: string;
  role: string;
  createdAt: Date;
}

const UserSchema = new Schema<userInterface>(
  {
    user: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "user" },
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export const User =
  mongoose.models.User || mongoose.model<userInterface>("User", UserSchema);
