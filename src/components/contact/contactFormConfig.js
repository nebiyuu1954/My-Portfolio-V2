import * as Yup from "yup";
import emailjs from "@emailjs/browser";


export const getFormConfig = () => ({
  initialValues: {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  },
  validationSchema: Yup.object({
    firstName: Yup.string()
      .matches(/^[A-Za-z]+$/, "First name must contain only letters")
      .required("First name is required"),
    lastName: Yup.string()
      .matches(/^[A-Za-z]+$/, "Last name must contain only letters")
      .required("Last name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  }),
  onSubmit: (values, { resetForm }) => {
    emailjs
      .send(
        "service_6bogm4i", // EmailJS service ID
        "template_8xsdgjq", // EmailJS template ID
        values,
        "Bz_WQjFCldhtOMpOy" //  EmailJS public key
      )
      .then(() => {
        alert("Message sent successfully!");
        resetForm();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Failed to send message. Please try again.");
      });
  },
});
