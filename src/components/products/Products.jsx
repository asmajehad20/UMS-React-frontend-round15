import React, { useEffect, useState } from "react";
import style from "./Products.module.css";


export default function Products() {
  const [posts, setPosts] = useState([]);
  const [isLoader, setIsLoader] = useState(true);
  const [error, setError] = useState(false);

  const getPosts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setPosts(data.products);
      console.log(data);
    } catch (err) {
      setError(true);
      console.log(error + err);
    } finally {
      setIsLoader(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  if (isLoader) {
    return (
      <>
        <h2>please wait</h2>;
        <div className= {`text-center ${style.loading} `}>
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </>
    );
  }
  if (error) {
    return <h2 className="text-danger">{error}</h2>;
  }

  return (
    <section className="products">
      <div className="container">
        <div className="row">
          {posts.map((post) => {
            return (
              <div className="col-md-4">
                <div className="card">
                  <img src={post.thumbnail} />
                  <h2>{post.title}</h2>
                  <p>{post.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
