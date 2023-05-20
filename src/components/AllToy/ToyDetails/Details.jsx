import { useLoaderData } from "react-router-dom";

const Details = () => {
  const toyDetails = useLoaderData();
  const seller_name = toyDetails.user_email?.split("@")[0];

  return (
    <>
      <h1 className="flex justify-center mt-4 text-2xl font-bold text-gray-600">
        Toy Details
      </h1>
      <div className="card lg:card-side bg-gray-100 shadow-xl m-24 rounded mt-8">
        <figure className="p-4 border-2 border-l-gray-100">
          <img
            className="max-h-64"
            src={toyDetails.image}
            alt={toyDetails.name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Name: <span className="text-gray-600"> {toyDetails.name}</span>
          </h2>
          <div className="flex flex-col gap-2">
            <p className="text-md font-semibold">
              Price: <span className="text-gray-600">${toyDetails.price}</span>
            </p>
            <p className="text-md font-semibold">
              Description:{" "}
              <span className="text-gray-600 font-normal">
                {toyDetails.short_description}
              </span>
            </p>
          </div>
          <div className="flex md:gap-16 lg:gap-32 ">
            <div className="flex flex-col gap-2">
              <p className="text-md font-semibold">
                Quantity:{" "}
                <span className="text-gray-600">{toyDetails.quantity}</span>
              </p>
              <p className="text-md font-semibold">
                Sub-category:{" "}
                <span className="text-gray-600">{toyDetails.category}</span>
              </p>
              <p className="text-md font-semibold">
                Rating:{" "}
                <span className="text-gray-600">{toyDetails.rating}</span>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-md font-semibold">
                Seller Name:{" "}
                <span className="text-gray-600">{seller_name}</span>
              </p>
              <p className="text-md font-semibold">
                Seller Email:{" "}
                <span className="text-gray-600">{toyDetails.user_email}</span>
              </p>
              <p className="text-md font-semibold">
                Children of Age:{" "}
                <span className="text-gray-600">
                  {toyDetails?.children_age}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
