import React, { useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Form, {
  CheckBox,
  Input,
  Label,
  Select,
  TextArea,
} from "../../components/Form";
import Icon from "../../components/Icon";
import TypoGraphy from "../../components/TypoGraphy";
import styles from "./PostForm.module.css";

const initialState = {
  title: "",
  category: "",
  commentsEnabled: true,
  body: "",
};

export default function PostForm({ addPost }) {
  const [formData, setFormData] = useState(initialState);

  const updateInput = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const toggleComments = (e) =>
    setFormData({ ...formData, commentsEnabled: !e.target.checked });

  const onSubmit = (e) => {
    e.preventDefault();
    addPost(formData);
    resetForm();
  };

  const resetForm = () => setFormData({ ...initialState });

  return (
    <Card variant="primary" className={styles.postForm}>
      <Form onSubmit={onSubmit}>
        <TypoGraphy.Heading size="h2">
          Share your secret with the world!
        </TypoGraphy.Heading>
        <Label htmlFor="title">Title</Label>
        <Input name="title" value={formData.title} onChange={updateInput} />
        <Label htmlFor="category">Category</Label>
        <Select
          name="category"
          value={formData.category}
          onChange={updateInput}
        >
          <option value={null}>Select A Category</option>
          <option>CSS</option>
          <option>JS</option>
          <option>Meetups</option>
        </Select>
        <Label htmlFor="body">Body</Label>
        <TextArea name="body" value={formData.body} onChange={updateInput} />
        <CheckBox checked={!formData.commentsEnabled} onChange={toggleComments}>
          Disable Comments
        </CheckBox>
        <Button fullwidth={true} type="submit">
          <Icon>
            <RiSendPlaneFill />
            Post!
          </Icon>
        </Button>
      </Form>
    </Card>
  );
}
