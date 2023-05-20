import { useEffect, useState } from "react";
import TableRow from "../components/AllToy/TableRow";
import { useLoaderData } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";
import Spinner from "react-bootstrap/Spinner";

const AllToysPage = () => {
  const [toys, setToy] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const { totalToy } = useLoaderData();

  const perPage = 20;
  const totalPages = Math.ceil(totalToy / perPage);
  const pageNumbers = [...Array(totalPages).keys()];

  useEffect(() => {
    fetch(
      `https://b7a11-toy-marketplace-server-side-jobayer98.vercel.app/toys?page=${currentPage}&limit=${perPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setToy(data);
      })
      .catch((e) => console.log(e));
  }, [currentPage]);

  return (
    <>
      {loading ? (
        <span className="flex justify-center items-center h-[80vh]">
          <Spinner animation="border" variant="warning" />
        </span>
      ) : (
        <div className="overflow-x-auto mx-24">
          <table className="table table-zebra w-full">
            <caption className="caption-top mx-auto w-52 text-2xl my-4">
              Available All Toys
              {toys.length}
            </caption>
            <thead className="bg-gray-300">
              <tr>
                <th>Number</th>
                <th>Seller Name</th>
                <th>Toy Name</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>View Details</th>
              </tr>
            </thead>
            <tbody>
              {toys.map((toy, index) => (
                <TableRow key={toy._id} toy={toy} number={index + 1} />
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
      )}
    </>
  );
};

export default AllToysPage;
