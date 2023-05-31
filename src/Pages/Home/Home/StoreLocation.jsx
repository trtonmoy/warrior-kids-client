import React from "react";

const StoreLocation = () => {
  return (
    <div>
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Find Our Store
            </h2>
            <p className="text-gray-600 mb-8">
              Visit our store locations and explore our wide range of products.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src="https://media.istockphoto.com/id/1201830886/photo/the-toy-station.jpg?s=612x612&w=0&k=20&c=COW0TNuw8DwGrRlkYQEaOYRMLqorhcAdfrT5nyMzyVQ="
                alt="Store Location 1"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  The Toy Station
                </h3>
                <p className="text-gray-600 mb-4">London, England</p>
                <a
                  href="#"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  View Details
                </a>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src="https://images.squarespace-cdn.com/content/v1/5c6dae6277b903c476e30e87/1550755850498-Q31MGBH664MMO0FO5VIZ/The-Red-Balloon-Toy-Shop-Orleans-Legos-Cape-Cod.jpg?format=1000w"
                alt="Store Location 2"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  LEGO Store
                </h3>
                <p className="text-gray-600 mb-4">California, USA</p>
                <a
                  href="#"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  View Details
                </a>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src="https://www.abc.com.lb/data/stores_mainpic/520.jpg"
                alt="Store Location 3"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  The Toy Man
                </h3>
                <p className="text-gray-600 mb-4">Dhaka, Bangladesh</p>
                <a
                  href="#"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreLocation;
