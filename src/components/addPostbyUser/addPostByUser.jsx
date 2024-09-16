"use client"


import { addPost } from "@/lib/action";
import styles from "./addPostByUser.module.css";

import { useFormState } from "react-dom";

const AddPostByUser = ({userId}) => {
  const [state, formAction] = useFormState(addPost, undefined);
  
  return (
    <form action={formAction} className={styles.container}>
      <h2>Add New Blog</h2>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="slug" placeholder="Enter any path you want ex: myblog" />
      <input type="text" name="img" placeholder="Enter image url" />
      <textarea type="text" name="desc" placeholder="description" rows={10} />
      <button>Add</button>
      {state?.error}
    </form>
  );
};

export default AddPostByUser;