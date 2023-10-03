import React from "react";
import { useState } from "react";
import appwriteService from "../appwrite/config";
import { Container } from "postcss";
import PostCard from "../components/PostCard";

const Home = () => {
  const [posts, setPosts] = useState([]);

  // fetch all the avliable post from the backend
  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(post.documents);
      }
    });
  }, []);

  // condition if post length is 0
  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap ">
            <div className="p-2 w-full">
              <h1 className="text-2xl">Login to read post </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    // if post length !== 0 then , return all post in a post card
    <div>
      <Container>
        <div className="flex flex-wrap">
          {post.map((post) => (
            <div className="p-2 w-1/4" key={post.id}>
              {" "}
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
