import { Link } from "react-router-dom";

const TableRow = ({ toy, number }) => {
  const seller = toy.user_email?.split("@")[0];
  return (
    <tr className="hover">
      <td>{number}</td>
      <td>{seller}</td>
      <td>{toy.name}</td>
      <td>{toy.category}</td>
      <td>${toy.price}</td>
      <td>{toy.quantity}</td>
      <td>
        <Link to={`/toys/${toy._id}`}>Details</Link>
      </td>
    </tr>
  );
};

export default TableRow;
