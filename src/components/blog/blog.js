import React, { useState, useEffect } from "react";
import Posts from "./post";
import Footer from "../footer";
const Blog = () => {
  const [posts, setPosts] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "https://dev.to/api/articles?username=jumbo02";
  // let  apiPost=''
  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      });
  }, []);
  if (loading)
    return <div className="flex justify-center items-center">Loading</div>;
  if (error) return "Error!";
  return (
    <>
      <div>
        {posts.map((post, index) => (
          <Posts key={`${post.id}-${index}`} post={post} />
        ))}
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Blog;
