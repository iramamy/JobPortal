import * as yup from "yup";

// phoneRegEx
const phoneRegEx =
    /^\+?(\d{1,3})?[-.\s]?(\(?\d{1,4}\)?[-.\s]?)(\d{1,4}[-.\s]?){1,2}\d{1,4}$/;

// Field Validation
const formSchema = yup.object().shape({
    title: yup.string().required("Required"),
    type: yup.string().required("Job type is required"),
    description: yup.string().min(100).required("Write a description"),
    location: yup.string().required("Enter location"),
    salary: yup.string().required("Salary is required"),
    companyName: yup.string().required("Enter company name"),
    companyDescription: yup.string().required("Enter you company description"),
    companyEmail: yup.string().email("Invalid Email").required("Required"),
    companyContact: yup
        .string()
        .matches(phoneRegEx, "Contact number is not valid")
        .required("Required"),
});

export default formSchema;
