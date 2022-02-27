import PostStats from "./PostStats";
import React, { useState } from "react";

import Card from "../../components/Card";
import TypoGraphy from "../../components/TypoGraphy";
import styles from "./Post.module.css";
import PostHeader from "./PostHeader";
import LoggedInContent from "../../components/LoggedInContent";
import Button from "../../components/Button";
import { RiChat2Line, RiHeart3Fill, RiHeart3Line } from "react-icons/ri";
import Icon from "../../components/Icon";
import LoggedOutContent from "../../components/LoggedOutContent";
import Columns from "../../components/Columns";
import CommentSection from "./CommentSection";

export default function Post({ user, post, likePost, unLikePost }) {
  const [showComments, setShowComments] = useState(false);
  return (
    <Card as="article" className={styles.post}>
      <PostHeader post={post} />
      <TypoGraphy.Heading size="h2">{post.title}</TypoGraphy.Heading>
      <TypoGraphy.Paragraph>{post.body}</TypoGraphy.Paragraph>
      <PostStats post={post} />
      <LoggedInContent user={user}>
        <Columns>
          {post.likes.includes(user?.id) ? (
            <Button onClick={unLikePost}>
              <Icon>
                <RiHeart3Fill />
              </Icon>
              Like
            </Button>
          ) : (
            <Button onClick={likePost}>
              <Icon>
                <RiHeart3Line />
              </Icon>
              Like
            </Button>
          )}
          {post.commentsEnabled && !showComments && (
            <Button onClick={() => setShowComments(true)}>
              <Icon>
                <RiChat2Line />
              </Icon>
              Comment
            </Button>
          )}
        </Columns>
      </LoggedInContent>
      <LoggedOutContent user={user}>
        {post.commentsEnabled && (
          <TypoGraphy.Heading size="h4">
            login to see the comments
          </TypoGraphy.Heading>
        )}
      </LoggedOutContent>
      <LoggedInContent user={user}>
        {post.commentsEnabled && showComments && (
          <CommentSection
            user={user}
            comments={post.comments}
            setShowComments={setShowComments}
          />
        )}
      </LoggedInContent>
    </Card>
  );
}
