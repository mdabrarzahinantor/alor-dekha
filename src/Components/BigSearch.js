import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import db from "./Firebase";
// import Footer from "./Footer";
import { motion } from "framer-motion";

function Search() {
  const [blogs, setBlogs] = useState([]);
  const [mBlogs, setMBlogs] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    db.collection("blogs").onSnapshot((snap) => {
      setBlogs(
        snap.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <section className="bs main-search">
      {" "}
      <div className="bs-title category-header">সার্চ করুন</div>
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        onSubmit={(e) => e.preventDefault()}
        className="bsf main-search-input input"
      >
        <input
          onChange={(e) => {
            if (e.target.value.length > 1) {
              let matches = blogs.filter((blog) => {
                let regex = new RegExp(`${e.target.value}`, "gi");
                return (
                  blog.data.title.match(regex) || blog.data.author.match(regex)
                );
              });

              setMBlogs(matches);
              setStatus(matches.length.toString());
            } else {
              setMBlogs([]);
              setStatus("");
            }
          }}
          id="search"
        />
        <label htmlFor="search">
          <i className="fas fa-search    "></i>{" "}
        </label>
      </motion.form>
      <div className="status">
        {status} {status.length > 0 ? "Items Found" : ""}
      </div>
      <div className="bs-container">
        {mBlogs?.map((blog) => (
          <Blog
            key={blog?.id}
            id={blog?.id}
            article={blog?.data.article}
            author={blog?.data.author}
            img_url={blog?.data.img_url}
            min={blog?.data.min}
            tags={blog?.data.tags}
            timestamp={blog?.data.timestamp}
            title={blog?.data.title}
          />
        ))}{" "}
      </div>{" "}
    </section>
  );
}

export default Search;
