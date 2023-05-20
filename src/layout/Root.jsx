import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <>
      <Header />
      <main className="flex-grow-1">
        <Outlet />
        <Toaster />
      </main>
      <Footer />
    </>
  );
};

export default Root;
