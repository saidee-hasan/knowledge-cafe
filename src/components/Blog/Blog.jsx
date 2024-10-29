import { useEffect, useState } from "react";
import Blogs from "../Blogs/Blogs";

function Blog({ handleBookMark}) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch("./blogs.json")
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data.blogPosts);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }, 500); // Simulate a loading delay of 200ms

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  return (
    <div className="md:w-2/3 mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      
      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {blogs.length === 0 && !loading && <p className="text-gray-500">No blog posts available.</p>}
      
      {blogs.map((blog, index) => (
        <Blogs blogs={blog} handleBookMark={handleBookMark} key={index} />
      ))}
    </div>
  );
}

export default Blog;