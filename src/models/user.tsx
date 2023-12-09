import mongoose, { Document, Schema } from "mongoose";

export interface userInterface extends Document {
  user: string;
  password: string;
  profile: Schema.Types.ObjectId;
  createdAt: Date;
}

const UserSchema = new Schema<userInterface>(
  {
    user: { type: String, required: true },
    password: { type: String, required: true },
    profile: { type: Schema.Types.ObjectId, ref: "Profile" },
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export const User =
  mongoose.models.User || mongoose.model<userInterface>("User", UserSchema);
