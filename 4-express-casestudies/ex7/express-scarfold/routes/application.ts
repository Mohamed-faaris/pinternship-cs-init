import { Router, type NextFunction, type Request, type Response } from 'express';
import { body, validationResult } from "express-validator";

const router = Router();


const applicationValidation = [
  body("name")
    .isString()
    .notEmpty()
    .withMessage("Name is required"),
  body("email")
    .isEmail()
    .withMessage("Valid email is required"),
  body("birthdate")
    .isISO8601()
    .withMessage("Birthdate must be a valid date (YYYY-MM-DD)"),
  body("program")
  .isIn(["Computer Science", "Data Science", "Design", "Business","Arts"])
  .withMessage("Program must be a valid option"),
  body("grades")
    .isArray({ min: 1 })
    .withMessage("At least one grade is required"),
  body("grades.*")
    .isNumeric()
    .withMessage("All grades must be numbers"),
  body("essay")
    .isLength({ min: 100 })
    .withMessage("Essay must be at least 100 characters"),
  body("recommendationLetter")
    .isURL()
    .withMessage("A valid recommendation letter link is required"),
  body("portfolioURL")
    .if(body("program").equals("Arts"))
    .notEmpty()
    .withMessage("Portfolio URL is required for Arts applicants")
    .bail()
    .isURL()
    .withMessage("Portfolio URL must be a valid URL"),
];


  router.post("/apply", applicationValidation, (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Return all validation errors
      return res.status(400).json({ errors: errors.array() });
    }
    // If we reach here, the application is valid!
    res.json({ status: "Application received!" });
  });



export default router;
