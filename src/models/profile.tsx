import mongoose, { Document, Schema } from "mongoose";

export interface profileInterface extends Document {
  city: string;
  pin: number;
  wallet: number;
  origin: Schema.Types.ObjectId | object;
  createdAt: Date;
}

const ProfileSchema = new Schema<profileInterface>(
  {
    city: { type: String, required: true },
    pin: { type: Number, required: true },
    wallet: { type: Number, default: 0 },
    origin: { type: Schema.Types.ObjectId, ref: "User", unique: true },
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export const Profile =
  mongoose.models.Profile ||
  mongoose.model<profileInterface>("Profile", ProfileSchema);
