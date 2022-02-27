import React, { useState } from "react";
import { RiChat2Line, RiCloseFill } from "react-icons/ri";
import Avatar from "../../components/Avatar";
import Button from "../../components/Button";
import Columns from "../../components/Columns";
import Form, { Input } from "../../components/Form";
import Icon from "../../components/Icon";
import Comment from "./Comment";
import styles from "./CommentSection.module.css";

export default function CommentSection({
  user,
  comments,
  setShowComments,
  addComment,
}) {
  const [commentInput, setCommentInput] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    addComment(commentInput);
    setCommentInput("");
  };

  const updateCommentInput = (e) => setCommentInput(e.target.value);

  return (
    <section>
      <Columns justifyContent="space-between">
        <Avatar user={user} />
        <Form onSubmit={onSubmit} className={styles.inputSection}>
          <Input
            placeholder="Add your comment here"
            value={commentInput}
            onChange={updateCommentInput}
          />
          <Columns justifyContent="space-between">
            <Button type="submit">
              <Icon>
                <RiChat2Line />
                Post Comment
              </Icon>
            </Button>
            <Button onClick={() => setShowComments(false)} type="button">
              <Icon>
                <RiCloseFill />
                Cancel
              </Icon>
            </Button>
          </Columns>
        </Form>
      </Columns>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </section>
  );
}
