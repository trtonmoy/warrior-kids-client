import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Warrior Kids`;
  }, [title]);
};

export default useTitle;
