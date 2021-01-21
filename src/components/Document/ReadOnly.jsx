import React from "react";
import "./Document.css";
import { Editor } from "@tinymce/tinymce-react";

const ReadOnly = (props) => {
  return (
    <Editor
      disabled={true}
      apiKey={`${process.env.API_KEY}`}
      value={props.value}
      init={{
        height: 650,
        resize: false,
        readonly: true,
        menubar: false,
        indentation: "20pt",
        nonbreaking_force_tab: true,
        plugins: [
          "advlist autolink lists link image charmap print preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table paste code help wordcount",
          "nonbreaking",
        ],
        toolbar: false,
      }}
    />
  );
};

export default ReadOnly;
