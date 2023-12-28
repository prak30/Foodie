const Contact = () => {
  return (
    <div className="contact-us-container mx-auto p-4 md:w-8/12 lg:w-6/12 xl:w-4/12">
      <h2 className="font-bold text-xl md:text-2xl mb-4">Contact Us</h2>
      <p className="text-sm md:text-base">
        Thank you for your interest in our food delivery service. If you have
        any questions or inquiries, feel free to reach out to us using the
        contact information below.
      </p>

      <div className="contact-info mt-4">
        <p>Email: info@foodieapp.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Address: 123 Main Street, Cityville, State, 12345</p>
      </div>

      <input
        type="text"
        placeholder="Name"
        className="p-2 my-2 w-full rounded-lg border border-gray-300"
      />
      <input
        type="text"
        placeholder="Email"
        className="p-2 my-2 w-full rounded-lg border border-gray-300"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Submit
      </button>
    </div>
  );
};

export default Contact;
