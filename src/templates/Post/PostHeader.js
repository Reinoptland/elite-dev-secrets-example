import React from "react";
import Avatar, { UserName } from "../../components/Avatar";
import { fromNow } from "../../viewhelpers/time";
import styles from "./PostHeader.module.css";

export default function PostHeader({ post }) {
  return (
    <header className={styles.post__header}>
      <div className={styles.post__header__left}>
        <Avatar user={post.user} />
        <UserName user={post.user} />
      </div>
      <div className={styles.post__header__right}>
        <time>{fromNow(post.createdAt)}</time>
      </div>
    </header>
  );
}
