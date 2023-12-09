import mongoose, { Document, Schema } from "mongoose";

export interface userInterface extends Document {
  user: string;
  password: string;
  role: string;
  profile: Schema.Types.ObjectId;
  purchases: Schema.Types.ObjectId[] | object[];
  createdAt: Date;
}

const UserSchema = new Schema<userInterface>(
  {
    user: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "user" },
    profile: { type: Schema.Types.ObjectId, ref: "Profile" },
    purchases: [{ type: Schema.Types.ObjectId, ref: "ItemsCart" }],
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export const User =
  mongoose.models.User || mongoose.model<userInterface>("User", UserSchema);
