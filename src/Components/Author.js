import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import "./Main.css";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import Search from "./Search";
import { tags } from "./Tags";
import db from "./Firebase";

function Main() {
  const { author } = useParams();

  const [writer, setWriter] = useState("");

  useEffect(() => {
    db.collection("authors")
      .doc(author)
      .onSnapshot((snap) => {
        setWriter(snap.data().author);
      });
  }, [author]);

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    db.collection("blogs").onSnapshot((snap) => {
      setBlogs(
        snap.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, [author]);

  // useEffect(() => {
  //   if (blogs.length > 0) {
  //     let matches = blogs.filter((blog) => {

  //       const match = blog.data.tags.map((tag) => {
  //         // if (tag === "উম্মাহ") {
  //         console.log(tag);
  //         // }
  //       });
  //     });
  //   }
  // }, [blogs, category]);

  return (
    <div className="main">
      <Search />
      <main className="main-container">
        {blogs.map((blog) => {
          if (blog.data.author === writer)
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
      </main>

      <Footer />
    </div>
  );
}

export default Main;
