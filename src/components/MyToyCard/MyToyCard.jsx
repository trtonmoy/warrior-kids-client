import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToyCard = ({ toy, myToys, setMyToys }) => {
  const {
    _id,
    name,
    sup_name,
    email,
    category,
    price,
    rating,
    stock,
    photo,
    details,
  } = toy;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/newtoy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("delete", data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = myToys.filter((toy) => toy._id !== id);
              setMyToys(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="mb-5">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="toy image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> Toy Name : {name} </h2>
          <p> Price : {price} </p>
          <p> Rating : {rating} </p>
          <p> Toy Details : {details} </p>
        </div>
        <div className="btn-group my-auto btn-group-vertical">
          <Link to={`/newtoy/${_id}`}>
            <button className="btn bg-blue-600 hover:bg-blue-800 rounded-sm border-0 mb-5 ">
              Details
            </button>
          </Link>
          <Link to={`/update/${_id}`}>
            <button className="btn bg-blue-600 hover:bg-blue-800 rounded-sm border-0 mb-5">
              Update
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn bg-blue-600 hover:bg-blue-800 rounded-sm border-0 mb-5"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyToyCard;
