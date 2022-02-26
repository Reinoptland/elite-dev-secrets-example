import React from "react";
import { RiChat2Fill, RiHeart3Fill, RiPriceTag3Fill } from "react-icons/ri";
import Icon from "../../components/Icon";
import TypoGraphy from "../../components/TypoGraphy";
import styles from "./PostStats.module.css";

export default function PostStats({ post }) {
  return (
    <section className={styles.post__stats}>
      <div className={styles.post__stat}>
        <Icon color="crimson" size={24}>
          <RiHeart3Fill />
        </Icon>
        <TypoGraphy.Paragraph>{post.likes.length}</TypoGraphy.Paragraph>
      </div>
      <div className={styles.post__stat}>
        <Icon color="dodgerblue" size={24}>
          <RiPriceTag3Fill />
        </Icon>
        <TypoGraphy.Paragraph>{post.category}</TypoGraphy.Paragraph>
      </div>
      {post.commentsEnabled && (
        <div className={styles.post__stat}>
          <Icon color="mediumvioletred" size={24}>
            <RiChat2Fill />
          </Icon>
          <TypoGraphy.Paragraph>{post.comments.length}</TypoGraphy.Paragraph>
        </div>
      )}
    </section>
  );
}
