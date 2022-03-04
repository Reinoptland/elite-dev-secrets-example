import { useState, useEffect } from "react";
import styles from "./App.module.css";
import Columns from "./components/Columns";
import LoggedInContent from "./components/LoggedInContent";
import LoggedOutContent from "./components/LoggedOutContent";
import { findOrCreateUser } from "./statehelpers/users";
import {
  addLikeToPost,
  removeLikeFromPost,
  addCommentToPost,
} from "./statehelpers/posts";
import LoginForm from "./templates/LoginForm";
import PageHeader from "./templates/PageHeader";
import Post from "./templates/Post";
import PostForm from "./templates/PostForm";
import { sortByCreatedAtASC } from "./viewhelpers/time";
import { fetchPosts } from "./api/posts";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getData() {
      const [error, data] = await fetchPosts();
      if (data) {
        setPosts(data);
      } else if (error) {
        // handle error here
      }
    }
    getData();
  }, []);

  const [user, setUser] = useState(null);
  const login = (userName) => setUser(findOrCreateUser(userName));
  const logout = () => setUser(null);
  const likePost = (postId) => () => setPosts(addLikeToPost(postId, user.id));
  const unLikePost = (postId) => () =>
    setPosts(removeLikeFromPost(postId, user.id));
  const addComment = (postId) => (commentInput) => {
    // todo: server side updaten
    async function postComment(postId, commentInput, userId) {
      const newComment = {
        postId,
        userId,
        body: commentInput,
      };

      const response = await fetch(`http://localhost:4000/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      });

      const data = await response.json();
      setPosts(addCommentToPost(data));
    }
    postComment(postId, commentInput, user.id);
    // client side update
  };

  return (
    <>
      <PageHeader user={user} logout={logout} />
      <Columns justifyContent="center" alignItems="flex-start">
        <section className={styles.feed}>
          {posts.sort(sortByCreatedAtASC).map((post) => (
            <Post
              key={post.id}
              post={post}
              user={user}
              likePost={likePost(post.id)}
              unLikePost={unLikePost(post.id)}
              addComment={addComment(post.id)}
            />
          ))}
        </section>
        <LoggedOutContent user={user}>
          <LoginForm login={login} />
        </LoggedOutContent>
        <LoggedInContent user={user}>
          <PostForm setPosts={setPosts} user={user} />
        </LoggedInContent>
      </Columns>
    </>
  );
}

export default App;
