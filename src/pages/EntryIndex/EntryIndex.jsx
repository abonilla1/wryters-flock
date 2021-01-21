import React, { useState, useEffect } from "react";
import * as entriesAPI from "../../services/entry-api";
import EntryCard from "../../components/EntryCard/EntryCard";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  alignItemsAndJustifyContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const EntryIndex = (props) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    (async function () {
      const entries = await entriesAPI.index();
      setEntries(entries);
    })();
  }, []);

  async function handleDeleteEntry(id) {
    await entriesAPI.deleteEntry(id);
    setEntries(entries.filter((entry) => entry._id !== id));
  }

  const classes = useStyles();

  return (
    <>
      <Container maxWidth="sm">
        {entries.map((entry) => (
          <div className={classes.alignItemsAndJustifyContent}>
            <EntryCard
              key={entry._id}
              entry={entry}
              user={props.user}
              handleDeleteEntry={handleDeleteEntry}
            />
          </div>
        ))}
      </Container>
    </>
  );
};

export default EntryIndex;
