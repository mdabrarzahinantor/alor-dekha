import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import "./Main.css";
import Footer from "./Footer";
import Search from "./Search";
import db from "./Firebase";

function Main() {
  const [blogs, setBlogs] = useState([]);
  const [latestDoc, setLatestDoc] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    setLoading(true);
    db.collection("blogs")
      .orderBy("timestamp")
      .startAfter(latestDoc || 0)
      .limit(6)
      .onSnapshot((snap) => {
        updateState(snap);
        setLoading(false);
      });
  }, []);

  const updateState = (snap) => {
    if (snap.size !== 0) {
      let listBlogs = snap.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      const lastDoc = snap.docs[snap.docs.length - 1];

      setBlogs((priBlogs) => [...priBlogs, ...listBlogs]);
      setLatestDoc(lastDoc);
    } else {
      setIsEmpty(true);
    }
  };

  const fetchMore = () => {
    setLoading(true);
    db.collection("blogs")
      .orderBy("timestamp")
      .startAfter(latestDoc || 0)
      .limit(6)
      .onSnapshot((snap) => {
        updateState(snap);
        setLoading(false);
      });
  };

  return (
    <div className="main">
      <Search />
      <main className="main-container">
        {blogs.map((blog) => {
          return (
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
          );
        })}
      </main>{" "}
      {loading ? (
        <div className="loader">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <>
          {!isEmpty && (
            <div className="pagination" onClick={() => fetchMore()}>
              {" "}
              <div>LOAD MORE? </div>
            </div>
          )}
        </>
      )}
      <Footer />
    </div>
  );
}

export default Main;
