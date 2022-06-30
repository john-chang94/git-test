import React, { useState, useEffect } from "react";
import axios from "axios";

const About = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios(`https://jsonplaceholder.typicode.com/posts`);
      const data = res.data.slice(0, 10);
      setPosts(data);
    };

    getPosts();
  }, []);

  return (
    <div>
        {posts.map(post => (
            <div>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))}
    </div>
  )
};

export default About;
