import React, { useEffect, useState } from "react";
import Avatar, { UserName } from "../../components/Avatar";
import Card from "../../components/Card";
import Columns from "../../components/Columns";
import TypoGraphy from "../../components/TypoGraphy";
import styles from "./Comment.module.css";

export default function Comment({ comment: { userId, body } }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function getUser() {
      const response = await fetch(`http://localhost:4000/users/${userId}`);
      const data = await response.json();
      setUser(data);
    }

    getUser();
  }, []);
  return (
    user && (
      <Columns justifyContent="space-between" className={styles.comment}>
        <Avatar user={user} />
        <Card className={styles.commentCard}>
          <UserName user={user} />
          <TypoGraphy.Paragraph>{body}</TypoGraphy.Paragraph>
        </Card>
      </Columns>
    )
  );
}
