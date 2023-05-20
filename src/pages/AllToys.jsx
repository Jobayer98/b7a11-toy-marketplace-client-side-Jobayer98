import { useEffect, useState } from "react";
import TableRow from "../components/AllToy/TableRow";
import { useLoaderData } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";

const AllToysPage = () => {
  const [toys, setToy] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { totalToy } = useLoaderData();

  const perPage = 20;
  const totalPages = Math.ceil(totalToy / perPage);
  const pageNumbers = [...Array(totalPages).keys()];

  useEffect(() => {
    fetch(`http://localhost:3000/toys?page=${currentPage}&limit=${perPage}`)
      .then((res) => res.json())
      .then((data) => {
        setToy(data);
      });
  }, [currentPage]);

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
      <div className="flex justify-center items-center mt-4">
        <Pagination className="mb-3">
          <Pagination.Prev />
          {pageNumbers.map((page) => (
            <Pagination.Item
              key={page}
              onClick={() => setCurrentPage(page + 1)}
            >
              {page + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next />
        </Pagination>
      </div>
    </div>
  );
};

export default AllToysPage;
