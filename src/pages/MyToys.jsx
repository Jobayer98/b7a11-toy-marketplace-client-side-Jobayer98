import { useEffect } from "react";
import MyToys from "../components/MyToys/MyToys";
const MyToysPage = () => {
  useEffect(() => {
    document.title = "ToyLand | MyToys";
  }, []);
  return (
    <>
      <MyToys />
    </>
  );
};

export default MyToysPage;
