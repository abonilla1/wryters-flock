import React, { useState, useEffect } from "react";
import "./AddQuote.css";
import axios from "axios";

function AddQuote(props) {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const apiUrl =
    "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";

  const [quote, setQuote] = useState({
    formData: {
      quoteText: "",
      quoteAuthor: "",
    },
  });
  useEffect(() => {
    async function getQuote() {
      const response = await axios.get(proxyUrl + apiUrl);
      setQuote(response.data);
      console.log(response.data);
    }
    getQuote();
  }, []);

  return (
    <>
      <div className="AddQuote">
        <form>
          <p>Quote: {quote.quoteText}</p>
          <p>Author: {quote.quoteAuthor}</p>
          <button type="submit">Get a Random Quote</button>
        </form>
      </div>
    </>
  );
}
export default AddQuote;
