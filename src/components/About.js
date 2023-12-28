const About = () => {
  return (
    <div className="about-us-container mx-auto p-4 md:w-8/12 lg:w-6/12 xl:w-4/12">
      <h2 className="font-bold text-xl md:text-2xl mb-4">About Foodie</h2>
      <p className="text-sm md:text-base">
        Welcome to Foodie, your go-to food delivery app for delicious meals
        delivered right to your doorstep!
      </p>

      <h3 className="font-bold text-lg md:text-xl mt-4">Our Mission</h3>
      <p className="text-sm md:text-base">
        At Foodie, we are passionate about connecting people with their favorite
        food from the best local restaurants. Our mission is to make food
        delivery convenient, reliable, and delightful for everyone.
      </p>

      <h3 className="font-bold text-lg md:text-xl mt-4">Why Choose Foodie?</h3>
      <ul className="list-disc ml-6 text-sm md:text-base">
        <li>
          Wide Variety: Explore a diverse range of cuisines and dishes from
          top-rated restaurants.
        </li>
        <li>
          Fast Delivery: We prioritize timely deliveries to ensure your food is
          fresh and satisfying.
        </li>
        <li>
          User-Friendly App: Our app is designed to be easy to use, making
          ordering your favorite meals a breeze.
        </li>
        <li>
          Exceptional Service: Our dedicated customer support team is here to
          assist you every step of the way.
        </li>
      </ul>

      <h3 className="font-bold text-lg md:text-xl mt-4">Contact Us</h3>
      <p className="text-sm md:text-base">
        Have questions or feedback? We'd love to hear from you! Contact our
        support team at support@foodieapp.com.
      </p>

      <p className="text-sm md:text-base mt-4">
        Thank you for choosing Foodie. We look forward to serving you delicious
        meals!
      </p>
    </div>
  );
};

export default About;
