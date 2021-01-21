import { useState } from "react";

export const useContent = (initial) => {
  const [content, setContent] = useState(initial);

  return [
    content,
    (e) => {
      setContent({
        content: e,
      });
    },
  ];
};
