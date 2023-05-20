import { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import Spinner from "react-bootstrap/Spinner";
import AuthContext from "../../context/authContext";
import MyToysTable from "./MyToysTable";

const notify = () => {
  toast.success("Delete Successfuly");
};

const AllToysPage = () => {
  const [toys, setToy] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const { email } = user;
  useEffect(() => {
    fetch(
      `https://b7a11-toy-marketplace-server-side-jobayer98.vercel.app/toys?email=${email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setToy(data);
      })
      .catch((e) => console.log(e));
  }, [email]);

  const handleDelete = (id) => {
    Swal.fire("Are you want to delete it?");
    console.log(id);

    fetch(
      `https://b7a11-toy-marketplace-server-side-jobayer98.vercel.app/toys${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const remaining = toys.filter((toy) => toy._id !== id);
        setToy(remaining);
        if (data.status) {
          notify();
        }
      });
  };

  return (
    <>
      {loading ? (
        <span className="flex justify-center items-center h-[80vh]">
          <Spinner animation="border" variant="primary" />
        </span>
      ) : (
        <div className="overflow-x-auto mx-24">
          <table className="table table-zebra w-full">
            <caption className="caption-top mx-auto w-52 text-2xl my-4">
              Available Toys
            </caption>
            <thead className="bg-gray-300">
              <tr>
                <th>Number</th>
                <th>Seller Name</th>
                <th>Toy Name</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {toys?.map((toy, index) => (
                <MyToysTable
                  key={toy._id}
                  toy={toy}
                  number={index + 1}
                  onDelete={handleDelete}
                />
              ))}
            </tbody>
          </table>
          <Toaster />
        </div>
      )}
    </>
  );
};

export default AllToysPage;
