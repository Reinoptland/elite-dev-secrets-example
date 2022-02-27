import React, { useState } from "react";
import { RiLoginBoxLine } from "react-icons/ri";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Form, { Input, Label } from "../../components/Form";
import Icon from "../../components/Icon";
import TypoGraphy from "../../components/TypoGraphy";
import styles from "./LoginForm.module.css";

export default function LoginForm({ login }) {
  const [userName, setUserName] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    login(userName);
  };
  return (
    <Card variant="primary" className={styles.loginForm}>
      <Form onSubmit={onSubmit}>
        <TypoGraphy.Heading size="h2">Login</TypoGraphy.Heading>
        <Label>Name</Label>
        <Input value={userName} onChange={(e) => setUserName(e.target.value)} />
        <Button fullwidth={true} type="submit">
          <Icon>
            <RiLoginBoxLine />
            Login
          </Icon>
        </Button>
      </Form>
    </Card>
  );
}
