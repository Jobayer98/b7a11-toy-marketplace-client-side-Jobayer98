import { useLoaderData } from "react-router-dom";

const Details = () => {
  const toyDetails = useLoaderData();

  return (
    <>
      <h1 className="flex justify-center mt-4 text-2xl font-bold text-gray-600">
        Toy Details
      </h1>
      <div className="card lg:card-side bg-gray-100 shadow-xl m-24 rounded mt-8">
        <figure className="p-4 border-2 border-l-gray-100">
          <img src={toyDetails.image} alt={toyDetails.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {toyDetails.name}</h2>
          <p className="text-md font-semibold">
            Price: $<span className="text-gray-600">{toyDetails.price}</span>
          </p>
          <p className="text-md font-semibold">
            Description:{" "}
            <span className="text-gray-600">
              {toyDetails.short_description}
            </span>
          </p>
          <p className="text-md font-semibold">
            Quantity:{" "}
            <span className="text-gray-600">{toyDetails.quantity}</span>
          </p>
          <p className="text-md font-semibold">
            Category:{" "}
            <span className="text-gray-600">{toyDetails.category}</span>
          </p>
          <p className="text-md font-semibold">
            Rating: <span className="text-gray-600">{toyDetails.rating}</span>
          </p>
          <p className="text-md font-semibold">
            Children of Age:{" "}
            <span className="text-gray-600">{toyDetails.children_age}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Details;
