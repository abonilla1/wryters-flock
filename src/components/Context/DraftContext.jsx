import React, { createContext, useState } from "react";
import Document from "../../components/Document/Document";
import EntryData from "../../components/EntryData/EntryData";

export const Context = React.createContext({});

export const Provider = () => {
  const props = {
    title: "",
    description: "",
    published: Boolean,
    classification: "",
    genre: "",
    author: "",
    contents: "",
    Document,
    EntryData,
  };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [published, setPublished] = useState(false);
  const [classification, setClassification] = useState("");
  const [genre, setGenre] = useState("");
  const [author, setAuthor] = useState("");
  const [contents, setContents] = useState("");

  const entrydata = {
    title,
    setTitle,
    description,
    setDescription,
    published,
    setPublished,
    classification,
    setClassification,
    genre,
    setGenre,
    author,
    setAuthor,
    contents,
    setContents,
  };

  return (
    <Context.Provider value={entrydata}>
      {Document}
      {EntryData}
    </Context.Provider>
  );
};

export default Context;
