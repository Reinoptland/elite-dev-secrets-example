import { useState } from "react";
import styles from "./App.module.css";
import Columns from "./components/Columns";
import LoggedInContent from "./components/LoggedInContent";
import LoggedOutContent from "./components/LoggedOutContent";
import { findOrCreateUser } from "./statehelpers/users";
import LoginForm from "./templates/LoginForm";
import PageHeader from "./templates/PageHeader";
import Post from "./templates/Post";
import PostForm from "./templates/PostForm";
import { sortByCreatedAtASC } from "./viewhelpers/time";

const dummyPosts = [
  {
    id: 1,
    user: { id: 2, name: "Mauro Nieuwenhuisen", hexColor: "#e83b2e" },
    title: "Developer meetups in Gouda",
    createdAt: new Date() - 200000000,
    likes: [3, 4, 7],
    category: "Meetups",
    comments: null,
    commentsEnabled: false,
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis modi odio, obcaecati at sit non sint qui accusamus deleniti corrupti dolorem facilis, ex sequi. Reiciendis, dolorem! Iste commodi veniam maxime.",
  },
  {
    id: 2,
    user: { id: 1, name: "Harm de Kluiver", hexColor: "#f1c232" },
    title: "You should always style things",
    createdAt: new Date() - 600000,
    likes: [1, 3, 4, 7],
    category: "CSS",
    comments: [
      {
        id: 1,
        body: "Yeah for real! 💯🧑‍🎨 \n Making things pretty is super satisfying",
        user: { id: 3, name: "Rein Op 't Land", hexColor: "#3ca11d" },
      },
      {
        id: 2,
        body: "Yeah - but what do you use in React? \n CSS, CSS-modules or CSS-in-JS?",
        user: { id: 2, name: "Mauro Nieuwenhuisen", hexColor: "#e83b2e" },
      },
    ],
    commentsEnabled: true,
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis modi odio, obcaecati at sit non sint qui accusamus deleniti corrupti dolorem facilis, ex sequi. Reiciendis, dolorem! Iste commodi veniam maxime.",
  },
];

function App() {
  const [user, setUser] = useState(null);
  const login = (userName) => setUser(findOrCreateUser(userName));
  const logout = () => setUser(null);
  return (
    <>
      <PageHeader user={user} logout={logout} />
      <Columns justifyContent="center" alignItems="flex-start">
        <section className={styles.feed}>
          {dummyPosts.sort(sortByCreatedAtASC).map((post) => (
            <Post key={post.id} post={post} user={user} />
          ))}
        </section>
        <LoggedOutContent user={user}>
          <LoginForm login={login} />
        </LoggedOutContent>
        <LoggedInContent user={user}>
          <PostForm />
        </LoggedInContent>
      </Columns>
    </>
  );
}

export default App;
