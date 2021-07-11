import React, { useEffect, useState } from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Blog({ id, article, author, img_url, min, tags, timestamp, title }) {
  const [article_main, setArticle_main] = useState(article);

  useEffect(() => {
    let art = article.substr(0, 140) + "...";

    setArticle_main(art);
  }, [article]);
  return (
    <Link
      style={{
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      to={`/id/${id}`}
      data-aos="zoom-in"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className={` blog`}
      >
        {/*  */}
        <div className="blog-image">
          <img src={img_url} alt="" />
        </div>
        {/*  */}
        {/*  */}

        <div className="blog-title">{title}</div>
        <div
          dangerouslySetInnerHTML={{ __html: article_main }}
          className="blog-desc"
        ></div>

        {/*  */}
        {/*  */}

        <div className="blog-footer">
          <div className="blog-link blog-footer-writer">
            <i class="fas fa-feather-alt    "></i>
            <div className="name">{author}</div>
          </div>
          <div className="blog-link  blog-footer-date">
            <i class="fas fa-calendar    "></i>
            <div className="name">
              {new Date(timestamp?.toDate()).toLocaleDateString()}
            </div>
          </div>
          <div className="blog-link  blog-footer-min">
            <i class="fas fa-clock    "></i>
            <div className="name">{min} মিনিট</div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default Blog;
