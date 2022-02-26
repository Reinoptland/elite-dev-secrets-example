import React from "react";
import { RiChat2Line, RiCloseFill } from "react-icons/ri";
import Avatar from "../../components/Avatar";
import Button from "../../components/Button";
import Columns from "../../components/Columns";
import Input from "../../components/Form/Input";
import Icon from "../../components/Icon";
import Comment from "./Comment";
import styles from "./CommentSection.module.css";

export default function CommentSection({ user, comments, setShowComments }) {
  return (
    <section>
      <Columns justifyContent="space-between">
        <Avatar user={user} />
        <div className={styles.inputSection}>
          <Input placeholder="Add your comment here" />
          <Columns>
            <Button>
              <Icon>
                <RiChat2Line />
                Post Comment
              </Icon>
            </Button>
            <Button onClick={() => setShowComments(false)}>
              <Icon>
                <RiCloseFill />
                Cancel
              </Icon>
            </Button>
          </Columns>
        </div>
      </Columns>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </section>
  );
}
