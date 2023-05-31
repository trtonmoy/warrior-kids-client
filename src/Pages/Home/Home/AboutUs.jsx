import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <div className="lg:w-1/2 lg:mr-8">
              <img
                className="w-full h-auto object-cover rounded"
                src="https://media.istockphoto.com/id/1201830886/photo/the-toy-station.jpg?s=612x612&w=0&k=20&c=COW0TNuw8DwGrRlkYQEaOYRMLqorhcAdfrT5nyMzyVQ="
                alt="About Us Image"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Welcome to Our Store
              </h2>
              <p className="text-gray-600 mb-8">
                "Welcome to [Your LEGO Toy Store Name]! At [Your LEGO Toy Store
                Name], we are passionate about bringing joy, creativity, and
                endless possibilities to both children and adults alike through
                the world of LEGO.
              </p>
              <p className="text-gray-600 mb-8">
                Join us on this LEGO journey and unleash your imagination. Come
                and explore [Your LEGO Toy Store Name] – a world of creativity,
                imagination, and endless possibilities! We look forward to
                welcoming you and sharing the magic of LEGO with you and your
                family. Happy building!" Feel free to personalize and adapt this
                speech to reflect your own LEGO toy store and its unique
                features.
              </p>
              <a
                href="#"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
