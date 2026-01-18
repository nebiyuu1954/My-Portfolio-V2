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
onSubmit: async (values, { resetForm, setStatus }) => {
  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      values,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
    setStatus({
      success: true,
      message: 'Thanks for the email',
    });
    resetForm();
  } catch (error) {
    console.error('EmailJS error:', {
      message: error.message,
      status: error.status,
      text: error.text,
    });
    setStatus({
      success: false,
      message: 'Failed to send message. Please check your EmailJS configuration or try again later.',
    });
  }
},
});
