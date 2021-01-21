import { useState } from "react";

const useComment = (i) => {
  const [comment, setComment] = useState(i);

  return [
    comment,
    (e) => {
      setComment({
        content: e,
      });
    },
  ];
};
export default useComment;
