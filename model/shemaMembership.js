import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MembershipSchema = new Schema({
  email: String,
  first_name: String,
  last_name: String,
  password: String,
  profile_image: String,
});

export default mongoose.model("Membership", MembershipSchema);
