import React, { useEffect, useState } from "react";
import "./BigBlog.css";
import Footer from "./Footer";
import db, { auth } from "./Firebase";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { tags, tags_rev } from "./Tags";
import { motion } from "framer-motion";

function BigBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [author, setAuthor] = useState("");

  useEffect(() => {
    db.collection("blogs")
      .doc(id)
      .onSnapshot((snap) => {
        setBlog(snap.data());
      });
  }, []);

  useEffect(() => {
    if (blog.author) {
      db.collection("authors")
        .where("author", "==", blog.author)
        .onSnapshot((snap) => {
          let authors = snap.docs.map((doc) => ({
            id: doc.id,
          }));

          setAuthor(authors[0]?.id);
        });
    }
  }, [blog]);

  return (
    <>
      {" "}
      {blog ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="big-blog"
        >
          <div className="bb-image">
            <img src={blog?.img_url} alt="" />
          </div>
          <div className="bb-blog">
            <div
              onClick={() =>
                navigator.clipboard.writeText(window.location.href)
              }
              className="bb-blog-link"
            >
              <i className="fas fa-link    "></i> {id}
            </div>
            <div className="bb-blog-title">{blog?.title}</div>
            <div className="bb-blog-w-d-m f-p">
              {
                <Link
                  to={`${author !== undefined ? `/author/${author}` : "/"}`}
                >
                  {blog?.author}
                </Link>
              }{" "}
              | {new Date(blog?.timestamp?.toDate()).toLocaleDateString()} |{" "}
              {blog?.min} মিনিট
            </div>
            <div className="bb-blog-tags">
              {blog?.tags?.map((tag) => (
                <>
                  <Link
                    to={`${tags_rev[tag] ? `/category/${tags_rev[tag]}` : ""}`}
                    className="bb-blog-tag"
                  >
                    <i className="fas fa-asterisk    "></i> {tag}
                  </Link>
                </>
              ))}
            </div>{" "}
            <div
              dangerouslySetInnerHTML={{ __html: blog?.article }}
              className="bb-blog-desc"
            >
              {/* <h1>ওয়ার্ল্ডভিউ কী?</h1> <b>ওয়ার্ল্ডভিউ হলো চিন্তার কাঠামো।</b> ওই
          কাঠামো, যার সাপেক্ষে, যার মাধ্যমে আমরা বাস্তবতাকে বোঝার চেষ্টা করি।
          আমাদের ওয়ার্ল্ডভিউ-ই ঠিক করে দেয় বাস্তবতাকে আমরা কীভাবে দেখি, বুঝি,
          ব্যাখ্যা করি। ওয়ার্ল্ডভিউকে চিন্তার ভাষা মনে করতে পারেন। প্রত্যেকের
          যেমন নিজস্ব ভাষা থাকে,
          <img src={Logo} alt=""></img>
          তেমনিভাবে প্রত্যেকের একটা ওয়ার্ল্ডভিউ থাকে৷ হয়তো তারা সেটাকে
          ‘ওয়ার্ল্ডভিউ'-এর মতো গালভরা কোনো শব্দ হিসেবে চেনে না, কিন্তু শব্দের
          পেছনের জিনিসটা কমবেশি সবার মধ্যেই থাকে। ওয়ার্ল্ডভিউ হলো ওই লেন্স, ওই
          চশমা যার ভেতর দিয়ে আমরা পৃথিবীকে দেখি। কী আছে, কী নেই? কোনটা বাস্তব,
          কোনটা অবাস্তব? জ্ঞান কী, জ্ঞানের উৎসগুলো কী? জ্ঞানের মানদণ্ড কী? মানুষ
          কী? মানুষ কে? আমরা কোথা থেকে এলাম, কোথায় যাচ্ছি? জীবনের উদ্দেশ্য কী?
          ভালোমন্দের মাপকাঠি কী? এই মাপকাঠি অনুযায়ী কীভাবে মানুষের বেঁচে থাকা
          উচিত? কোন নীতির ভিত্তিতে সমাজ চলবে? আইনের উৎস কী হবে? শাসনের ভিত্তি কী
          হবে?
          <blockquote>
            – প্রত্যেক সমাজ আর সভ্যতা এ প্রশ্নগুলো করেছে। হয়তো শব্দ ভিন্ন
            হয়েছে, উপস্থাপনায় পার্থক্য হয়েছে, কিন্তু মৌলিকভাবে প্রত্যেক
            সভ্যতা এই জিজ্ঞাসাগুলোর জবাব খুঁজেছে। এগুলো মানবঅস্তিত্বের মৌলিক
            প্রশ্ন। এই প্রশ্নগুলোর ব্যাপারে প্রত্যেক সমাজ, সভ্যতা, সংস্কৃতি ও
            দর্শনের কিছু নির্দিষ্ট উত্তর এবং মাপকাঠি থাকে। এগুলো নিয়েই গঠিত হয়
            তার ওয়ার্ল্ডভিউ।
          </blockquote>
          ইসলামের স্বতন্ত্র ওয়ার্ল্ডভিউ আছে। এই ওয়ার্ল্ডভিউ সত্য, সর্বজনীন,
          অপরিবর্তনীয়। যে আধুনিক সভ্যতার অধীনে আমরা বসবাস করি সেটারও নিজস্ব
          <ul>
            <li>স্বতন্ত্র</li>
            <li>ওয়ার্ল্ডভিউ</li>
            <li>আধুনিক</li>
          </ul>
          ওয়ার্ল্ডভিউ আছে। আধুনিকতাও মনে করে তার ওয়ার্ল্ডভিউ সত্য ও সর্বজনীন।
          <i>এ দুটো ওয়ার্ল্ডভিউ মৌলিকভাবে সাংঘর্ষিক।</i>
          <a target="_blank" href="#">
            www.antor.com
          </a>
          <footer>* * *</footer> */}
              {/* {blog?.article} */}
            </div>
          </div>
          <Footer />
        </motion.div>
      ) : (
        ""
      )}
    </>
  );
}

export default BigBlog;
