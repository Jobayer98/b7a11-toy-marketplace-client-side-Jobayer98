import { useEffect } from "react";
import NewToy from "../components/AddToy/NewToy";

const AddToyPage = () => {
  useEffect(() => {
    document.title = "ToyLand | Add Toy";
  }, []);
  return (
    <>
      <NewToy />
    </>
  );
};

export default AddToyPage;
