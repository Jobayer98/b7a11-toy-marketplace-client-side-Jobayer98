import { useEffect } from "react";

const BlogsPage = () => {
  useEffect(() => {
    document.title = "ToyLand | Blogs";
  }, []);
  return <div>BlogsPage</div>;
};

export default BlogsPage;
