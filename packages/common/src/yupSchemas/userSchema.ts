import * as yup from "yup";

export const emailmin = "I have a feeling this isn't a real e-mail..";
export const emailmax = "This email is pretty suspicious..";
export const passmin = "Password has to be longer than 6 characters!";
export const passmax = "Passwords are padlocks, not bank vaults";

export const registerPassValidation = yup
  .string()
  .min(6, passmin)
  .max(15, passmax)
  .required();

export const registerEmailValidation = yup
  .string()
  .min(6, emailmin)
  .max(50, emailmax)
  .email("E-mail is not valid!")
  .required();

export const registerUserSchema = yup.object().shape({
  email: registerEmailValidation,
  password: registerPassValidation,
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
});
