
# React + Vite
# My Portfolio V2

This template provides a minimal setup to get React working in Vite this is the second version of my personal portfolio website, built with React and Vite. It showcases my projects, experience, and skills, and includes a functional contact form.

Currently, two official plugins are available:
## Features


*   **Responsive Design:** The website is fully responsive and works on all devices.
*   **Multi-language Support:** The content is available in English, Spanish, and Amharic.
*   **Contact Form:** A functional contact form using EmailJS to send messages directly to my inbox.
*   **Animations:** Subtle animations on scroll to enhance the user experience.
*   **Theme Toggle:** A dark/light theme toggle.

## Expanding the ESLint configuration
## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **Vite:** A fast build tool for modern web projects.
*   **Formik & Yup:** For building and validating forms.
*   **EmailJS:** For sending emails from the client-side.
*   **CSS:** For styling the components.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js and npm installed on your machine.

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username/your_repository.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Create a `.env` file in the root of the project and add the following variables:
    ```
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_public_key
    ```
    Replace `your_service_id`, `your_template_id`, and `your_public_key` with your actual EmailJS credentials.

## Available Scripts

In the project directory, you can run:

```bash
  npm start
```

Runs the app in the development mode
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.
 

```bash
  npm run build
```

Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.


```bash 
npm run preview
```

Serves the production build locally to preview it.