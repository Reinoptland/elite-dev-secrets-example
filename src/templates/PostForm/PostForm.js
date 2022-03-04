import React, { useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { createNewPostOnServer } from "../../api/posts";
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
import { createPost } from "../../statehelpers/posts";
import styles from "./PostForm.module.css";

const initialState = {
  title: "",
  category: "",
  commentsEnabled: true,
  body: "",
};

export default function PostForm({ user, setPosts }) {
  const [formData, setFormData] = useState(initialState);
  const [formError, setFormError] = useState(null);

  const updateInput = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const toggleComments = (e) =>
    setFormData({ ...formData, commentsEnabled: !e.target.checked });

  const addPost = async (postInput) => {
    // 1. server state updaten
    const [error, data] = await createNewPostOnServer(postInput, user.id);
    if (data) {
      // 2. client state updaten
      setPosts(createPost(data, user));
      resetForm();
      setFormError(null);
      // reset form
    } else if (error) {
      // display something helpful to the user here
      setFormError("Something went wrong");
    }
  };

  const onSubmit = (e) => {
    addPost(formData);
    e.preventDefault();
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
        <TypoGraphy.Heading>{formError}</TypoGraphy.Heading>
      </Form>
    </Card>
  );
}
