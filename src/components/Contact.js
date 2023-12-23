import React from "react";

const Contact = () => {
  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <p>
        Thank you for your interest in our food delivery service. If you have
        any questions or inquiries, feel free to reach out to us using the
        contact information below.
      </p>

      <div className="contact-info">
        <p>Email: info@foodieapp.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Address: 123 Main Street, Cityville, State, 12345</p>
      </div>

      <input
        type="text"
        placeholder="name"
        className="p-2 h-2 rounded-lg border border-gray-300"
      />
      <input
        type="text"
        placeholder="email"
        className="p-2 h-2 rounded-lg border border-gray-300"
      />
      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Submit
      </button>
    </div>
  );
};

export default Contact;
