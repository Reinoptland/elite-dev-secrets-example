import React from "react";
import { RiLoginBoxLine } from "react-icons/ri";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Form, { Input, Label } from "../../components/Form";
import Icon from "../../components/Icon";
import TypoGraphy from "../../components/TypoGraphy";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
  return (
    <Card variant="primary" className={styles.loginForm}>
      <Form>
        <TypoGraphy.Heading size="h2">Login</TypoGraphy.Heading>
        <Label>Name</Label>
        <Input />
        <Button fullwidth={true}>
          <Icon>
            <RiLoginBoxLine />
            Login
          </Icon>
        </Button>
      </Form>
    </Card>
  );
}
