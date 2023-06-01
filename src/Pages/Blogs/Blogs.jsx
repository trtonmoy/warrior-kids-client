import React from "react";
import useTitle from "../../hooks/useTitle";

const Blogs = () => {
  useTitle('Blogs');
  return (
    <section>
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto py-10">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Question & Answer Blog</h1>

            {/* Single Q&A */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold mb-2">
                What is an access token and refresh token? How do they work and
                where should we store them on the client-side?
              </h2>
              <p className="text-gray-600 mb-4">
                An access token is a credential used by a client to access
                protected resources on behalf of a user. It typically contains
                user identity and permissions, and it has a short lifespan.{" "}
                <br /> A refresh token is a long-lived credential used to obtain
                new access tokens without requiring the user's credentials
                again. <br /> Access tokens are usually stored in memory or
                local storage on the client-side, while refresh tokens should be
                securely stored, preferably in an HTTP-only cookie, to mitigate
                the risk of theft.
              </p>
              <div className="flex items-center text-gray-500 text-sm">
                <span className="mr-2">Asked by:</span>
                <span>P-hero</span>
              </div>
            </div>

            {/* Single Q&A */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold mb-2">
                Compare SQL and NoSQL databases?
              </h2>
              <p className="text-gray-600 mb-4">
                SQL databases are structured, relational databases that store
                data in tables with predefined schemas, ensuring data
                consistency and enforcing relationships. NoSQL databases, on the
                other hand, are non-relational, schema-less databases that
                provide flexibility in data storage, allowing for rapid scaling
                and handling of large amounts of unstructured or semi-structured
                data. <br /> <br /> SQL databases use SQL for querying, whereas
                NoSQL databases use various query languages. SQL databases are
                suitable for complex, structured data, while NoSQL databases
                excel in handling dynamic, unstructured data and provide
                horizontal scalability.
              </p>
              <div className="flex items-center text-gray-500 text-sm">
                <span className="mr-2">Asked by:</span>
                <span>P-hero</span>
              </div>
            </div>

            {/* Single Q&A */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold mb-2">
                What is express js and What is Nest JS?
              </h2>
              <p className="text-gray-600 mb-4">
                Express.js is a popular, minimalistic web application framework
                for Node.js. It provides a simple and flexible approach to
                building web applications and APIs, offering features for
                handling routes, middleware, and HTTP requests.
                <br /> <br />
                Nest.js, on the other hand, is a progressive Node.js framework
                for building scalable and efficient server-side applications. It
                is built with TypeScript and incorporates concepts from Angular
                to provide a structured and modular architecture. Nest.js offers
                powerful dependency injection, declarative programming, and
                built-in support for microservices, making it suitable for
                enterprise-grade applications.
              </p>
              <div className="flex items-center text-gray-500 text-sm">
                <span className="mr-2">Asked by:</span>
                <span>P-hero</span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold mb-2">
                What is MongoDB aggregate and how does it work ?
              </h2>
              <p className="text-gray-600 mb-4">
                MongoDB's `aggregate` is a powerful method that allows for
                complex data processing and analysis within the database. It
                offers a flexible framework for performing operations like
                filtering, grouping, sorting, and aggregating data. The
                `aggregate` method takes an array of stages as input, where each
                stage represents a specific operation in the data pipeline.
                These stages can be used to transform and manipulate the data,
                perform computations, and generate meaningful results.
                <br />
                <br /> By leveraging the aggregation pipeline, MongoDB's
                `aggregate` enables efficient and scalable data aggregation and
                analysis directly within the database.
              </p>
              <div className="flex items-center text-gray-500 text-sm">
                <span className="mr-2">Asked by:</span>
                <span>P-hero</span>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6">
              <button className="bg-gray-200 text-gray-700 px-3 py-2 rounded-md mr-2">
                Previous
              </button>
              <button className="bg-blue-500 text-white px-3 py-2 rounded-md">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
