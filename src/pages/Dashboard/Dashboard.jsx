import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import * as draftAPI from "../../services/draft-api";
import * as entriesAPI from "../../services/entry-api";
import { useHistory, Link } from "react-router-dom";
import { Container, Button } from "semantic-ui-react";
import { Card } from 'semantic-ui-react'


const Dashboard = (props) => {
  const history = useHistory();

  const [drafts, setDrafts] = useState([]);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    (async function () {
      const drafts = await draftAPI.index();
      setDrafts(drafts);
    })();
  }, []);

  useEffect(() => {
    (async function () {
      const entries = await entriesAPI.index();
      setEntries(entries.filter((e) => e.owner._id === props.user._id));
    })();
  }, []);

  async function handleCreateDraft(draftTitle) {
    let draftInfo = await draftAPI.create(draftTitle);
    history.push({
      pathname: "/draft",
      state: { draftId: draftInfo._id },
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    handleCreateDraft();
  }

  console.log(drafts);

  return (
    <>
      <h1>Dashboard</h1>
      <Container text>
        <Card.Group id="card-row">
          {drafts.map((d, i) => {
            return (
              <Card>
                <Card.Content>
                  <Card.Header>
                    <Link
                      to={{
                        pathname: "/draft",
                        state: {
                          draftId: d._id,
                          content: d.content,
                        },
                      }}
                    >
                      draft {i + 1}
                    </Link>
                  </Card.Header>
                  <Card.Description>...full text</Card.Description>
                </Card.Content>
              </Card>
            );
          })}
        </Card.Group>
      </Container>
      <div className="new-draft">
        <form onSubmit={handleSubmit}>
          <Button color='pink' compact type='submit'>New Draft</Button>
        </form>
      </div>
    </>
  );
};

export default Dashboard;
