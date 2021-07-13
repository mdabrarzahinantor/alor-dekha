import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./BigBlog.css";
import db, { auth } from "./Firebase";
import Footer from "./Footer";
import { motion } from "framer-motion";

function BigBlog() {
  const { poster } = useParams();
  const [blog, setBlog] = useState({});
  const [author, setAuthor] = useState("");

  useEffect(() => {
    db.collection("posters")
      .doc(poster)
      .onSnapshot((snap) => {
        setBlog(snap.data());
      });
  }, []);

  useEffect(() => {
    if (blog.author) {
      db.collection("authors")
        .where("author", "==", blog?.author)
        .onSnapshot((snap) => {
          let authors = snap.docs.map((doc) => ({
            id: doc.id,
          }));

          setAuthor(authors[0]?.id);
        });
    }
  }, [blog]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.3 }}
      className="big-poster big-blog"
    >
      <div className="bb-blog">
        <div
          onClick={() => navigator.clipboard.writeText(window.location.href)}
          className="bb-blog-link"
        >
          <i className="fas fa-link    "></i> {poster}
        </div>
        <div className="bb-blog-title">{blog?.title}</div>
        <div className="bb-blog-w-d-m">
          {
            <Link to={`${author !== undefined ? `/author/${author}` : "/"}`}>
              {blog?.author}
            </Link>
          }{" "}
          | {new Date(blog?.timestamp?.toDate()).toLocaleDateString()}
        </div>
        {/* <div className="bb-blog-tags">
          <div className="bb-blog-tag">
            {" "}
            <i className="fas fa-tag    "></i> ইসলাম
          </div>
          <div className="bb-blog-tag">
            {" "}
            <i className="fas fa-tag    "></i> ইসলাম
          </div>
          <div className="bb-blog-tag">
            {" "}
            <i className="fas fa-tag    "></i> ইসলাম
          </div>
        </div> */}
        <div className="bb-blog-desc">
          <img src={blog?.img_url} alt="" />
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}

export default BigBlog;
