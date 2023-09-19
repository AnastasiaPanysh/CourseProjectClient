import { Input, Button } from "@mantine/core";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone"; // Импортируйте Dropzone из Mantined
import style from "./style.module.css";
import React, { useState } from "react";
import { useCreateReviewMutation } from "../../services/review";

function CreateOperation() {
  const [createReview] = useCreateReviewMutation();
  const [value, setValue] = useState({
    title: "",
    name: "",
    category: "",
    description: "",
    grade: "",
    genre: "",
    imageLink: "", // Здесь будет храниться ссылка на изображение
  });

  // Обработчик для загрузки изображения
  function handleImageUpload(files: File[]) {
    // Вам нужно отправить файл в Firebase и получить ссылку на него
    // Здесь я предполагаю, что вы используете Firebase Storage для хранения изображений
    // Замените этот код на соответствующий код для Firebase
    const file = files[0];
    const storageRef = firebase.storage().ref(); // Замените firebase на вашу конфигурацию Firebase
    const imageRef = storageRef.child(file.name);

    imageRef.put(file).then((snapshot) => {
      snapshot.ref.getDownloadURL().then((downloadURL) => {
        setValue({ ...value, imageLink: downloadURL });
      });
    });
  }

  function sendRequest() {
    createReview(value);
  }

  function changeInputValue(event) {
    setValue({ ...value, [event.target.name]: event.target.value });
  }

  return (
    <div className={style.wrapper}>
      <h2>Review title</h2>
      <Input name="title" onChange={changeInputValue} placeholder="review title" />
      
      <h2>Name of film/book/game</h2>
      <Input name="name" onChange={changeInputValue} placeholder="review name" />
      
      <h2>Category</h2>
      <Input name="category" onChange={changeInputValue} placeholder="review category" />
      
      <h2>Description</h2>
      <Input name="description" onChange={changeInputValue} placeholder="review description" />
      
      <h2>Grade</h2>
      <Input name="grade" onChange={changeInputValue} placeholder="review grade" />
      
      <h2>Genre</h2>
      <Input name="genre" onChange={changeInputValue} placeholder="review genre" />
      
      {/* Добавьте компонент Dropzone для загрузки изображения */}
      <Dropzone onDrop={handleImageUpload} accept={[MIME_TYPES.image]}>
        {({ over }) => (
          <div
            style={{
              border: `2px dashed ${over ? "#16a085" : "#ccc"}`,
              borderRadius: "4px",
              padding: "20px",
              textAlign: "center",
            }}
          >
            Drag & drop an image here or click to select
          </div>
        )}
      </Dropzone>

      <Button onClick={sendRequest}>GO</Button>
    </div>
  );
}

export default CreateOperation;
