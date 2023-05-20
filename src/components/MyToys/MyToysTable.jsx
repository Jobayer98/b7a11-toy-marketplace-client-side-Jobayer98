import { Link } from "react-router-dom";

const MyToysTable = ({ toy, number, onDelete }) => {
  const seller = toy.user_email?.split("@")[0];

  const handleDelete = (id) => {
    onDelete(id);
  };
  return (
    <tr className="hover">
      <td>{number}</td>
      <td>{seller}</td>
      <td>{toy.name}</td>
      <td>{toy.category}</td>
      <td>${toy.price}</td>
      <td>{toy.quantity}</td>
      <td>
        <Link to={`/toys/${toy._id}`}>Update</Link>
      </td>
      <td>
        <button onClick={() => handleDelete(toy._id)}>Delete</button>
      </td>
    </tr>
  );
};

export default MyToysTable;
