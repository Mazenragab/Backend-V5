import Joi from "joi";
import { generalFields } from "../../middleware/validation.js";


export const signUpSchema = Joi.object({
    firstName: Joi.string().max(20).min(5).required().alphanum(),
    lastName: Joi.string().max(20).min(5).required().alphanum(),
    email: generalFields.email,
    password: generalFields.password,
    cPass: generalFields.cPassword,
    phone: Joi.string().required(),
    DOB: Joi.string().optional(),
    type:Joi.string().optional(),
    availableDates:Joi.array().optional(),
    address:Joi.string().required()
}).required()



export const logInSchema = Joi.object({
    email: generalFields.email,
    password: generalFields.password,
    type:Joi.string().optional()
   
}).required()