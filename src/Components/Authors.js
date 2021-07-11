import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import "./Main.css";
import Footer from "./Footer";
import Search from "./Search";
import { Link } from "react-router-dom";
import db from "./Firebase";
import { motion } from "framer-motion";

function Main() {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    db.collection("authors").onSnapshot((snap) => {
      setAuthors(
        snap.docs.map((doc) => ({
          author: doc.data().author,
          id: doc.id,
        }))
      );
      setLoading(false);
    });
  }, []);

  return (
    <div className="lists main">
      {" "}
      <Search />
      <main className="lists-container main-container">
        <section className="category-header">লেখকগণ</section>
        <ol>
          {authors?.map((author) => (
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <Link to={`/author/${author?.id}`}>
                <div className="title">{author?.author}</div>
              </Link>
            </motion.li>
          ))}
        </ol>
      </main>
      {loading ? (
        <div className="loader">
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <></>
      )}
      <Footer />
    </div>
  );
}

export default Main;
