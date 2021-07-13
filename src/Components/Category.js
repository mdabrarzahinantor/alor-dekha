import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import "./Main.css";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import Search from "./Search";
import { tags } from "./Tags";
import db from "./Firebase";

function Main() {
  const { category } = useParams();

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    db.collection("blogs")

      .where("tags", "array-contains", tags[category])

      .onSnapshot((snap) => {
        setBlogs(
          snap.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
        setLoading(false);
      });
  }, [category]);

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
      <section className="category-header">
        {/* {category === "islam" ? "ইসলাম" : <></>}
        {category === "ummah" ? "উম্মাহ" : <></>}
        {category === "bad-motobad" ? "বাদ-মতবাদ" : <></>}
        {category === "shobbhotar-dondho" ? "সভ্যতার দ্বন্ধ" : <></>}
        {category === "shomoshamoik" ? "সমসাময়িক" : <></>} */}
        {tags[category]}
      </section>
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
      </main>
      {loading ? (
        <div className="loader">
          <div classNameclass="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        ""
      )}
      <Footer />
    </div>
  );
}

export default Main;
