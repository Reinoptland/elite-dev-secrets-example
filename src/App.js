import { useState } from "react";
import styles from "./App.module.css";
import Columns from "./components/Columns";
import LoggedInContent from "./components/LoggedInContent";
import LoggedOutContent from "./components/LoggedOutContent";
import { findOrCreateUser } from "./statehelpers/users";
import {
  createPost,
  addLikeToPost,
  removeLikeFromPost,
  addCommentToPost,
  loadDummyPosts,
} from "./statehelpers/posts";
import LoginForm from "./templates/LoginForm";
import PageHeader from "./templates/PageHeader";
import Post from "./templates/Post";
import PostForm from "./templates/PostForm";
import { sortByCreatedAtASC } from "./viewhelpers/time";

function App() {
  const [posts, setPosts] = useState(loadDummyPosts);
  const [user, setUser] = useState(null);
  const login = (userName) => setUser(findOrCreateUser(userName));
  const logout = () => setUser(null);
  const addPost = (postInput) => setPosts(createPost(postInput, user));
  const likePost = (postId) => () => setPosts(addLikeToPost(postId, user.id));
  const unLikePost = (postId) => () =>
    setPosts(removeLikeFromPost(postId, user.id));
  const addComment = (postId) => (commentInput) =>
    setPosts(addCommentToPost(commentInput, postId, user));

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
          <PostForm addPost={addPost} />
        </LoggedInContent>
      </Columns>
    </>
  );
}

export default App;
