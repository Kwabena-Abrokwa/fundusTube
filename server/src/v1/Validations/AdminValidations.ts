import joi from "joi";

export const createAdminValidation = (data: Object) => {
	const userSchema = joi.object({
		email: joi.string().email().required(),
		username: joi.string().required(),
		password: joi.string().required(),
	});

	return userSchema.validate(data);
};
