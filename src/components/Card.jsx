import { useEffect, useState } from "react";
import useFetchCard from "../hooks/useFetchCard";

const Cards = () => {
  const [page, setPage] = useState(1);
  const [cards] = useFetchCard(page);

  const handleInfiniteScroll = async () => {

    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  });

  return (
    <>
      {cards.map((item) => (
        <div className="card">
          <p>{item.id}</p>
          <h4 slot="title">{item.title}</h4>
          <br />
          <span slot="description">{item.body}</span>
        </div>
      ))}
    </>
  );
};
export default Cards;
