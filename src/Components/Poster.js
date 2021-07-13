import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import { motion } from "framer-motion";

function Blog({ author, id, img_url, timestamp, title }) {
  return (
    <Link
      style={{
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      to={`/poster/${id}`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="poster blog"
      >
        {/*  */}
        <div className="blog-image">
          <img src={img_url} alt="" />
        </div>

        <div className="blog-title">{title}</div>

        <div className="blog-footer">
          <div className="blog-link blog-footer-writer">
            <i className="fas fa-feather-alt    "></i>
            <div className="name">{author}</div>
          </div>
          <div className="blog-link  blog-footer-date">
            <i className="fas fa-calendar    "></i>
            <div className="name">
              {" "}
              {new Date(timestamp?.toDate()).toLocaleDateString()}
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default Blog;
