/* eslint-disable no-undef */
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import "./NewToy.css";

const notify = () => toast.success("Successfuly added");

const NewToy = () => {
  const formik = useFormik({
    initialValues: {
      toy_name: "",
      seller_name: "",
      seller_email: "",
      price: 0,
      rating: 0,
      quantity: 0,
      photo_url: "",
      category: "",
    },
    onSubmit: (values) => {
      fetch(
        "https://b7a11-toy-marketplace-server-side-jobayer98.vercel.app/toys",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(values),
        }
      ).then(() => {
        notify();
      });
    },
  });
  return (
    <div className="my-4 mx-auto w-[90%] md:w-[60%] lg:w-[40%] py-6 bg-gray-100 rounded">
      <h1 className="text-4xl text-gray-600 font-semibold mb-12 mx-auto w-64">
        Add a new Toy
      </h1>
      <form
        onSubmit={formik.handleSubmit}
        className="px-8 pt-12 pb-6 bg-white rounded"
      >
        <div className="mb-4 md:flex md:justify-between">
          <div className="mb-4 md:mr-2 md:mb-0">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="toy_name"
            >
              Toy Name
            </label>
            <input
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded  appearance-none focus:outline-none focus:shadow-outline"
              id="toy_name"
              type="text"
              placeholder="Toy name"
              value={formik.values.toy_name}
              onChange={formik.handleChange}
            />
          </div>
          <div className="md:ml-2">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="seller_name"
            >
              Seller Name
            </label>
            <input
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded  appearance-none focus:outline-none focus:shadow-outline"
              id="seller_name"
              type="text"
              placeholder="Seller name"
              value={formik.values.seller_name}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="mb-4 md:flex md:justify-between">
          <div className="mb-4 md:mr-2 md:mb-0">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="seller_email"
            >
              Seller Email
            </label>
            <input
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded  appearance-none focus:outline-none focus:shadow-outline"
              id="seller_email"
              type="email"
              placeholder="example@gmail.com"
              value={formik.values.seller_email}
              onChange={formik.handleChange}
            />
          </div>
          <div className="md:ml-2">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="price"
            >
              Price
            </label>
            <input
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded  appearance-none focus:outline-none focus:shadow-outline"
              id="price"
              type="number"
              value={formik.values.price}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="mb-4 md:flex md:justify-between">
          <div className="mb-4 md:mr-2 md:mb-0">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="rating"
            >
              Rating
            </label>
            <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded  appearance-none focus:outline-none focus:shadow-outline"
              id="rating"
              type="number"
              value={formik.values.rating}
              onChange={formik.handleChange}
            />
          </div>
          <div className="md:ml-2">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="quantity"
            >
              Quantity
            </label>
            <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded  appearance-none focus:outline-none focus:shadow-outline"
              id="quantity"
              type="number"
              value={formik.values.quantity}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="mb-4 md:flex md:justify-between">
          <div className="mb-4 md:mr-2 md:mb-0">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="photo_url"
            >
              Photo Url
            </label>
            <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded  appearance-none focus:outline-none focus:shadow-outline"
              id="photo_url"
              type="url"
              placeholder="http://www.example.com"
              value={formik.values.photo_url}
              onChange={formik.handleChange}
            />
          </div>
          <div className="md:ml-2">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="category"
            >
              Choose a category
            </label>
            <select
              className="border p-1 rounded"
              name="category"
              id="category"
              onChange={formik.handleChange}
            >
              <option value="math">Math</option>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
              <option value="medical">Medical</option>
              <option value="engineering_kits">Engineering Kit</option>
              <option value="engineering_tools">Engineering Tool</option>
            </select>
          </div>
        </div>

        <div className="mb-2 text-center">
          <button
            className=" px-4 py-2 mt-3 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-400 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default NewToy;
