import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import * as entriesAPI from "../../services/entry-api";
import ReadOnly from "../../components/Document/ReadOnly";
import CommentSection from "../../components/Comments/Comments";
import { useForm } from "../../components/hooks/useForm";
import * as commentAPI from "../../services/comments";

const DisplayEntry = (props) => {
  console.log(props);
  const location = props.location
  const value = location.state.content;
  const entryID = location.state.id_num;

  const [comments, setComments] = useState([]);

  const [newComment, handleChange] = useForm({
    content: "",
  });

  useEffect(() => {
    (async function () {
      const entry = await entriesAPI.displayEntry(entryID);
      const comments = entry.comments;
      setComments([...comments]);
    })();
  },[])

  async function handleAddComment(comment, entryID) {
    console.log(props.user);
    await commentAPI.createComment(comment, entryID);
  }

  async function handleSubmit(e) {
    e.preventDefault()
    handleAddComment(newComment, entryID)
    newComment.commentor ={}
    newComment.commentor.name = props.user.name
    newComment.commentor._id = props.user._id
    newComment.createdAt = Date.now().toString()
    setComments([...comments, newComment])
  }

  async function handleDeleteComment(comment, id, entryID) {
    if (props.user._id === comment.commentor._id) {
            await commentAPI.deleteComment(entryID, id)
      setComments(comments.filter(c => c._id !== id))
    } else {
      return;
    }
  }

  console.log(props.location);

  return (
    <Container>
      <ReadOnly value={value} />
      {props.user._id === props.location.state.ownerID ? null : null}

      <CommentSection
        comments={comments}
        handleSubmit={handleSubmit}
        newComment={newComment}
        handleChange={handleChange}
        commentor="Commentor"
        handleDeleteComment={handleDeleteComment}
        user={props.user}
        entryID={entryID}
      />
    </Container>
  );
};

export default DisplayEntry;
