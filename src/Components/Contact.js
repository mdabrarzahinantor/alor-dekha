import React, { useState } from "react";
import "./BigBlog.css";
import Footer from "./Footer";
import BG_ABS from "../Assets/Images/BG_ABS.png";
import { motion } from "framer-motion";

function BigBlog() {
  const [show, setShow] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.3 }}
      className="big-blog"
    >
      <div className="bb-image">
        <img src={BG_ABS} alt="" />
      </div>
      <div className="bb-blog">
        {/* <div className="bb-blog-link">
          <i className="fas fa-link    "></i> 6600
        </div> */}
        <div className="bb-blog-title">যোগাযোগ</div>
        {/* <div className="bb-blog-w-d-m">আসিফ আদনান | ১০/০৭/২০১৯ | ৩ মিনিট</div>
        <div className="bb-blog-tags">
          <div className="bb-blog-tag">
            {" "}
            <i className="fas fa-tag    "></i> ইসলাম
          </div>
          <div className="bb-blog-tag">
            {" "}
            <i className="fas fa-tag    "></i> ইসলাম
          </div>
          <div className="bb-blog-tag">
            {" "}
            <i className="fas fa-tag    "></i> ইসলাম
          </div>
        </div>{" "} */}
        <div className="bb-blog-desc">
          <h1>দায়মুক্তি</h1>
          <blockquote style={{ marginTop: "0rem" }}>
            এটি একটি কালেকশন সাইট, তাই এখানে ইসলামের নানা ঘরানার চিন্তাবীদ, আলেম
            ও দাঈদের থেকে প্রকাশিত প্রবন্ধ, বই, অডিও কিংবা ভিডিওর সাথে আমাদের
            সম্পাদকীয় নীতি একমত, এমন সিদ্ধান্তে আসার অবকাশ নেই। তাই তাঁদের
            মতামত, বক্তব্যের বিষয়বস্তু বা এর যথার্থতা নিয়ে "আলোর দেখা" ব্লগটি
            কোনো প্রকার দায় বহন করে না।
          </blockquote>
          <h1 style={{ marginBottom: "0rem" }}>ইমেইল</h1>
          <blockquote style={{ marginTop: "0rem" }}>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:alordekha.blog@gmail.com"
            >
              alordekha.blog@gmail.com
            </a>
          </blockquote>
          <footer>* * *</footer>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}

export default BigBlog;
