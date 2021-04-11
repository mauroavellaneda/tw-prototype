import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="container">
      <div>
        <h2>Our Blog</h2>
      </div>
      <div>
        <p>
          Stories and tips written by us and our group of ambassadors from all
          over the world
        </p>
      </div>
      <div className="articles">
        <div className="first-article">
          <div className="article-img"></div>
          <h4>Mountains of Babylon!</h4>
          <p>
            The hills are large and wide. Some even reach up to 4km. from the
            ground level. Read more
          </p>
          <p>@May.Smith</p>
        </div>
        <div className="second-article">
          <div className="article-img"></div>
          <div className="article-title">
            <h4>Norway hiking – dangerous & difficult but extremely amusing</h4>
            <p>@Egle.Leino</p>
          </div>
        </div>
        <div className="third-article">
          <div className="article-img"></div>
          <div className="article-title">
            <h4>New Year’s Eve in Denmark | Evening full of surprises</h4>
            <p>@Toomas.Laigu</p>
          </div>
        </div>
        <div className="fourth-article">
          <div className="article-img"></div>
          <div className="article-title">
            <h4>Ultimate backpacking travel guide for men</h4>
            <p>@Toomas.Laigu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
