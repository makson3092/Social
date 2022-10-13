import React from "react";
import "./Section.css";
import Posts from "../../Posts/Posts";

const Section = () => {
  return (
    <section>
      <h2>My page</h2>
      <textarea></textarea>
      <button id="post">Post</button>
      <Posts />
    </section>
  );
};

export default Section;
