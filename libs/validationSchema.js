import * as yup from "yup";

export const validationSchema = yup.object().shape({
    fullName: yup.string().required("Ime je obavezno"),
    email: yup
        .string()
        .email("Email mora biti validan")
        .required("Email je obavezan"),
    message: yup.string().required("Poruka je obavezna"),
});