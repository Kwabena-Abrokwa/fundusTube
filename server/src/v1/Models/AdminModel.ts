import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
	{
		admin_id: {
			type: String,
			require: true,
		},
		username: {
			type: String,
			require: true,
		},
		email: {
			type: String,
			require: true,
		},
		telephone: {
			type: String,
			require: true,
		},
		profile: {
			type: String,
			require: false,
		},
		password: {
			type: String,
			require: true,
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("admins", AdminSchema);
