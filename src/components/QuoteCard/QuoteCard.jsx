import React from "react";

function QuoteCard({ user, quote, handleDeleteQuote }) {
  return (
    <>
      <div>
        <div>
          <h2>Quote:</h2>
          <h3>{quote.quote}</h3>
          <h2>Author:</h2>
          <h3>{quote.author}</h3>
          <h2>Added By:</h2>
          <h3>{quote.addedBy.name}</h3>
        </div>
        <button
          type="submit"
          className="deleteQuote"
          onClick={() => handleDeleteQuote(quote._id)}
        >
          DELETE
        </button>
      </div>
    </>
  );
}

export default QuoteCard;
