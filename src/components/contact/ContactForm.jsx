const ContactForm = ({ formik, translations, isInViewport }) => (
  <form className="contact-form" onSubmit={formik.handleSubmit}>
    <div id="form-group-name-group" className="form-group name-group">
      <div className={`form-field ${isInViewport ? 'animate-slideInRight' : ''}`}>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder={translations?.firstName || 'First Name'}
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <span className="error-message">{formik.errors.firstName}</span>
        ) : null}
      </div>
      <div className={`form-field ${isInViewport ? 'animate-slideInRight' : ''}`}>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder={translations?.lastName || 'Last Name'}
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <span className="error-message">{formik.errors.lastName}</span>
        ) : null}
      </div>
    </div>

    <div className={`form-group ${isInViewport ? 'animate-slideInRight' : ''}`}>
      <input
        type="email"
        id="email"
        name="email"
        placeholder={translations?.email || 'Your Email'}
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email ? (
        <span className="error-message">{formik.errors.email}</span>
      ) : null}
    </div>

    <div className={`form-group ${isInViewport ? 'animate-slideInRight' : ''}`}>
      <input
        type="text"
        id="subject"
        name="subject"
        placeholder={translations?.subject || 'Subject'}
        value={formik.values.subject}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.subject && formik.errors.subject ? (
        <span className="error-message">{formik.errors.subject}</span>
      ) : null}
    </div>

    <div className={`form-group ${isInViewport ? 'animate-slideInRight' : ''}`}>
      <textarea
        id="message"
        name="message"
        placeholder={translations?.message || 'Message'}
        rows="5"
        value={formik.values.message}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      ></textarea>
      {formik.touched.message && formik.errors.message ? (
        <span className="error-message">{formik.errors.message}</span>
      ) : null}
    </div>

    <button type="submit" className={`contact-button submit-button ${isInViewport ? 'animate-slideInRight' : ''}`}>
      {translations?.submit || 'Submit Message'}
    </button>
  </form>
);

export default ContactForm;