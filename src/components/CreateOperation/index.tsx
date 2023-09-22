import { Input, Button, Image } from "@mantine/core";
import { Dropzone, FileWithPath, MIME_TYPES } from "@mantine/dropzone";
import style from "./style.module.css";
import React, { useState, useRef } from "react";
import { useCreateReviewMutation } from "../../services/review";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase/index";
import { IconChevronDown } from "@tabler/icons-react";
import category from "../../storage/category.json";

function CreateOperation() {
  const [createReview] = useCreateReviewMutation();
  const [value, setValue] = useState({
    title: "",
    name: "",
    category: "",
    description: "",
    grade: "",
    genre: "",
    imageLink: "",
  });

  const [img, setImg] = useState<File | null>(null);

  function changeInputValue(event: { target: { name: any; value: any } }) {
    setValue({ ...value, [event.target.name]: event.target.value });
  }

  async function handleClick() {
    if (img !== null) {
      const storageref = ref(storage, "images/" + img.name);
      uploadBytes(storageref, img)
        .then((snapshot: any) => {
          console.log("succesful");
        })
        .catch((error: any) => {
          console.error(error);
        });
    }

    createReview(value);
  }

  return (
    <div className={style.wrapper}>
      <h2>Review title</h2>
      <Input
        size="lg"
        name="title"
        onChange={changeInputValue}
        placeholder="review title"
      />

      <h2>Name of film/book/game</h2>
      <Input
        size="lg"
        name="name"
        onChange={changeInputValue}
        placeholder="review name"
      />

      <h2>Category</h2>
      <Input
        size="lg"
        name="category"
        component="select"
        placeholder="review category"
        rightSection={<IconChevronDown />}
      >
        <option value="default">Category</option>
        {category.map((el, index) => (
          <option key={index} value={el.category}>
            {el.category}
          </option>
        ))}
      </Input>

      <h2>Description</h2>
      <Input
        size="lg"
        name="description"
        onChange={changeInputValue}
        placeholder="review description"
      />

      <h2>Grade</h2>
      <Input
        size="lg"
        name="grade"
        onChange={changeInputValue}
        placeholder="review grade"
      />

      <h2>Genre</h2>
      <Input
        size="lg"
        name="genre"
        onChange={changeInputValue}
        placeholder="review genre"
      />

      <h2>Image</h2>
      <div className={style["input-wrapper"]}>
        <Input
          size="lg"
          type="file"
          onChange={(e: any) => setImg(e.target.files[0])}
        />
      </div>

      <Button onClick={handleClick}>go</Button>
    </div>
  );
}

export default CreateOperation;
