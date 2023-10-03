import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import PostForm from "../components/PostForm";

const EditPost = () => {
  const [post, setPosts] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPosts(post);
        }
      });
    } else {
      navigate("/");
    }
  }, []);

  return post ? (
    <>
      <div className="py-8">
        <Container>
          <PostForm post={post} />
        </Container>
      </div>
    </>
  ) : null;
};

export default EditPost;
