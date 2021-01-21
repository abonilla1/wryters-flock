import React from "react";
import { Button, Comment, Form, Header, Container } from "semantic-ui-react";
import "./Comments.css";
import moment from "moment"


const CommentMin = (props) => (
  <Comment.Group size="large" threaded>
    <Header as="h3" dividing>
      Comments
    </Header>
    <Form onSubmit={props.handleSubmit}>
      <textarea
        onChange={props.handleChange}
        name="content"
        placeholder="comment here..."
      />
      <Button type="submit" id="commentbtn" color="pink" compact>
        Leave A Comment
      </Button>
    </Form>
    <div >
      
      {props.comments.map((comment) => (
        <>

          <Container id="comment-box">
            <Comment>
              <Comment.Content>
                <Comment.Author as="a">{comment.commentor.name}</Comment.Author>
                <Comment.Metadata>
                  <span>  {moment(comment.createdAt).format("LLL")}{" "}</span>
                </Comment.Metadata>
                <Comment.Text>{comment.content}</Comment.Text>
              </Comment.Content>
            </Comment>
            {props.user._id === comment.commentor._id ? (
              <Button
                type="submit"
                color="pink"
                compact
                onClick={() =>
                  props.handleDeleteComment(comment, comment._id, props.entryID)
                }
              >
                Delete Comment
              </Button>
            ) : (
              <Button color="pink">like</Button>
            )}
          </Container>
        </>
      ))}
    </div>
  </Comment.Group>
);
export default CommentMin;

