import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import "./Main.css";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import Search from "./Search";
// import { tags } from "./Tags";
import db from "./Firebase";
import Poster from "./Poster";
import { v4 } from "uuid";

function Main() {
  const { author } = useParams();

  const [writer, setWriter] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [posters, setPosters] = useState([]);
  // const [isBlogs, setIsBlogs] = useState(false);
  // const [isPosters, setIsPosters] = useState(false);

  useEffect(() => {
    db.collection("authors")
      .doc(author)
      .onSnapshot((snap) => {
        setWriter(snap.data().author);
      });
  }, [author]);

  useEffect(() => {
    db.collection("blogs").onSnapshot((snap) => {
      setBlogs(
        snap.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    db.collection("posters").onSnapshot((snap) => {
      setPosters(
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
      <div className="t">Articles</div>
      <main className="main-container">
        {blogs.map((blog) => {
          if (blog.data.author === writer) {
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
          }
          return <div key={v4()} style={{ display: "none" }} />;
        })}
      </main>
      <div className="t">Posters</div>
      <main className="main-container">
        {posters.map((blog) => {
          if (blog.data.author === writer) {
            return (
              <Poster
                key={blog?.id}
                id={blog?.id}
                author={blog?.data.author}
                img_url={blog?.data.img_url}
                timestamp={blog?.data.timestamp}
                title={blog?.data.title}
              />
            );
          }
          return <div key={v4()} style={{ display: "none" }} />;
        })}
      </main>

      <Footer />
    </div>
  );
}

export default Main;
