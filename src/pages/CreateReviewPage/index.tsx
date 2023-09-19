import React, { useState } from "react";
import Header from "../../components/Header";
import style from "./style.module.css";
import CreateOperation from "../../components/CreateOperation";

function CreateReview() {
  return (
    <div className={style.wrapper}>
      <Header />
      <CreateOperation></CreateOperation>
    </div>
  );
}

export default CreateReview;
