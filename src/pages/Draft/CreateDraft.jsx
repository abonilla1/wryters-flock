import React, { useEffect } from "react";
import Document from "../../components/Document/Document";
import EntryData from "../../components/EntryData/EntryData";
import { useHistory } from "react-router-dom";
import { useContent } from "../../components/hooks/useContent";
import { Container } from "semantic-ui-react";
import * as draftAPI from "../../services/draft-api";

const CreateDraft = (props) => {
  const history = useHistory();

  console.log(props);

  const [content, setContent] = useContent({
    content: props.history.location.state.content,
  });

  useEffect(() => {
    (async function () {
      await draftAPI.update(props.history.location.state.draftId, content);
    })();
  });

  useEffect(() => {
    return () => {
      console.log(props);
    };
  }, []);

  let myContent = draftAPI.getOne(props.history.location.state.draftId);

  if (props.history.location.state) {
    return (
      <>
        <Container text>
          <Document value={content.content} onChange={setContent} />
          <EntryData
            draftId={props.history.location.state.draftId}
            value={myContent}
          />
        </Container>
      </>
    );
  } else {
    history.push("/profile");
    return null;
  }
};

export default CreateDraft;
