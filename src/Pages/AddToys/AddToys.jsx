import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const AddToys = () => {
  const { user } = useContext(AuthContext);

  const handleAddToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const sup_name = form.sup_name.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const stock = form.stock.value;
    const photo = form.photo.value;
    const details = form.details.value;

    const newToy = {
      name,
      sup_name,
      email,
      category,
      price,
      rating,
      stock,
      photo,
      details,
    };
    console.log(newToy);

    fetch("http://localhost:5000/newtoy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Your new Toy has been added successfully",
            icon: "error",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <section className="my-8 border border-purple-400 p-5">
      <form onSubmit={handleAddToy}>
        <div className="grid grid-cols-2 gap-4 font-semibold text-lg">
          <div>
            <label className="block mb-2 font-medium">Name</label>
            <input
              className="w-full p-2 border border-gray-300 rounded-md"
              type="text"
              name="name"
              placeholder="Enter name"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              className="w-full p-2 border border-gray-300 rounded-md"
              type="email"
              required
              name="email"
              defaultValue={user.email}
              readOnly
              placeholder="Enter email"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Supplier Name</label>
            <input
              className="w-full p-2 border border-gray-300 rounded-md"
              type="text"
              readOnly
              name="sup_name"
              defaultValue={user?.displayName}
              placeholder="Enter supplier name"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Category</label>
            <input
              className="w-full p-2 border border-gray-300 rounded-md"
              type="text"
              name="category"
              placeholder="Enter category"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Price</label>
            <input
              className="w-full p-2 border border-gray-300 rounded-md"
              type="text"
              name="price"
              required
              placeholder="Enter price"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Photo URL</label>
            <input
              className="w-full p-2 border border-gray-300 rounded-md"
              type="text"
              name="photo"
              required
              placeholder="Enter photo URL"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Rating</label>
            <input
              className="w-full p-2 border border-gray-300 rounded-md"
              type="text"
              name="rating"
              required
              placeholder="Enter rating"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Stock</label>
            <input
              className="w-full p-2 border border-gray-300 rounded-md"
              type="text"
              name="stock"
              required
              placeholder="Enter stock"
            />
          </div>
        </div>
        <div className="w-full">
          <label className="block mb-2 font-medium">Details</label>
          <textarea
            name="details"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter details"
          ></textarea>
        </div>
        <input
          className="btn btn-block my-3"
          type="submit"
          value="Add Your Toy"
        />
      </form>
    </section>
  );
};

export default AddToys;
