import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { Button, Container } from "semantic-ui-react";
import * as entryAPI from "../../services/entry-api";
import './EntryData.css'

function EntryData(props) {
  const history = useHistory();
  const [invalidEntry, setValidEntry] = useState(true);
  const formRef = useRef();

  const [state, handleChange] = useForm({
    title: "",
    description: "",
    private: false,
    classification: "",
    genre: "",
    owner: "",
    comments: [],
    likes: [],
    ratings: [],
  });

  async function handleCreateEntry(newEntry) {
    newEntry.content = props.draftId;
    await entryAPI.create(newEntry);
    history.push("/entries");
  }

  useEffect(() => {
    formRef.current.checkValidity()
      ? setValidEntry(false)
      : setValidEntry(true);
  }, [state]);

  async function handleSubmit(e) {
    e.preventDefault();
    state.content = props._draftId;
    console.log(state);
    handleCreateEntry(state);
  }

  return (
    <>
    <Container id='form-container'>
      <div className="AddEntry">
        <form className="col s12" ref={formRef} onSubmit={handleSubmit}>
          <div className="row">
            <div></div>
            <div className="input-field col s12">
              <input type="hidden" name="content" value={props.myContent} />
              <input
                name="title"
                id="title"
                type="text"
                className="active"
                value={state.title}
                onChange={handleChange}
                required
              />
              <label htmlFor="title">Title</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                name="description"
                id="description"
                type="text"
                className="active"
                value={state.description}
                onChange={handleChange}
                required
              />
              <label htmlFor="description">Description</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                name="private"
                id="private"
                type="checkbox"
                className="active"
                value={state.private}
                onChange={handleChange}
              />
              <label htmlFor="private">Private</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <select
                name="classification"
                id="classification"
                type="text"
                className="active"
                value={state.classification}
                onChange={handleChange}
              >
                <option value="Poem">Poem</option>
                <option value="Short Story">Short Story</option>
                <option value="Blog">Blog</option>
                <option value="Lyrics">Lyrics</option>
                <option value="Novel">Novel</option>
                <option value="Essay">Essay</option>
                <option value="Speech">Speech</option>
                <option value="Comic">Comic</option>
                <option value="Journal">Journal Entry</option>
                <option value="Play">Play</option>
              </select>
              <label htmlFor="name">Classification</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <select
                name="genre"
                id="genre"
                type="text"
                className="active"
                value={state.genre}
                onChange={handleChange}
              >
                <option value="Fantasy">Fantasy</option>
                <option value="Mystery">Mystery</option>
                <option value="Drama">Drama</option>
                <option value="Comedy">Comedy</option>
                <option value="AutoBiography">Autobiography</option>
                <option value="Non-Fiction">Non-Fiction</option>
                <option value="Fiction">Fiction</option>
                <option value="Fan-Fic">Fan-Fiction</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Horror">Horror</option>
                <option value="Romance">Romance</option>
                <option value="Historical">Historical</option>
                <option value="Myth">Myth</option>
                <option value="Adventure">Adventure</option>
              </select>
              <label htmlFor="name">Genre</label>
            </div>
          </div>
          <div>
            <Button id='entry-submit-button' type="submit" color='pink' compact  disabled={invalidEntry}>
              Add Entry
          </Button>
          </div>
        </form>
      </div>
    </Container>
    </>
  );
}

export default EntryData;
