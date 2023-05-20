const TableRow = ({ toy }) => {
  const seller = toy.user_email?.split("@")[0];
  return (
    <tr className="hover">
      <td>{seller}</td>
      <td>{toy.name}</td>
      <td>{toy.category}</td>
      <td>${toy.price}</td>
      <td>{toy.quantity}</td>
      <td>
        <button className="btn btn-ghost btn-x"> Details</button>
      </td>
    </tr>
  );
};

export default TableRow;
