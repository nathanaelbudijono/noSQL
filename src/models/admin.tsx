import mongoose, { Document, Schema } from "mongoose";

export interface adminInterface extends Document {
  admin: string;
  password: string;
  createdAt: Date;
}

const UserSchema = new Schema<adminInterface>(
  {
    admin: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export const Admin =
  mongoose.models.Admin || mongoose.model<adminInterface>("Admin", UserSchema);

