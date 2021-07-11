import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BigBlog.css";
import db from "./Firebase";
import Footer from "./Footer";
import { motion } from "framer-motion";

function BigBlog() {
  const { poster } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    db.collection("posters")
      .doc(poster)
      .onSnapshot((snap) => {
        setBlog(snap.data());
      });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.3 }}
      className="big-poster big-blog"
    >
      <div className="bb-blog">
        <div className="bb-blog-link">
          <i class="fas fa-link    "></i> {poster}
        </div>
        <div className="bb-blog-title">{blog?.title}</div>
        <div className="bb-blog-w-d-m">
          {blog?.author} |{" "}
          {new Date(blog?.timestamp?.toDate()).toLocaleDateString()}
        </div>
        {/* <div className="bb-blog-tags">
          <div className="bb-blog-tag">
            {" "}
            <i class="fas fa-tag    "></i> ইসলাম
          </div>
          <div className="bb-blog-tag">
            {" "}
            <i class="fas fa-tag    "></i> ইসলাম
          </div>
          <div className="bb-blog-tag">
            {" "}
            <i class="fas fa-tag    "></i> ইসলাম
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
