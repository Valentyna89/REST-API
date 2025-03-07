const { Schema, model } = require("mongoose");
const Joi = require("joi");

const userSchema = Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
      required: true,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

const registerShema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().email().required(),
  subscription: Joi.string(),
});

const loginShema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().email().required(),
});

const emailSchema = Joi.object({
  email: Joi.string().email().required(),
});

const User = model("user", userSchema);

module.exports = { User, registerShema, loginShema, emailSchema };
