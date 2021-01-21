import React from "react";
import "./Document.css";
import { Editor } from "@tinymce/tinymce-react";

const Document = (props) => {
  return (
    <Editor
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
        toolbar:
          "undo redo | formatselect | bold italic backcolor |" +
          "alignleft aligncenter alignright alignjustify |" +
          "bullist numlist |",
      }}
      onEditorChange={props.onChange}
    />
  );
};

export default Document;
