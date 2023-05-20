import { useEffect, useState } from "react";
import TableRow from "../components/AllToy/TableRow";
import { useLoaderData } from "react-router-dom";

const AllToysPage = () => {
  const [toys, setToy] = useState([]);
  const { totalToy } = useLoaderData();
  console.log(totalToy);

  useEffect(() => {
    fetch("https://b7a11-toy-marketplace-server-side-jobayer98.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => {
        setToy(data);
      });
  }, []);
  return (
    <div className="overflow-x-auto mx-24">
      <table className="table table-zebra w-full">
        <caption className="caption-top mx-auto w-52 text-2xl my-4">
          Available All Toys
        </caption>
        <thead className="bg-gray-300">
          <tr>
            <th>Seller Name</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>View Details</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => (
            <TableRow key={toy._id} toy={toy} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToysPage;
