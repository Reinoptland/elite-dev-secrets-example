import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Form, { Input, Label, Select, TextArea } from "../../components/Form";
import Icon from "../../components/Icon";
import TypoGraphy from "../../components/TypoGraphy";
import styles from "./PostForm.module.css";

export default function PostForm() {
  return (
    <Card variant="primary" className={styles.postForm}>
      <Form>
        <TypoGraphy.Heading size="h2">
          Share your secret with the world!
        </TypoGraphy.Heading>
        <Label>Title</Label>
        <Input />
        <Label>Category</Label>
        <Select>
          <option value={null}>Select A Category</option>
          <option>CSS</option>
          <option>JS</option>
          <option>Meetups</option>
        </Select>
        <Label>Body</Label>
        <TextArea />
        <Button fullwidth={true}>
          <Icon>
            <RiSendPlaneFill />
            Post!
          </Icon>
        </Button>
      </Form>
    </Card>
  );
}
