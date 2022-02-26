import React from "react";
import Avatar, { UserName } from "../../components/Avatar";
import Card from "../../components/Card";
import Columns from "../../components/Columns";
import TypoGraphy from "../../components/TypoGraphy";
import styles from "./Comment.module.css";

export default function Comment({ comment: { user, body } }) {
  return (
    <Columns justifyContent="space-between" className={styles.comment}>
      <Avatar user={user} />
      <Card className={styles.commentCard}>
        <UserName user={user} />
        <TypoGraphy.Paragraph>{body}</TypoGraphy.Paragraph>
      </Card>
    </Columns>
  );
}
