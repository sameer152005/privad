import React from 'react';
import './style.css';
const NewPatientEnrollmentForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [sex,setSex]=useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
}
const handleSubmit = (event) => {
  event.preventDefault();

  // Submit form data to server
  console.log({
    firstName,
    lastName,
    email,
    phoneNumber,
    dateOfBirth,
    gender,
    addressLine1,
    addressLine2,
    city,
    state,
    zipCode,
    emergencyContactName,
    emergencyContactPhone,
  });
};

return (
  <div className="form-container">
    <form onSubmit={handleSubmit}>
      <div className="form-section">
        <h2>Personal Information</h2>
        <div className="form-row">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={gender}
            onChange={(event) => setGender(event.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={(event) => setDateOfBirth(event.target.value)}
            required
          />
        </div>
      </div>

      <div className="form-section">
        <h2>Contact Information</h2>
        <div className="form-row">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            required
          />
        </div>
      </div>

      <div className="form-section">
        <h2>Address Information</h2>
        <div className="form-row">
          <label htmlFor="addressLine1">Address Line 1:</label>
          <input
            type="text"
            id="addressLine1"
            name="addressLine1"
            value={addressLine1}
            onChange={(event) => setAddressLine1(event.target.value)}
            required
          />
        </div>
  return (
    <div className="supernova">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta property="og:title" content="New Patient Enrollment Form" />
        <meta property="og:description" content="Please click the link to complete this form." />
        <meta name="slack-app-id" content="AHNMASS8M" />
        <script>
          const favicon = document.querySelector('link[rel="shortcut icon"]');
          window.isDarkMode =
            (window.matchMedia &&
              window.matchMedia('(prefers-color-scheme: dark)').matches);

          if (favicon && window.isDarkMode) {
            favicon.href = favicon.href.replaceAll(
              'favicon-2021-light%402x.png',
              'favicon-2021-dark%402x.png'
            );
          }
        </script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=2.0, user-scalable=1" />
        <meta name="HandheldFriendly" content="true" />
        <title>New Patient Enrollment Form</title>
        <link
          type="text/css"
          rel="stylesheet"
          href="https://cdn01.jotfor.ms/themes/CSS/form-common.css?v=77cd9fc
"
        />
        <style type="text/css">
          @media print {
            *{-webkit-print-color-adjust: exact !important;
              color-adjust: exact !important;}
            .form-section {
              display: inline !important;
            }
            .form-pagebreak {
              display: none !important;
            }
            .form-section-closed {
              height: auto !important;
            }
            .page-section {
              position: initial !important;
            }
          }
        </style>
        
        <link
          type="text/css"
          rel="stylesheet"
          href="https://cdn02.jotfor.ms/themes/CSS/5e6b428acc8c4e222d1beb91.css?v=3.3.47610&themeRevisionID=63e6805f64383509e31513f4"
        />
      </head>
      <body>
        {/* Form content goes here */}
      </body>
      
    </div>
  );
};

export default NewPatientEnrollmentForm;
