import React, { useEffect, useState } from "react";
// import Blog from "./Blog";
import "./Main.css";
import Footer from "./Footer";
import Search from "./Search";
import { Link } from "react-router-dom";
import db from "./Firebase";
import { motion } from "framer-motion";

function Main() {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    db.collection("blogs").onSnapshot((snap) => {
      setLists(
        snap.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
      setLoading(false);
    });
  }, []);
  return (
    <div className="lists main">
      <Search />
      <main className="lists-container main-container">
        <section className="category-header">তালিকাসমূহ</section>
        <ol>
          {lists?.map((list) => (
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              data-aos="zoom-in"
            >
              <Link to={`/id/${list?.id}`}>
                <div className="title">{list?.data.title}</div>
                <div className="author">
                  {" "}
                  <i className="fas fa-feather-alt    "></i> {list?.data.author}
                </div>
                <div className="author">
                  {" "}
                  <i className="fas fa-calendar    "></i>{" "}
                  {new Date(
                    list?.data.timestamp?.toDate()
                  ).toLocaleDateString()}
                </div>
              </Link>
            </motion.li>
          ))}
        </ol>
      </main>
      {loading && (
        <div className="loader">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Main;
